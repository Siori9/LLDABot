import { Pool } from "pg";

class ExampleRepository {
    constructor(readonly pool: Pool) {}
}