module.exports = () => ({
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "button",
            "text": "هل تعاملت عن قرب مع أحد الأشخاص الذين يعانون من أمراض تنفسية خلال الـ14 يوما السابقين؟ التعامل عن قرب يكون عن طريق أحد الأشخاص الذين يقدمون الرعاية للأفراد، بما يتضمن مقدموا الرعاية الطبية، أفراد الأسرة أو جليسي الأطفال و المرضى و كبار السن، أو من قاموا باتصال جسدي بدون الاستعمال المناسب لأدوات الحماية الشخصيةاو الذين عاشوا أو تعرضوا لاتصال مطوّل (على مسافة مترين) مع أحد الأشخاص المعديين. التعرض المباشر رذاذ هذا الشخص (رذاذ نتيجة السعال أو العطس) بدون ارتداء أدوات الحماية الشخصية الموصى بها. ",
            "buttons": [    
                {
                    "type": "postback",
                    "title": "نعم",
                    "payload": "6th_Question"
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
