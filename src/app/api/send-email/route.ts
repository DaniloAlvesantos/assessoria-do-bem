import {
  generateTemplate,
  generateTemplateAttrs,
} from "@/utils/generateTemplate";
import { NextResponse, type NextRequest } from "next/server";
import Nodemailer, { SendMailOptions } from "nodemailer";

const transporter = Nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "noreply.assessoriadobem@gmail.com",
    pass: "nqkh xtyn jldc xqzz",
  },
});

const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Solicitação de Diagnóstico</title>
  <style type="text/css">
    /* Reset styles to ensure consistency across email clients */
    body,
    table,
    td,
    a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    img {
      -ms-interpolation-mode: bicubic;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
    }
    table {
      border-collapse: collapse !important;
    }
    body {
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
    }

    /* For Gmail, Hotmail, and other webmail clients */
    div[style*="margin: 16px 0;"] {
      margin: 0 !important;
    }

    /* Media queries for responsive design (optional, but highly recommended) */
    @media screen and (max-width: 600px) {
      .full-width {
        width: 100% !important;
      }
      .stack {
        display: block !important;
        width: 100% !important;
      }
      .mobile-padding {
        padding: 20px !important;
      }
      .hide-on-mobile {
        display: none !important;
        max-height: 0 !important;
        overflow: hidden !important;
      }
      h1 {
        font-size: 28px !important;
        line-height: 32px !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0">
  <center style="width: 100%; background-color: #f2f2f2">
    <div
      style="
        display: none;
        font-size: 1px;
        color: #fefefe;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
      "
    >
      Nova solicitação de diagnóstico de {{nome}}!
    </div>

    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="
        border-collapse: collapse;
        max-width: 600px;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      "
    >
      <tr>
        <td align="center" style="padding: 30px 0 20px 0; background-color: #f7f7f7;">
          <a
            href="https://assessoriadobem.com.br"
            target="_blank"
            style="text-decoration: none"
          >
            <img
              src="https://assessoriadobem.com.br/wp-content/uploads/2022/03/lgg.png"
              alt="adb logo"
              style="display: block; border: 0;"
              width="200"
              height="50"
            />
          </a>
        </td>
      </tr>

      <tr>
        <td style="padding: 30px 40px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td
                style="
                  color: #153643;
                  font-family: Arial, sans-serif;
                  font-size: 24px;
                  padding-bottom: 20px;
                "
              >
                <b>Nova Solicitação de Diagnóstico!</b>
              </td>
            </tr>
            <tr>
              <td
                style="
                  color: #153643;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                  padding-bottom: 10px; /* Reduced padding for compact list */
                "
              >
                <strong>Nome:</strong> {{nome}}
              </td>
            </tr>
            <tr>
              <td
                style="
                  color: #153643;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                  padding-bottom: 10px;
                "
              >
                <strong>Email:</strong> {{email}}
              </td>
            </tr>
            <tr>
              <td
                style="
                  color: #153643;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                  padding-bottom: 10px;
                "
              >
                <strong>Telefone:</strong> {{telefone}}
              </td>
            </tr>
            <tr>
              <td
                style="
                  color: #153643;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                  padding-bottom: 10px;
                "
              >
                <strong>Nome da Empresa:</strong> {{nomeEmpresa}}
              </td>
            </tr>
            <tr>
              <td
                style="
                  color: #153643;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                  padding-bottom: 10px;
                "
              >
                <strong>Faturamento Estimado:</strong> {{faturamentoEstimado}}
              </td>
            </tr>
            <tr>
              <td
                style="
                  color: #153643;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 24px;
                  padding-bottom: 20px;
                "
              >
                <strong>Mensagem:</strong> <br />
                {{mensagem}}
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-top: 20px; padding-bottom: 20px">
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td
                      align="center"
                      bgcolor="#007bff"
                      style="padding: 12px 25px; border-radius: 5px"
                    >
                      <a
                        href="https://api.whatsapp.com/send?phone={{whatsappPhone}}"
                        target="_blank"
                        style="
                          color: #ffffff;
                          text-decoration: none;
                          font-family: Arial, sans-serif;
                          font-size: 16px;
                          font-weight: bold;
                        "
                      >
                        Entrar em contato
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding: 20px 40px; background-color: #f8f8f8; border-top: 1px solid #e0e0e0; border-radius: 0 0 8px 8px;">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
          >
            <tr>
              <td
                align="center"
                style="
                  color: #999999;
                  font-family: Arial, sans-serif;
                  font-size: 12px;
                "
              >
                © 2025 assessoria-do-bem. Todos os direitos reservados.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>`;

export async function POST(request: NextRequest) {
  const verifyTransporter = await transporter.verify();
  const { name, email, company, revenue, message, telefone } =
    await request.json();

  if (!verifyTransporter)
    return NextResponse.json({
      message: "Error on verify transporter",
      status: 404,
    });

  const attrs: generateTemplateAttrs = [
    {
      label: "nome",
      value: name,
    },
    {
      label: "email",
      value: email,
    },
    {
      label: "telefone",
      value: telefone,
    },
    {
      label: "nomeEmpresa",
      value: company,
    },
    {
      label: "faturamentoEstimado",
      value: revenue,
    },
    {
      label: "mensagem",
      value: message,
    },
    {
      label: "whatsappPhone",
      value: telefone.replace(/\D/g, ""),
    },
  ];

  if (attrs.some((d) => !d.value || !d.label)) {
    const emptyAttrs = attrs.filter((d) => !d.label || !d.value);

    return NextResponse.json({
      message: "Error with attrs, there is empty attr.",
      status: 400,
      emptyAttrs,
    });
  }

  const replacedHTML = generateTemplate({
    html,
    attrs,
  });

  const mailOptions: SendMailOptions = {
    from: "noreply.assessoriadobem@gmail.com",
    to: "a.manduca@assessoriadobem.com.br",
    subject: "Assessoria do bem - Diagnóstico",
    html: replacedHTML,
  };

  const emailSend = await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: "Sucess", status: 200 });
}