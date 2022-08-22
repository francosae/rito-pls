const champions = require("../loldata/champion.json")

class matchData {
    static async fetchSupportMatches(matches, puuid){
        for (const match in matches){
            if (matches[match].info.queueId === 440){
                console.log("ranked")
                
                var participantArr = matches[match].info.participants
                
                for (const participant in participantArr){
                    if (participantArr[participant].puuid == puuid && participantArr[participant].role == "SUPPORT"){
                        return matches
                    }
                }
            }
        }
    }
}

module.exports = matchData;

