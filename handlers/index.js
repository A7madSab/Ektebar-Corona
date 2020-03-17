const callSendAPI = require("../SendApi")
const text = require("../templates/text")
const Take_Test_Button = require("../templates/Take_Test")
const Secound_Question = require("../templates/Secound_Question")
const Third_Question = require("../templates/Third_Question")
const Fourth_Question = require("../templates/Fourth_Question")
const Fifth_Question = require("../templates/Fifth_Question")
const Sixth_Question = require("../templates/Sixth_Question")
const Seventh_Question = require("../templates/Seventh_Question")
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
    switch (received_message.payload) {
        case "Take_Test":
            response = responseBuilder(sender_psid, Take_Test_Button())
            break
        case "2nd_question":
            response = responseBuilder(sender_psid, Secound_Question())
            break
        case "3nd_question":
            response = responseBuilder(sender_psid, Third_Question())
            break
        case "4th_Question":
            response = responseBuilder(sender_psid, Fourth_Question())
            break
        case "5th_Question":
            response = responseBuilder(sender_psid, Fifth_Question())
            break
        case "7th_Question":
            response = responseBuilder(sender_psid, Seventh_Question())
            break
        case "Direct_Contact_Question":
            response = responseBuilder(sender_psid, text("اتصل بـ 105 للتحدث مع طاقم التمريض بناء على الإجابات التي قدمتها رجاء اتصل على 105 ليقوم أحد أفراد فريق التمريض بتقييم الأعراض. رجاء عدم الذهاب الى قسم الطوارئ، أو زيارة العيادات ما لم تسوء تلك الأعراض بسبب ظهور الأعراض عليك، رجاء القيام بحجر ذاتي حتى تصبح نتيجة تحاليلك متاحة، العزل الذاتي يعني عدم الذهاب للأماكن العامة، البقاء في المنزل وعدم مقابلة الزائرين. لا تتشارك الأدوات الشخصية مثل الأطباق و الأواني و المناشف و قم بغسل يديك من حين لآخر"))
            break
        case "must_diagnose":
            response = responseBuilder(sender_psid, text("النتيجة: اتصل بـ 105 للتحدث مع طاقم التمريض و قم بإخبارهم بالأعراض التي ظهرت عليك"))
            break
        default:
            response = responseBuilder(sender_psid, text("other"))
            break
    }
    // } else if (received_message.payload === "5th_Question") {
    //     response = responseBuilder(sender_psid, Sixth_Question())
    // }        
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