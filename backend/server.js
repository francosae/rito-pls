const app = require("./app")
const { PORT } = require("./config");
require("colors");
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`.brightBlue)
})