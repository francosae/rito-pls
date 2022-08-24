const axios = require('axios')
const { riotUrl, secUrl, urlKey } = require('../config')

class riotCalls {

    static async fetchSummoner(summonerName){
        return axios.get(`${riotUrl}/lol/summoner/v4/summoners/by-name/${summonerName}?${urlKey}`)
        .then(response => {
            return response.data
        }).catch(err => err);
    }

    static async fetchSummonerByID(encryptedID){
        return axios.get(`${riotUrl}/lol/summoner/v4/summoners/${encryptedID}?${urlKey}`)
        .then(response =>{
            return response.data
        }).catch(err => err);
    }
    

    static async fetchMatches(PUUID, count){
        return axios.get(`${secUrl}/lol/match/v5/matches/by-puuid/${PUUID}/ids?queue=420&count=10&${urlKey}`)
        .then(response => {
            return response.data
        }).catch(err => err);
    }
    
    static async fetchMatchData(matchID){
        return axios.get(`${secUrl}/lol/match/v5/matches/${matchID}?${urlKey}`)
        .then(response => {
            return response.data
        }).catch(err => err)
    }
    
    static async fetchChampionMastery(encryptedID){
        return axios.get(`${riotUrl}/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedID}?${urlKey}`)
        .then(response =>{
            return response.data
        }).catch(err => err)
    }
    
    static async fetchLeagueData(encryptedID){
        return axios.get(`${riotUrl}/lol/league/v4/entries/by-summoner/${encryptedID}?${urlKey}`)
        .then(response =>{
            return response.data
        }).catch(err => err)
    }
    
    static async fetchEntireLeague(leagueID){
        return axios.get(`${riotUrl}/lol/league/v4/leagues/${leagueID}?${urlKey}`)
        .then(response => {
            return response.data
        }).catch(err => err)
    }
}

module.exports = riotCalls;