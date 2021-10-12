import client from "../db/client.ts";
// config
import { TABLE } from "../db/config.ts";
// Interface
import Rst from "../interfaces/Result.ts";

export default {
  //운동결과 확인
  getAllResult: async () => {
    return await client.query(`SELECT * FROM ${TABLE.LOG}`);
  },

  //새로운 운동결과 전송
  addResult: async (
    data: Rst,
  ) => {
    return await client.query(
      `INSERT INTO ${TABLE.LOG} (USR_SEQ, GAME_TYPE, GAME_LEVEL, SCORE, EXERCISE_AMOUNT) values(?, ?, ?, ?, ?)`,
      [
        data.USR_SEQ,
        data.GAME_TYPE,
        data.GAME_LEVEL,
        data.SCORE,
        data.EXERCISE_AMOUNT
      ],
    );
  },

}