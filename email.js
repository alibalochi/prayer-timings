const fs = require('fs');

const nodemailer = require("nodemailer");

const log4js = require('log4js');
log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: 'application.log' }
  },
  categories: {
    default: { appenders: [ 'out', 'app' ], level: 'error' }
  }
});

const logger = log4js.getLogger('Database');
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'al@abdesigns.net', // generated ethereal user
      pass: 'gscmhdbzgffiinis' // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <ali@localhost.com>', // sender address
    to: "ali.haider.baloch@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

main()
.catch(err=>(logger.error(err)))
.then(()=> {
    fs.readFile('./application.log','utf-8', (err, data) => {
        if (data) {
            // fs.writeFile('./application.log', '', function(){console.log('done')})
            async function correct() {
  

                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                  host: "smtp.gmail.com",
                  port: 465,
                  secure: true, // true for 465, false for other ports
                  auth: {
                    user: 'ali@abdesigns.net', // generated ethereal user
                    pass: 'gscmhdbzgffiinis' // generated ethereal password
                  }
                });
              
                // send mail with defined transport object
                let info = await transporter.sendMail({
                  from: '"Fred Foo 👻" <ali@localhost.com>', // sender address
                  to: "ali.haider.baloch@gmail.com", // list of receivers
                  subject: "Hello ✔", // Subject line
                  text: "Hello world?", // plain text body
                  html: "<b>Hello world?</b>" // html body
                });
              
                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
              
              }
              correct().catch(()=>(console.log('email error')))
        }
        else if (err) {
          console.error(err)
          return
        } else {
            console.log('nodata')
        }
        
      })
})

