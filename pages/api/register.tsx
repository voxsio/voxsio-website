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
        to: 'michael.mcternan@voxsio.com',
        subject: `Website demo request`,
        text: `Hi there,\n\n${req.body.email} has requested access to the app via the form on the website.\n\nCheers,\nThe Website\n`
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