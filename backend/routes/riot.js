const express = require("express")
const router = express.Router()
const axios = require('axios')
const { riotKey } = require('../config')
const matchData = require("../models/matchData")
const masteredSupports = require("../models/masteredSupports")
const riotUrl = "https://na1.api.riotgames.com"
const secUrl = "https://americas.api.riotgames.com"
const urlKey = `api_key=${riotKey}`

function fetchSummoner(summonerName){
    return axios.get(`${riotUrl}/lol/summoner/v4/summoners/by-name/${summonerName}?${urlKey}`)
    .then(response => {
        return response.data
    }).catch(err => err);
}

function fetchMatches(PUUID){
    return axios.get(`${secUrl}/lol/match/v5/matches/by-puuid/${PUUID}/ids?count=3&${urlKey}`)
    .then(response => {
        return response.data
    }).catch(err => err);
}

function fetchMatchData(matchID){
    return axios.get(`${secUrl}/lol/match/v5/matches/${matchID}?${urlKey}`)
    .then(response => {
        return response.data
    }).catch(err => err)
}

function fetchChampionMastery(encryptedID){
    return axios.get(`${riotUrl}/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedID}?${urlKey}`)
    .then(response =>{
        return response.data
    }).catch(err => err)
}

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
    const supportMatches = await matchData.fetchSupportMatches(matchDataArr, summonerObj.puuid)
    const championMastery = await fetchChampionMastery(summonerObj.id)
    const supportMastery = await masteredSupports.filterMasteries(championMastery)
    // console.log(supportMastery)
    res.status(201).json(supportMatches)
})


module.exports = router;