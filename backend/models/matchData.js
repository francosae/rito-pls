const champions = require("../loldata/champion.json")

class matchData {
    static async fetchSupportMatches(matches, puuid){
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
}

module.exports = matchData;
