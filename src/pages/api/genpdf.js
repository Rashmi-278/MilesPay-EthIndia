const html_to_pdf = require('html-pdf-node')
const ejs = require('ejs')

export default function handler(req, res) {
  try {
    let rendered = ejs.render(pdfData, {
      allInfo: {},
      user: {},
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
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Invoice</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      crossorigin="anonymous"
    />
    <style type="text/css">
      body {
        margin: 0;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        font-size: 0.8125rem;
        font-weight: 400;
        line-height: 1.5385;
        color: #333;
        text-align: left;
        background-color: #eee;
      }

      thead {
        display: table-row-group;
      }

      .mt-50 {
        margin-top: 50px;
      }

      .mb-50 {
        margin-bottom: 50px;
      }

      .card {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.1875rem;
      }

      .card-img-actions {
        position: relative;
      }

      .card-body {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1.25rem;
        text-align: center;
      }

      .card-title {
        margin-top: 10px;
        font-size: 17px;
      }

      .invoice-color {
        color: red !important;
      }

      .card-header {
        padding: 0.9375rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0, 0, 0, 0.02);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      }

      a {
        text-decoration: none !important;
      }

      .btn-light {
        color: #333;
        background-color: #fafafa;
        border-color: #ddd;
      }

      .header-elements-inline {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      @media (min-width: 768px) {
        .wmin-md-400 {
          min-width: 400px !important;
        }
      }

      .btn-primary {
        color: #fff;
        background-color: #2196f3;
      }

      .btn-labeled > b {
        position: absolute;
        top: -1px;
        background-color: blue;
        display: block;
        line-height: 1;
        padding: 0.62503rem;
      }

      .center {
        text-align: center;
      }

      .logo {
        width: 10%;
        position: absolute;
        right: 25px;
      }
    </style>
  </head>

  <body>
    <div class="container mt-50 mb-50">
      <div class="row">
        <div class="col-md-12">
          <div class="card" id="invoice">
            <div
              class="card-header bg-transparent header-elements-inline"
              style="justify-content: center"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa mollitia obcaecati
              assumenda
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12">
                  <h2 class="text-center">Invoice</h2>
                </div>
                <div class="col-sm-6">
                  <div class="mb-4 pull-left">
                    <ul class="list list-unstyled mb-0 text-left">
                      <li>
                        <a href="https://example.com"
                          ><span style="color: #3574f1"><strong>Sam</strong></span></a
                        >
                      </li>
                      <li style="color: #000000">8723 ueyui asjadk</li>
                      <li style="color: #000000">+32233232</li>
                      <li style="color: #000000">jsdh@smdn.com</li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-6" style="text-align: right">
                  <div class="col-sm-12">23-12-2022</div>
                  <br />
                  <div class="col-sm-12">Invoice No.: 23</div>
                </div>
              </div>
              <div class="d-md-flex flex-md-wrap">
                <div class="mb-4 mb-md-2 text-left">
                  <img
                    class="logo"
                    src="https://cdn.pixabay.com/photo/2016/09/01/08/24/smiley-1635449__340.png"
                    id="100"
                  />
                  <% if (allInfo) { %>
                  <ul class="list list-unstyled mb-0">
                    <% if (true) { %>
                    <li>
                      <h5 class="my-2"><strong>dfsfdf</strong></h5>
                    </li>
                    <% } else if (true) { %>
                    <li>
                      <h5 class="my-2"><strong>Name Missing</strong></h5>
                    </li>
                    <% } else if(true) { %> <% for( let i = 0; i < 3; i++ ) { %>
                    <li>
                      <h5 class="my-2"><strong>weweewwe</strong></h5>
                    </li>
                    <% } %> <% } %> <% for( let i = 0; i < 2; i++ ) { %> <% if (i===0) { %>
                    <li>
                      <span class="font-weight-semibold">hdg sadkjdhas sadb</span>
                    </li>
                    <% } else if(i !== 0) { %>
                    <li>hdg sadkjdhas sadb</li>
                    <% } %> <% } %>
                    <li>32322232</li>
                    <li>
                      <a href="#" data-abc="true">kdjshd@ms.com</a>
                    </li>
                  </ul>
                  <% } %>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div class="table-responsive">
              <table class="table table-lg">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Prix Avant Taxes</th>
                    <th>TPS(5%)</th>
                    <th>TVQ(9.975%)</th>
                    <th>Prix Total</th>
                  </tr>
                </thead>
                <tbody>
                  <% if (allInfo) { %> <% [2,32].forEach(el => { %>
                  <tr>
                    <td>
                      <h6 class="mb-0">erewrww</h6>
                      <% if (el) { %>
                      <br />
                      <span><strong>Notes: </strong></span>
                      <br />
                      <% for( let i = 0; i < 3; i++ ) { %>
                      <span>dddddf</span>
                      <br />
                      <% } %> <% } %> <% if (el) { %>
                      <br />
                      <span><strong>Préparation: </strong></span>
                      <br />
                      <% for( let i = 0; i < 2; i++ ) { %>
                      <span>dssdsd</span>
                      <br />
                      <% } %> <% } %>
                    </td>
                    <td>
                      <% for( let i = 0; i < 2; i++ ) { %> <% if (i !== 0) { %>
                      <span class="text-muted">OR</span>
                      <% } %>
                      <h6 class="mb-0">23232</h6>
                      <% } %>
                    </td>
                    <td>
                      <% for( let i = 0; i < 4; i++ ) { %> <% if (i !== 0) { %>
                      <span class="text-muted">OR</span>
                      <% } %>
                      <h6 class="mb-0">22332$</h6>
                      <% } %>
                    </td>
                    <td>
                      <% for( let i = 0; i < 2; i++ ) { %> <% if (i !== 0) { %>
                      <span class="text-muted">OR</span>
                      <% } %>
                      <h6 class="mb-0"><%= 2332 %>$</h6>
                      <% } %>
                    </td>
                    <td>
                      <% for( let i = 0; i < 1; i++ ) { %> <% if (i !== 0) { %>
                      <span class="text-muted">OR</span>
                      <% } %>
                      <h6 class="mb-0"><%= 2332 %></h6>
                      <% } %>
                    </td>
                  </tr>
                  <% }) %> <% } %>
                </tbody>
              </table>
            </div>
            <br />
            <div class="card-body">
              <div class="d-md-flex flex-md-wrap">
                <% if (allInfo) { %>
                <div style="text-align: left">
                  <h4>Note:</h4>
                  <br />
                  <% for( let i = 0; i < 2; i++ ) { %>
                  <p>kdajdfk ajhaj asjdajk</p>
                  <% } %>
                </div>
                <% } %>
                <div class="pt-2 mb-3 wmin-md-400 ml-auto">
                  <br />
                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <th class="text-left">
                            Total Avant Taxes:
                            <br />
                            <br />
                            Taxes:
                            <br />
                            <br />
                            Total Après Taxes:
                            <br />
                            <br />
                            Dépôt: 3223
                            <br />
                            <br />
                            Payment Made 2332
                            <br />
                            <br />
                            Payment Made # jhgjhghj
                          </th>
                          <td class="text-right text-primary">
                            <h5 class="font-weight-semibold">333443$</h5>
                            <h5 class="font-weight-semibold" style="margin-top: 16px">544554$</h5>
                            <h5 class="font-weight-semibold" style="margin-top: 16px">54454$</h5>
                            <h5 class="font-weight-semibold" style="margin-top: 16px">4545$</h5>
                            <% for( let i = 0; i < 2; i++ ) { %>
                            <h5 class="font-weight-semibold" style="margin-top: 16px">434343$</h5>
                            <% } %>
                          </td>
                        </tr>
                        <tr>
                          <th class="text-left">Balance:</th>
                          <td class="text-right text-primary">
                            <h5 class="font-weight-semibold">2323$</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`
