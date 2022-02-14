import type { NextApiRequest, NextApiResponse } from "next"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const nodemailer = require("nodemailer")

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "ubok.website.notifier@gmail.com",
            pass: "v6$@Lilkah"
        },
        secure: true
    })

    const mailData = {
        from: 'ubok.website.notifier@gmail.com',
        to: 'cameron.macalister@voxsio.com',
        subject: `Contact form filled out: ${req.body.firstName} ${req.body.lastName}`,
        text: `Hi there,\n\n${req.body.firstName} ${req.body.lastName} at ${req.body.email} has used the contact form on the website to send the following message:\n\n${req.body.body}\n\nCheers,\nThe Website\n`
    }

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err: any, info: any) => {
            if(err) {
                console.log(err)
                reject(err)
                res.status(501).end()
            }
            else {
                console.log(info)
                resolve(info)
                res.status(200).end()
            }
        })
    })
}