const express = require("express")
const router = express.Router()
const axios = require('axios')
const { fetchSupportMatches } = require("../models/matchData")
const { filterMasteries } = require("../models/masteredSupports")
const { randomSelect, fetchLeagueSummoner } = require("../models/leagueData")
const { fetchSummoner, fetchMatches, fetchMatchData, 
    fetchChampionMastery, fetchLeagueData, fetchEntireLeague } = require('../loldata/riotcalls')


router.post('/fetchSummoner', async (req, res) => {
    const summonerObj = await fetchSummoner(req.body.summonerName)
    
    // Storing the Summoner Obj in res.locals for future API Calls
    res.locals.summoner = summonerObj

    const matchIDs = await fetchMatches(res.locals.summoner.puuid)
 
    /* 
    Initailizing an array for individual match information
    then looping over the list of matchIDs to make an Riot API call for each indiviudal match
    then storing it in the match data array. */ 

    var matchDataArr = [];
    for (match in matchIDs){
        const matchData = await fetchMatchData(matchIDs[match])
        matchDataArr.push(matchData)
    }

    const championMastery = await fetchChampionMastery(summonerObj.id) 
    const supportMastery = await filterMasteries(championMastery)
    const supportMatches = await fetchSupportMatches(matchDataArr, summonerObj.puuid)

    const summonerLeague = await fetchLeagueData(summonerObj.id)
    const entireLeague = await fetchEntireLeague(summonerLeague[0].leagueId)
    const randomSelected = await randomSelect(entireLeague)


    var randomSummonerIDs = []

    for (const summoner in randomSelected){
        var encryptedID = randomSelected[summoner].summonerId
        randomSummonerIDs.push(encryptedID)
    }

    var randomSummonerPUUIDs = []
    for (const ID in randomSummonerIDs){
        const summonerObj = await fetchLeagueSummoner(randomSummonerIDs[ID])
        randomSummonerPUUIDs.push(summonerObj.puuid)
    }

    var randomMatchesIDs = {}
    for (const ID in randomSummonerPUUIDs){
        const matchIDs = await fetchMatches(randomSummonerPUUIDs[ID])
        randomMatchesIDs[randomSummonerPUUIDs[ID]] = matchIDs
    }
    console.log(randomMatchesIDs)

    const data = { supportMatches: supportMatches, supportMastery: supportMastery, summonerLeague: summonerLeague, entireLeague: entireLeague, random: randomSelected}
    res.status(201).json(data)
})


module.exports = router;