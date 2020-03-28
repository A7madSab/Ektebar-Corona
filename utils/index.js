const fetch = require('node-fetch');

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
    let total = 0
    covid19Stats.forEach(location => total += location.confirmed)
    return "جميع الحالات:" + total
}

module.exports = {
    getLastCoronaNumbers
}