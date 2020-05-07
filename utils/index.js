const fetch = require('node-fetch');

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const getLastCoronaNumbers = async () => {
    const res = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
        headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "311616bd3emshc6c9be769717d48p1135c0jsnd657a88b42b8"
        }
    })
    const data = await res.json()
    const { covid19Stats } = data.data
    let confirmed = 0, recovered = 0
    covid19Stats.forEach(location => {
        confirmed += location.confirmed
        recovered += location.recovered
        // death += location.death
    })
    return [
        `عدد الحالات المرصودة عالميا: ${numberWithCommas(confirmed)}`,
        `عدد الحالات التي تعافت عالميا: ${numberWithCommas(recovered)}`,
        // `عددٍ الوفيات عالميا: ${numberWithCommas(death)}`
    ]
}

const responseBuilder = (sender_psid, responce) => {
    return ({
        "messaging_type": "RESPONSE",
        "recipient": {
            "id": sender_psid
        },
        "message": responce
    })
}

module.exports = {
    getLastCoronaNumbers,
    responseBuilder
}