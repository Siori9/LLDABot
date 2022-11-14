import { Pool } from "pg";

export default new Pool({
    host: process.env.POSTGRESQL_ADDON_HOST,
    user: process.env.POSTGRESQL_ADDON_USER,
    password: process.env.POSTGRESQL_ADDON_PASSWORD,
    database: process.env.POSTGRESQL_ADDON_DATABASE,
    max: 5,
})