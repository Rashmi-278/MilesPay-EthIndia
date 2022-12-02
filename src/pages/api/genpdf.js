const html_to_pdf = require('html-pdf-node')
const ejs = require('ejs')

export default function handler(req, res) {
  try {
    let rendered = ejs.render(pdfData, {
      allInfo: { custInfo: { name: [] } },
      user: { name: '' },
    })
    let options = {
      format: 'A4',
      preferCSSPageSize: true,
      margin: {
        top: 50,
        bottom: 50,
      },
    }
    return html_to_pdf.generatePdf({ content: rendered }, options).then((pdfBuffer) => {
      const buffer = Buffer.from(pdfBuffer).toString('base64')
      res.status(200).send({ html: rendered, buffer })
    })
  } catch (err) {
    res.status(500).send({ html: '', message: err.message || err })
  }
}

const pdfData = `<!DOCTYPE html>
<html lang="en">
  <body>
    <div>
      hello
    </div>
  </body>
</html>
`
