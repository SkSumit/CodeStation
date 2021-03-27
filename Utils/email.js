const SibApiV3Sdk = require('sib-api-v3-sdk');

const sendinblue = () => {
    let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.NEXT_PUBLIC_SIB_EMAIL_API_KEY;

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

sendSmtpEmail.subject = "Time to Solve. CHOP CHOP !";
sendSmtpEmail.htmlContent = `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" ><head><title></title> <!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge" /> <!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><style type="text/css">#outlook a{padding:0}.ReadMsgBody{width:100%}.ExternalClass{width:100%}.ExternalClass *{line-height:100%}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic}p{display:block;margin:13px 0}</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width: 480px){@-ms-viewport{width:320px}@viewport{width:320px}}</style><!--<![endif]--> <!--[if mso]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]--> <!--[if lte mso 11]><style type="text/css">.outlook-group-fix{width:100% !important}</style><![endif]--><style type="text/css">@media only screen and (min-width: 480px){.mj-column-per-100{width:100% !important}}</style><style type="text/css"></style></head><body style="background-color: #f9f9f9"><div style="background-color: #f9f9f9"> <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--><div style=" background: #f9f9f9; background-color: #f9f9f9; margin: 0px auto; max-width: 600px; " ><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #f9f9f9; background-color: #f9f9f9; width: 100%" ><tbody><tr><td style=" border-bottom: #333957 solid 5px; direction: ltr; font-size: 0px; padding: 20px 0; text-align: center; vertical-align: top; " > <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0" ><tr></tr></table> <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--><div style=" background: #fff; background-color: #fff; margin: 0px auto; max-width: 600px; " ><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background: #fff; background-color: #fff; width: 100%" ><tbody><tr><td style=" border: #dddddd solid 1px; border-top: 0px; direction: ltr; font-size: 0px; padding: 20px 0; text-align: center; vertical-align: top; " > <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:bottom;width:600px;" > <![endif]--><div class="mj-column-per-100 outlook-group-fix" style=" font-size: 13px; text-align: left; direction: ltr; display: inline-block; vertical-align: bottom; width: 100%; " ><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align: bottom" width="100%" ><tr><td align="center" style=" font-size: 0px; padding: 10px 25px; word-break: break-word; " ><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: collapse; border-spacing: 0px" ><tbody></tbody></table></td></tr><tr><td align="center" style=" font-size: 0px; padding: 10px 25px; padding-bottom: 40px; word-break: break-word; " ><div style=" font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 28px; font-weight: bold; line-height: 1; text-align: center; color: #555; " > NEW QUESTION ADDED</div></td></tr><tr><td align="center" style=" font-size: 0px; padding: 10px 25px; word-break: break-word; " ><div style=" font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 20px; line-height: 22px; text-align: center; color: #555; " > Want a job? Then start solving.</div></td></tr><tr><td align="center" style=" font-size: 0px; padding: 10px 25px; padding-top: 30px;word-break: break-word; " ><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse: separate; line-height: 100%" ><tr><td align="center" bgcolor="#2F67F6" role="presentation" style=" border: none; border-radius: 3px; color: #ffffff; cursor: auto; padding: 15px 25px; " valign="middle" > <a href="http://codestation.ml" style=" background: #2f67f6; color: #ffffff; font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 15px; font-weight: normal; line-height: 120%; margin: 0; text-decoration: none; text-transform: none; " > Take Me There 🚀 </a></td></tr></table></td></tr><tr><td align="center" style=" font-size: 0px; padding-bottom: 50px; word-break: break-word; " ><div style=" font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; line-height: 22px; text-align: center; color: #555; " > Get your ass and solve 'em all.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table> <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"> <![endif]--><div style="margin: 0px auto; max-width: 600px"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%" ><tbody><tr><td style=" direction: ltr; font-size: 0px; padding: 20px 0; text-align: center; vertical-align: top; " > <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:bottom;width:600px;" > <![endif]--><div class="mj-column-per-100 outlook-group-fix" style=" font-size: 13px; text-align: left; direction: ltr; display: inline-block; vertical-align: bottom; width: 100%; " ><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" ><tbody><tr><td style="vertical-align: bottom; padding: 0"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" ><tr><td align="center" style=" font-size: 0px; padding: 0; word-break: break-word; " ><div style=" font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; font-weight: 300; line-height: 1; text-align: center; color: #575757; " > Say thanks bitches, © Sumit Kolpekwar, CodeStation Inc</div></td></tr><tr><td align="center" style=" font-size: 0px; padding: 10px; word-break: break-word; " ><div style=" font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px; font-weight: 300; line-height: 1; text-align: center; color: #575757; " > You can't <p style="color: #575757" >unsubscribe</p > till you get a job.</div></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table> <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table> <![endif]--></div></body></html>`
sendSmtpEmail.sender = {"name":"CodeStation","email":"kolsum24@gmail.com"};
sendSmtpEmail.to = [{"email":"kolsum24@gmail.com","name":"Sumit Kolpekwar"},{"email":"kolsumgta4@gmail.com","name":"Sumit Kolpekwar"},{"email":"yashdewangan123456@gmail.com","name":"Yash Dewangan"},{"email":"mailmenehakulkarni@gmail.com","name":"Atharva Kulkarni"}];
    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
      }, function(error) {
        console.error(error);
      });
}

module.exports = sendinblue