var champions = require('../loldata/champion.json')
const { supportChampIDs } = require("../loldata/supportchampions");

class masteredSupports {
    static async filterMasteries(masteries){
    var masteredChamps = []
        for (const mastery in masteries){
            if (supportChampIDs.includes(masteries[mastery]["championId"])){  
                masteredChamps.push(masteries[mastery])
                // Checking if the Champion Masteries are support champions, if they are, push and return
            }
        }
    return masteredChamps
    }
}

module.exports = masteredSupports;