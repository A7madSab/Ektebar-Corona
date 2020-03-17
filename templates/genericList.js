module.exports = (message) => ({
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "generic",
            "elements": [
                {
                    "title": "Yes",
                    "image_url": "https://petersfancybrownhats.com/company_image.png",
                    "subtitle": message,
                    "default_action": {
                        "type": "web_url",
                        "url": "https://petersfancybrownhats.com/view?item=103",
                        "webview_height_ratio": "tall",
                    },
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://petersfancybrownhats.com",
                            "title": "View Website"
                        }, {
                            "type": "postback",
                            "title": "Start Chatting",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD"
                        }
                    ]
                },
                {
                    "title": "Two!",
                    "image_url": "https://petersfancybrownhats.com/company_image.png",
                    "subtitle": message,
                    "default_action": {
                        "type": "web_url",
                        "url": "https://petersfancybrownhats.com/view?item=103",
                        "webview_height_ratio": "tall",
                    },
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://petersfancybrownhats.com",
                            "title": "View Website"
                        }, {
                            "type": "postback",
                            "title": "Start Chatting",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD"
                        }
                    ]
                },
                {
                    "title": "Three!",
                    "image_url": "https://petersfancybrownhats.com/company_image.png",
                    "subtitle": message,
                    "default_action": {
                        "type": "web_url",
                        "url": "https://petersfancybrownhats.com/view?item=103",
                        "webview_height_ratio": "tall",
                    },
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://petersfancybrownhats.com",
                            "title": "View Website"
                        }, {
                            "type": "postback",
                            "title": "Start Chatting",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD"
                        }
                    ]
                },
                {
                    "title": "Four!",
                    "image_url": "https://petersfancybrownhats.com/company_image.png",
                    "subtitle": message,
                    "default_action": {
                        "type": "web_url",
                        "url": "https://petersfancybrownhats.com/view?item=103",
                        "webview_height_ratio": "tall",
                    },
                    "buttons": [
                        {
                            "type": "web_url",
                            "url": "https://petersfancybrownhats.com",
                            "title": "View Website"
                        }, {
                            "type": "postback",
                            "title": "Start Chatting",
                            "payload": "DEVELOPER_DEFINED_PAYLOAD"
                        }
                    ]
                },
            ]
        }
    }
})
