module.exports = () => ({
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "هل تعاني من صعوبة شديدة في التنفس صعوبة أثناء التنفس او أثناء الكلام او ألم شديد في الصدر او تواجه صعوبة في الاستيقاظاو تشعر بالاضطراب و التشويش او فقدان في الوعي؟",
            "buttons": [
                {
                    "type": "postback",
                    "title": "نعم",
                    "payload": "Emergence"
                },
                {
                    "type": "postback",
                    "title": "لا",
                    "payload": "2nd_question"
                },
            ]
        }
    }
})
