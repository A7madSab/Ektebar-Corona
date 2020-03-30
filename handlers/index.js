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
const utils = require("../utils/index")

// Triggered when user sends a message
const handleMessage = (sender_psid, received_message) => {
    let response = {
        "messaging_type": "الرجاء التعامل مع القائمة الموجودة بالأسفل",
        "recipient": {
            "id": sender_psid
        },
        "message": genericList(received_message.text)
    }

    callSendAPI(sender_psid, response)
}

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
const handlePostback = async (sender_psid, received_message) => {
    let response;
    let responseText = [];
    switch (received_message.payload) {
        case "Get_Last_Corona_Numbers":
            response = await utils.getLastCoronaNumbers()
            break
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
        case "6th_Question":
            response = responseBuilder(sender_psid, Sixth_Question())
            break
        case "7th_Question":
            response = responseBuilder(sender_psid, Seventh_Question())
            break
        case "Emergence":
            responseText = [
                "بناءا علي اجوبتك، ننصحك بالتواصل مع الخط الساخن لوزارة الصحة 105 في اسرع وقت،",
                "لمعرفة ان كانت حالتك تحتاج الي اجراء تحليل فيرس كورونا."
            ];
            break
        case "long_105":
            responseText = [
                "بناءً على الإجابات التي قدمتها رجاءً اتصل على 105 ليقوم أحد أفراد فريق التمريض بتقييم الأعراض.",
                "نرجو عدم الذهاب الى قسم الطوارئ، أو زيارة العيادات ما لم تسوء تلك الأعراض. نرجو القيام بحجر ذاتي حتى تصبح نتيجة تحاليلك متاحة.",
                " العزل الذاتي يتمثل في عدم الذهاب للأماكن العامة، و البقاء في المنزل وعدم مقابلة الزائرين. لا تتشارك الأدوات الشخصية مثل الأطباق و الأواني و المناشف مع الاخرين، و قم بغسل يديك من حين لآخر."
            ];
            break
        case "short_105":
            responseText = ["بناءً علي اجوبتك، ننصحك  بالاتصال بـ 105 للتحدث مع طاقم التمريض و قم بإخبارهم عن الأعراض التي ظهرت عليك"];
            break
        case "don't_Need":
            responseText = [
                "بناءً علي اجوبتك، انت لا تحتاج الى فحص فيروس الكورونا.",
                "هناك العديد من الفيروسات الشائعة غير الكورونا التي تظهر بسببها الأعراض الموجودة عليك.",
                "نرجو من أي شخص تظهر عليه أعراض كالسعال وسيلان الأنف و الحمى واحتقان الحلق أن يقوم بالحجر الذاتي لمدة 14 يوما لتحماية نفسه والاخرين.",
                "الرجاء غسل اليدين بشكل مستمر و مكثف، و حافظ على الابقاء علي مسافة مترين على الأقل مع المحيطين بك.",
                "اذا ساءت الأعراض و كنت مهتما بمعرفة المزيد، اتصل بـ 105"
            ]
            break
        default:
            response = responseBuilder(sender_psid, text("other"))
            break
    }
    if (responseText.length == 0) {
        callSendAPI(sender_psid, response);
    } else {
        for (var i = 0; i < responseText.length; i++) {
            response = responseBuilder(sender_psid, text(responseText[i]));
            callSendAPI(sender_psid, response);
        }
    }
}

module.exports = {
    handleMessage,
    handlePostback
}


// { 
//     "get_started":{
//       "payload":"Take_Test"
//     }
// }