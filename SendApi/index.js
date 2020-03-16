const fetch = require("node-fetch")

//  Send the responce to messenger
module.exports = (sender_psid, response) => {
    const url = `https://graph.facebook.com/v5.0/me/messages?access_token=${process.env.ACCESS_TOKEN}`

    try {
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(response)
        })
    } catch (err) {
        console.log("err", err)
    }
    console.log("response:", response)
    console.log("sender_psid:", sender_psid)
    console.log("url:", url)
}