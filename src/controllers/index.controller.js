import { pools } from "../database.js";

export const ping = async (req,res) => {
    const [result] = await pools.query('SELECT "Pong" AS result');
    res.json(result[0])
}