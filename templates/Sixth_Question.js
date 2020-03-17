module.exports = () => ({
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "هل سافر هذا الشخص خارج مصر خلال الثمان وعشرين يوما السابقين؟",
            "buttons": [    
                {
                    "type": "postback",
                    "title": "نعم",
                    "payload": "Direct_Contact_Question"
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
