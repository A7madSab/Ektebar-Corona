const callSendAPI = require("../SendApi")
const text = require("../templates/text")
const genericList = require("../templates/genericList")

// Triggered when user sends a message
const handleMessage = (sender_psid, received_message) => {
    let response = {
        "messaging_type": "RESPONSE",
        "recipient": {
            "id": sender_psid
        },
        "message": genericList(received_message.text)
    }

    callSendAPI(sender_psid, response)
}

// Triggered when user presses a button
const handlePostback = (sender_psid, received_message) => {
    let response = {
        "messaging_type": "RESPONSE",
        "recipient": {
            "id": sender_psid
        },
        "message": text(received_message.text)
    }

    callSendAPI(sender_psid, response)
}

module.exports = {
    handleMessage,
    handlePostback
}