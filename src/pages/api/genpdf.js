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
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossorigin="anonymous" />
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

    .btn-labeled>b {
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
      width: 25%;
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
          <div class="card-header bg-transparent header-elements-inline" style="justify-content: center">
            <strong>MilesPay</strong>
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
                      <a href="https://example.com"><span style="color: #3574f1"><strong>DHL Courier Services</strong></span></a>
                    </li>
                    <li style="color: #000000">8723 lorem ipsum</li>
                    <li style="color: #000000">+3223323232</li>
                    <li style="color: #000000">admin@milespays.com</li>
                    <li style="color: #000000">Tax No.: 36237632623</li>
                    <li style="color: #000000">Wallet: 0x32762373267823623687</li>
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
                <img class="logo" src="https://ucd26e70454a3db4b6fe8bb554f9.previews.dropboxusercontent.com/p/thumb/ABtFmqztzos0HSAtkk0f4Jkw88zuNctlhQznajuvEVTapKeF0ni-dOQAhf3WU7T6NJ2QnlxzUr0UK18n8IDski8MiZ78fJ8y_ZY6Hs5F_tVLN0rwAHCRKD6XygrWzsnDCfVW3q6mzh3iVALEUqKXnn8oFV36cIc5Jw9klrhEtAvDVCvziiDHQ0OX1vUswNfZ_4oG5tt9ff9IIGb5azV5rPw1Wqx_TsE0BGEep50SSW3scsuNDl4f8mWl7K_IpWr8om2vGKILHv7rj6OpKbIGD2jsw2lQz5QP2HnJktog_LWnJT2-VaP_-t67m7Og1jMOpgbIXxITtsDqDHMsaeA2BGraBlegp6Qx42LW6WKZQdKskNA_Sep4dsG1mpJYbPb99ylkD0gOc_RVKWzp5su_ljB1SqGbWZcSFtdSrSDpf2hv8A/p.png" id="100" />

                <ul class="list list-unstyled mb-0">

                  <li>
                    <h5 class="my-2"><strong>Hyundai</strong></h5>
                  </li>

                  <li>
                    <span class="font-weight-semibold">56362 lorem ipsum</span>
                  </li>

                  <li>+7634673476</li>

                  <li>sales@milespays.com</li>
                  <li style="color: #000000">Wallet: 0x67766767677676767645</li>
                </ul>

              </div>
            </div>
          </div>
          <br />
          <div style="display: flex; justify-content: space-around;">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">PickUp Destination</h5>
                <p class="card-text">
                  <li>
                    <span class="font-weight-semibold">36347 lorem ipsum askjdhakjajka</span>
                  </li>
                </p>

              </div>
            </div>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Drop Destination</h5>
                <p class="card-text">
                  <li>
                    <span class="font-weight-semibold">22222 lorem ipsum askjdhakjajka</span>
                  </li>
                </p>

              </div>
            </div>
          </div>
          <br />
          <div style="display: flex; justify-content: space-around;">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <p class="card-text">
                  <li>
                    <span class="font-weight-bold">No. of milestones: 4</span>
                  </li>
                  <li>
                    <span class="font-weight-bold">Milestones Payment Percentages: 10% 10% 10% 70%</span>
                  </li>
                </p>

              </div>
            </div>
          </div>
          <br />
          <br />
          <div style="page-break-after: always;"></div>
          <div>&nbsp;
          </div>
          <div class="table-responsive">
            <table class="table table-lg">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Per Amount</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>
                    <h6 class="mb-0">erewrww</h6>
                  </td>
                  <td>

                    <h6 class="mb-0">23232</h6>

                  </td>
                  <td>

                    <h6 class="mb-0">22332$</h6>

                  </td>
                  <td>
                    <h6 class="mb-0">2332$</h6>
                  </td>
                </tr>

                <tr>
                  <td>
                    <h6 class="mb-0">erewrww</h6>
                  </td>
                  <td>

                    <h6 class="mb-0">23232</h6>

                  </td>
                  <td>

                    <h6 class="mb-0">22332$</h6>

                  </td>
                  <td>
                    <h6 class="mb-0">2332$</h6>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <div class="card-body">
            <div class="d-md-flex flex-md-wrap">

              <div class="pt-2 mb-3 wmin-md-400 ml-auto">
                <br />
                <div class="table-responsive">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th class="text-left">
                          SubTotal:
                          <br />
                          <br />
                          Taxes:
                          <br />
                          <br />
                          Total:
                        </th>
                        <td class="text-right text-primary">
                          <h5 class="font-weight-semibold">333443$</h5>
                          <h5 class="font-weight-semibold" style="margin-top: 16px">544554$</h5>
                          <h5 class="font-weight-semibold" style="margin-top: 16px">54454$</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <h5 style="margin-left: 10px; text-decoration: underline;">Milestones Info</h5>
          <div class="table-responsive">
            <table class="table table-lg">
              <thead>
                <tr>
                  <th>MilestoneId</th>
                  <th>Supervisor Address</th>
                  <th>Date and Time</th>
                  <th>Txn Hash</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>
                    <h6 class="mb-0">23323232</h6>
                  </td>
                  <td>

                    <h6 class="mb-0">kdjfhjkfh dfdf</h6>

                  </td>
                  <td>

                    <h6 class="mb-0">22-03-22 08:23</h6>

                  </td>
                  <td>
                    <h6 class="mb-0">dfjkhfdsjkfds</h6>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <br />
          <h5 style="margin-left: 10px; text-decoration: underline;">Payments Info</h5>
          <div class="table-responsive">
            <table class="table table-lg">
              <thead>
                <tr>
                  <th>PaymentId</th>
                  <th>Amount</th>
                  <th>MilestoneId</th>
                  <th>Date and Time</th>
                  <th>Txn Hash</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>
                    <h6 class="mb-0">23323232</h6>
                  </td>
                  <td>

                    <h6 class="mb-0">32323$</h6>

                  </td>
                  <td>
                    <h6 class="mb-0">22323243443</h6>
                  </td>
                  <td>

                    <h6 class="mb-0">22-03-22 08:23</h6>

                  </td>
                  <td>
                    <h6 class="mb-0">dfjkhfdsjkfds</h6>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
`
