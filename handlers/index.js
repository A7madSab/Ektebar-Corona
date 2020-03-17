const callSendAPI = require("../SendApi")
const text = require("../templates/text")
const button = require("../templates/button")
const genericList = require("../templates/genericList")

// // Triggered when user sends a message
// const handleMessage = (sender_psid, received_message) => {
//     let response = {
//         "messaging_type": "RESPONSE",
//         "recipient": {
//             "id": sender_psid
//         },
//         "message": genericList(received_message.text)
//     }

//     callSendAPI(sender_psid, response)
// }

const responseBuilder = (sender_psid, responce) => {
    return ({
        "messaging_type": "RESPONSE",
        "recipient": {
            "id": sender_psid
        },
        "message": responce
    })
}

// Triggered when user presses a button
const handlePostback = (sender_psid, received_message) => {
    let response
    if (received_message.payload === "Take_Test") {
        response = responseBuilder(sender_psid, button())
    } else if (received_message.payload === "must_diagnose") {
        response = responseBuilder(sender_psid, text("call 911 must_diagnose"))
    } else if (received_message.payload === "2nd_question") {
        response = responseBuilder(sender_psid, button())
    } else {
        response = responseBuilder(sender_psid, text("other"))
    }
    callSendAPI(sender_psid, response)
}

module.exports = {
    // handleMessage,
    handlePostback
}