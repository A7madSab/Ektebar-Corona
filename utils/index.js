const getLastCoronaNumbers = async () => {
    const data = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats")
    const res = await JSON.parse(data)

    const finalRes = res.data.data.covid19Stats
    let total = 0
    finalRes.forEach(location => total += location.confirmed)

    return `جميع الحالات: ${total}`
}

module.exports = {
    getLastCoronaNumbers
}