// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  const {email,subject,message} = req.body;
  try {
    //create an transporter using nodemailer
    const transporter = await nodemailer.createTransport({
      service:'gmail',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS
      }
    })
    // send mail using nodemailer
    await transporter.sendMail({
      from:email,
      to: process.env.EMAIL, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: email + '<br />' + message, // html body
    });
    res.status(200).json({ success:true, message: 'sent Successfully'})
  } catch (error) {
    res.send({success:false,message:'not sent'})
  }
}
