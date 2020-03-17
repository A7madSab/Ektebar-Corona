module.exports = () => ({
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "هل تعاني من او حمى او  سعال او  ضيق في التنفس او احتقان أو التهاب في الحلق؟",
            "buttons": [
                {
                    "type": "postback",
                    "title": "نعم",
                    "payload": "Fourth_Question"
                },
                {
                    "type": "postback",
                    "title": "لا",
                    "payload": "Fifth_Question"
                },
            ]
        }
    }
})
