const champions = require("../loldata/champion.json")

class matchData {
    static async filterSupportMatches(matches, puuid){
        var supportMatches = []
        for (const match in matches){
            if (matches[match]?.info?.queueId === 420){ // QueueId for Ranked Games is 440...

                var participantArr = matches[match].info.participants
                
                for (const participant in participantArr){

                    if (participantArr[participant].puuid == puuid && participantArr[participant].role == "SUPPORT"){
                        supportMatches.push(matches[match])
                        // If Summoner was playing support during the match, push match.
                    }
                }
            }
        }
    return supportMatches
    }

    static async filterSupportData(match, puuid){
        var supportData = {}

        supportData["gameDuration"] = match?.info.gameDuration
        var participantArr = match?.info.participants

        for (const participant in participantArr){
            if (participantArr[participant].puuid == puuid){
                supportData["assists"] = participantArr[participant].assists
                supportData["basicPings"] = participantArr[participant].basicPings
                supportData["championName"] = participantArr[participant].championName
                supportData["champLevel"] = participantArr[participant].champLevel
                supportData["kda"] = participantArr[participant].challenges.kda
                supportData["visionScoreAdvantageLaneOpponent"] = participantArr[participant].challenges.visionScoreAdvantageLaneOpponent
                supportData["visionScorePerMinute"] = participantArr[participant].challenges.visionScorePerMinute
                supportData["wardTakedowns"] = participantArr[participant].challenges.wardTakedowns
                supportData["wardTakedownsBefore20M"] = participantArr[participant].challenges.wardTakedownsBefore20M
                supportData["wardsGuarded"] = participantArr[participant].challenges.wardsGuarded
                supportData["killParticipation"] = participantArr[participant].challenges.killParticipation
                supportData["damageSelfMitigated"] = participantArr[participant].damageSelfMitigated
                supportData["detectorWardsPlaced"] = participantArr[participant].detectorWardsPlaced
                supportData["firstBloodAssist"] = participantArr[participant].firstBloodAssist
                supportData["magicDamageTaken"] = participantArr[participant].magicDamageTaken
                supportData["physicalDamageTaken"] = participantArr[participant].physicalDamageTaken
                supportData["sightWardsBoughtInGame"] = participantArr[participant].sightWardsBoughtInGame
                supportData["totalDamageShieldedOnTeammates"] = participantArr[participant].totalDamageShieldedOnTeammates
                supportData["totalDamageTaken"] = participantArr[participant].totalDamageTaken
                supportData["totalHealsOnTeammates"] = participantArr[participant].totalHealsOnTeammates
                supportData["visionScore"] = participantArr[participant].visionScore
                supportData["visionWardsBoughtInGame"] = participantArr[participant].visionWardsBoughtInGame
                supportData["wardsKilled"] = participantArr[participant].wardsKilled
                supportData["wardsPlaced"] = participantArr[participant].wardsPlaced
                supportData["deaths"] = participantArr[participant].deaths
            }
        }
        return supportData
    }

    static async averageSupportData(supportData){
        var averagedData = {
            "gameDuration": 0,
            "assists": 0,
            "basicPings": 0,
            "championName": "",
            "champLevel": 0,
            "kda": 0,
            "visionScoreAdvantageLaneOpponent": 0,
            "visionScorePerMinute": 0,
            "wardTakedowns": 0,
            "wardTakedownsBefore20M": 0,
            "wardsGuarded": 0,
            "killParticipation": 0,
            "damageSelfMitigated": 0,
            "detectorWardsPlaced": 0,
            "firstBloodAssist": 0,
            "magicDamageTaken": 0,
            "physicalDamageTaken": 0,
            "sightWardsBoughtInGame": 0,
            "totalDamageShieldedOnTeammates": 0,
            "totalDamageTaken": 0,
            "totalHealsOnTeammates": 0,
            "visionScore": 0,
            "visionWardsBoughtInGame": 0,
            "wardsKilled": 0,
            "wardsPlaced": 0,
            "deaths": 0
          }
          for (const match in supportData){
            for (const key in Object.keys(supportData[match])){
              averagedData[(Object.keys(supportData[match])[key])] = averagedData[(Object.keys(supportData[match])[key])] + (Object.values(supportData[match])[key])
            }
          }
          
          for (const data in averagedData){
            if (typeof averagedData[data] !== 'string'){
            averagedData[data] = averagedData[data] / supportData.length
            }
          }
          
          return averagedData
    }
}

module.exports = matchData;
