import { ClientBase, Pool, PoolConfig, Query, QueryArrayConfig, QueryArrayResult, QueryConfig, QueryResult, QueryResultRow, Submittable } from "pg";

export interface DatabaseConfig {
    poolConfig: PoolConfig
}

export default class Database {
    pool: Pool
    static droitTable: string = `CREATE TABLE IF NOT EXISTS DroitTable(
        id INT PRIMARY KEY,
        idUtilisateur INT,
        tagUtilisateur VARCHAR(50),
        role VARCHAR(20)
    );`

    constructor(config: DatabaseConfig) {
        this.pool = new Pool(config.poolConfig)
    }

    async createTablesIfNotExists() {
        const client = await this.pool.connect()
        try {
            await client.query('BEGIN')
            await client.query(Database.droitTable)
            await client.query('COMMIT')
        } catch (e) {
            await client.query('ROLLBACK')
        }
    }

    async query<R extends QueryResultRow = any, I extends any[] = any[]>(
        queryTextOrConfig: string | QueryConfig<I>,
        values?: I,
    ): Promise<QueryResult<R>> {
        return this.pool.connect()
            .then(client => client.query(queryTextOrConfig, values).finally(() => client.release()))
    }
}