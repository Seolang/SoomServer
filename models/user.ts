import client from "../db/client.ts";
// config
import { TABLE } from "../db/config.ts";
// Interface
import User from "../interfaces/User.ts";
import Rst from "../interfaces/Result.ts";

export default {

  // 아이디 체크
  doesExistById: async ({ USR_ID }: any) => {
    const [result] = await client.query(
      `SELECT COUNT(*) count FROM ${TABLE.TB_USER} WHERE USR_ID = ? LIMIT 1`,
      [USR_ID],
    );
    return result.count > 0;
  },
  getAll: async () => {
    return await client.query(`SELECT * FROM ${TABLE.TB_USER}`);
  },
  // 비밀번호 체크
  checkUserIdPwd: async ({ USR_ID, USR_PWD }: any) => {
    const [result] = await client.query(
      // `SELECT USR_ID, USR_PWD FROM ${TABLE.TB_USER} WHERE USR_ID = ?`,
      `SELECT COUNT(*) count FROM ${TABLE.TB_USER} WHERE USR_ID = ? && USR_PWD = ?`,
      [USR_ID, USR_PWD],
    );
    return result.count > 0;
  },
  // USR_SEQ 가져오기
  getUserIdPwd: async ({ USR_ID, USR_PWD }: any) => {
    const [result] = await client.query(
      // `SELECT USR_ID, USR_PWD FROM ${TABLE.TB_USER} WHERE USR_ID = ?`,
      `SELECT USR_SEQ FROM ${TABLE.TB_USER} WHERE USR_ID = ? && USR_PWD = ?`,
      [USR_ID, USR_PWD],
    );
    return result;
  },

  // breathe.TB_EXERCISE_RAW
  getExerciseRawById: async ({ USR_ID }: any) => {
    return await client.query(
      `SELECT * FROM ${TABLE.TB_EXERCISE_RAW} WHERE USR_ID = ?`,
      [USR_ID],
    );
  },
  // breathe.TB_EXERCISE_HIS
  getExerciseHisById: async ({ USR_ID }: any) => {
    return await client.query(
      `SELECT * FROM ${TABLE.TB_EXERCISE_HIS} WHERE USR_ID = ?`,
      [USR_ID],
    );
  },
  // 로그인 정보 Insert
  add: async (
    {
      USR_ID,
      TYP,
      USR_NM,
      BRTH_DT,
      USR_PWD,
      USR_TEL,
      POST,
      ADDR1,
      ADDR2,
      REG_DE,
      UPD_DE,
      HPT_NM,
      DGNS_NM,
      STAT,
      HPT_SEQ,
      UUID,
      SND_DE,
    }: any,
  ) => {
    return await client.query(
      `INSERT INTO ${TABLE.TB_USER}
      (USR_ID, TYP, USR_NM, BRTH_DT, USR_PWD, USR_TEL, 
        POST, ADDR1, ADDR2, REG_DE, UPD_DE, HPT_NM, DGNS_NM, STAT, 
        HPT_SEQ, UUID, SND_DE) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        USR_ID,
        TYP,
        USR_NM,
        BRTH_DT,
        USR_PWD,
        USR_TEL,
        POST,
        ADDR1,
        ADDR2,
        REG_DE,
        UPD_DE,
        HPT_NM,
        DGNS_NM,
        STAT,
        HPT_SEQ,
        UUID,
        SND_DE,
      ],
    );
  },

};
