const pgp = require("pg-promise")({});
const db = pgp("postgress://localhost:5432/flash_db");
module.exports = db 