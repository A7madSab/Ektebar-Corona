module.exports = (sender_psid) => ({
    "messaging_type": "RESPONSE",
    "recipient": {
        "id": sender_psid
    },
    "sender_action": "typing_on"
})