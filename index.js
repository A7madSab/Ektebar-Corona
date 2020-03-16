const express = require("express")
const bodyParser = require("body-parser")
const fetch = require("node-fetch")
const handle = require("./handlers")

const app = express()

require("./initRoutes")()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// To verify source
app.get("/webhook", (req, res) => {
    let mode = req.query["hub.mode"]
    let token = req.query["hub.verify_token"]
    let challenge = req.query["hub.challenge"]

    if (mode && token) {
        if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
            console.log("WEBHOOK_VERIFIED")
            res.status(200).send(challenge)
        } else {
            res.sendStatus(403)
        }
    }
})

app.post("/webhook", (req, res) => {
    let body = req.body

    if (body.object === "page") {
        body.entry.forEach(function (entry) {
            let webhook_event = entry.messaging[0]

            let sender_psid = webhook_event.sender.id

            if (webhook_event.message) {
                console.log("message", webhook_event.message.text)
                handle.handleMessage(sender_psid, webhook_event.message.text)
            } else if (webhook_event.postback) {
                console.log("webhook_event.postback", webhook_event.postback)
                handle.handlePostback(sender_psid, webhook_event.postback)
            }

        })
        res.status(200).send("EVENT_RECEIVED")
    } else {
        res.sendStatus(404)
    }
})

app.listen(process.env.PORT || 3000, () => console.log("Sever is UP!"))



// else if (webhook_event.postback) {
//     console.log("clicked on a button")
//     handle.handlePostback(sender_psid, webhook_event.postback)
// } else if (webhook_event.delivery) {
//     console.log("webhook_event.deliveries")
// } else if (webhook_event.reaction) {
//     console.log("message_reactions")
// }