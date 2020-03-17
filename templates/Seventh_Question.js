module.exports = () => ({
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "هل سافرت خارج مصر خلال الأربعة عشر يوما السابقة لظهور الأعراض عليك؟",
            "buttons": [
                {
                    "type": "postback",
                    "title": "نعم",
                    "payload": "long_105"
                },
                {
                    "type": "postback",
                    "title": "لا",
                    "payload": "5th_Question"
                },
            ]
        }
    }
})