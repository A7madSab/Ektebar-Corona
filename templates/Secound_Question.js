
module.exports = () => ({
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "هل تعاني من ضيق في التنفس او عدم القدرة على الاستلقاء بسبب صعوبة التنفس او حالة صحية مزمنة لا يمكنك السيطرة عليها بسبب مرضك التنفسي الحالي؟",
            "buttons": [
                {
                    "type": "postback",
                    "title": "نعم",
                    "payload": "short_105"
                },
                {
                    "type": "postback",
                    "title": "لا",
                    "payload": "3nd_question"
                },
            ]
        }
    }
})
