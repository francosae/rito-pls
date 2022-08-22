require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3006;
const riotKey = process.env.RIOTKEY
console.log("----------------".brightGreen)
console.log(riotKey)
console.log("PORT:".blue, PORT)

module.exports = {
    PORT,
    riotKey
}