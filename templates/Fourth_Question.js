module.exports = () => ({
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "هل تعاملت بشكل مباشر مع أحد الأشخاص المؤكد إصابتهم بالفيروس خلال الأربعة عشر يوما السابقة لظهور الأعراض عليك؟",
            "buttons": [
                {
                    "type": "postback",
                    "title": "نعم",
                    "payload": "long_105"
                },
                {
                    "type": "postback",
                    "title": "لا",
                    "payload": "7th_Question"
                },
            ]
        }
    }
})