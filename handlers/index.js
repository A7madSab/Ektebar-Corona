const callSendAPI = require("../SendApi")
const text = require("../templates/text")
const Take_Test_Button = require("../templates/Take_Test")
const Secound_Question = require("../templates/Secound_Question")
const Third_Question = require("../templates/Third_Question")
const Fourth_Question = require("../templates/Fourth_Question")
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
        response = responseBuilder(sender_psid, Take_Test_Button())
    } else if (received_message.payload === "2nd_question") {
        response = responseBuilder(sender_psid, Secound_Question())
    } else if (received_message.payload === "3nd_question") {
        response = responseBuilder(sender_psid, Third_Question())
    } else if (received_message.payload === "4th_Question") {
        response = responseBuilder(sender_psid, Fourth_Question())
    } else if (received_message.payload === "5th_Question") {
        response = responseBuilder(sender_psid, Fourth_Question())
    } else if (received_message.payload === "7th_Question") {
        response = responseBuilder(sender_psid, Fourth_Question())
    } else if (received_message.payload === "Direct_Contact_Question") {
        response = responseBuilder(sender_psid, text("اتصل بـ 105 للتحدث مع طاقم التمريض بناء على الإجابات التي قدمتها رجاء اتصل على 105 ليقوم أحد أفراد فريق التمريض بتقييم الأعراض. رجاء عدم الذهاب الى قسم الطوارئ، أو زيارة العيادات ما لم تسوء تلك الأعراض بسبب ظهور الأعراض عليك، رجاء القيام بحجر ذاتي حتى تصبح نتيجة تحاليلك متاحة، العزل الذاتي يعني عدم الذهاب للأماكن العامة، البقاء في المنزل وعدم مقابلة الزائرين. لا تتشارك الأدوات الشخصية مثل الأطباق و الأواني و المناشف و قم بغسل يديك من حين لآخر"))
    } else if (received_message.payload === "must_diagnose") {
        response = responseBuilder(sender_psid, text("النتيجة: اتصل بـ 105 للتحدث مع طاقم التمريض و قم بإخبارهم بالأعراض التي ظهرت عليك"))
    } else {
        response = responseBuilder(sender_psid, text("other"))
    }
    callSendAPI(sender_psid, response)
}

module.exports = {
    // handleMessage,
    handlePostback
}


// { 
//     "get_started":{
//       "payload":"Take_Test"
//     }
// }