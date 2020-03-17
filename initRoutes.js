// const fetch = require("node-fetch")

// const persistentMenu = {
//     "persistent_menu": [
//         {
//             "locale": "default",
//             "composer_input_disabled": false,
//             "call_to_actions": [
//                 {
//                     "type": "postback",
//                     "title": "Talk to an agent",
//                     "payload": "CARE_HELP"
//                 },
//                 {
//                     "type": "postback",
//                     "title": "Outfit suggestions",
//                     "payload": "CURATION"
//                 },
//                 {
//                     "type": "web_url",
//                     "title": "Shop now",
//                     "url": "https://www.originalcoastclothing.com/",
//                     "webview_height_ratio": "full"
//                 }
//             ]
//         }
//     ]
// }

// module.exports = async () => {
//     const res = await fetch(`https://graph.facebook.com/v6.0/me/messenger_profile?access_token=${process.env.ACCESS_TOKEN}`, {
//         method: "POST",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(persistentMenu)
//     })
// }