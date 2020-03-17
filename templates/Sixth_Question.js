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
                    "payload": "long_105"
                },
                {
                    "type": "postback",
                    "title": "لا",
                    "payload": "don't_Need"
                },
            ]
        }
    }
})
