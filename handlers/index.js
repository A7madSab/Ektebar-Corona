const callSendAPI = require("../SendApi")
const text = require("../templates/text")
const buttonList = require("../templates/buttonList")
const genericList = require("../templates/genericList")

// // Triggered when user sends a message
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
        "message": buttonList()
    }

    callSendAPI(sender_psid, response)
}

module.exports = {
    handleMessage,
    handlePostback
}