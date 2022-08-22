var champions = require('../loldata/champion.json')

class masteredSupports {
    static async filterMasteries(masteries){
        var supportChampions = []
        for (const champion in champions.data){
            if (champions.data[champion].tags.includes("Support")){
                supportChampions.push(champions.data[champion])
            }
        }
        console.log(supportChampions)
    }
}

module.exports = masteredSupports;