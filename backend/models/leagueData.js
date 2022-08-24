var _ = require('lodash');
const { fetchSummonerByID } = require('../loldata/riotcalls')

class leagueData {
    static async compareLeague(league){
    }

    static async randomSelect(league){
        var randomizedSummoners = _.sampleSize(league.entries, 5)
        return randomizedSummoners
    }

    static async fetchLeagueSummoner(encryptedID){
        const summonerObj = await fetchSummonerByID(encryptedID)
        return summonerObj
    }
}

module.exports = leagueData;