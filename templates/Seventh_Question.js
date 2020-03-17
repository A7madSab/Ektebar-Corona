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
                    "payload": "Direct_Contact_Question"
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