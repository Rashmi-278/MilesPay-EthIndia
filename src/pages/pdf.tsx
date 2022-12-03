import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Progress } from '@chakra-ui/react'
import { Web3Storage, File } from 'web3.storage/dist/bundle.esm.min.js'

const Pdf = () => {
  const [html, setHtml] = useState('')
  const [pdf, setPdf] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        let res = await axios.get('/api/genpdf')
        setLoading(false)
        setHtml(res.data.html)
        setPdf(res.data.buffer)
      } catch (err) {
        console.error(err)
        setErr(err)
        setLoading(false)
      }
    })()
  }, [])

  /* --------code for uploading data to filecoin-------- */

  function getAccessToken() {
    return process.env.NEXT_PUBLIC_WEB3_STORAGE_API
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
  }

  const uploadToIPFS = async (files) => {
    const client = makeStorageClient()
    const cid = await client.put(files)

    return cid
  }

  const savePDF = async () => {
    try {
      const obj = { pdfData: pdf }
      const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
      const files = [new File([blob], 'final.json')]
      const cid = await uploadToIPFS(files)
      console.log(cid)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div style={{ margin: 20 }}>
      <Button>
        <a download='pdf' href={'data:application/pdf;base64,' + pdf}>
          Download PDF
        </a>
      </Button>
      <Button onClick={() => savePDF()}>Save PDF</Button>
      <br />
      <br />
      {loading ? (
        <Progress size='xs' isIndeterminate />
      ) : (
        <div style={{ border: '1px solid red' }} dangerouslySetInnerHTML={{ __html: html }} />
      )}
      {err && <div style={{ color: 'red' }}>{err}</div>}
    </div>
  )
}

export default Pdf
