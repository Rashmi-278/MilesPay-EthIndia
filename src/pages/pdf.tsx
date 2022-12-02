import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Progress } from '@chakra-ui/react'

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

  return (
    <div style={{ margin: 20 }}>
      <Button>
        <a download='pdf' href={'data:application/pdf;base64,' + pdf}>
          Download PDF
        </a>
      </Button>
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
