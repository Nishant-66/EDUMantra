const nodemailer=require('nodemailer');
const mailSend=async(email,title,body)=>{
    try{
     let transporter=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
     })
     let information=await transporter.sendMail({
        from:"EDUMantra || TEAM-CODEKAR",
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`,
     })
    }
    catch(err){
        console.log("err on sending email",err.message);
    }

}
module.exports = mailSend;