require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3006;
const riotKey = process.env.RIOTKEY

const riotUrl = "https://na1.api.riotgames.com"
const secUrl = "https://americas.api.riotgames.com"
const urlKey = `api_key=${riotKey}`


console.log("----------------".brightGreen)
console.log(riotKey)
console.log("PORT:".blue, PORT)

module.exports = {
    PORT,
    riotKey,
    riotUrl,
    secUrl,
    urlKey
}