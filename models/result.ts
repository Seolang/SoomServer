import client from "../db/client.ts";
// config
import { TABLE } from "../db/config.ts";
// Interface
import rst from "../interfaces/Result.ts";

export default {
  //운동결과 확인
  getAllResult: async () => {
    return await client.query(`SELECT * FROM ${TABLE.LOG}`);
  },

  //새로운 운동결과 전송
  addRawResult: async (
    data: rst,
  ) => {
    return await client.query(
      `INSERT INTO ${TABLE.TB_EXERCISE_RAW} (DATA, REG_DE, USR_SEQ, USR_ID, UUID) values(?, ?, ?, ?, ?)`,
      [
        data.DATA,
        data.DATE,
        data.USR_SEQ,
        data.ID,
        data.UUID
      ],
    );
  },

  addHisResult: async (
    data: rst,
    spin: number,
    RAW_SEQ: string,
    date: string
  ) => {
    return await client.query(
      `INSERT INTO ${TABLE.TB_EXERCISE_HIS} (TYP, SPIN, REG_DE, USR_SEQ, USR_ID, RAW_SEQ, PRE_SEQ) values(?, ?, ?, ?, ?, ?, ?)`,
      [
        data.TYPE,
        spin,
        date,
        data.USR_SEQ,
        data.ID,
        RAW_SEQ,
        0
      ],
    );
  },

}