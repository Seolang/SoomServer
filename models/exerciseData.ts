import client from "../db/client.ts";
// config
import { TABLE } from "../db/config.ts";
// Interface
import User from "../interfaces/User.ts";

export default {
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



  
//   add: async (
//     {
//       USR_ID,
//       TYP,
//       USR_NM,
//       BRTH_DT,
//       USR_PWD,
//       USR_TEL,
//       POST,
//       ADDR1,
//       ADDR2,
//       REG_DE,
//       UPD_DE,
//       HPT_NM,
//       DGNS_NM,
//       STAT,
//       HPT_SEQ,
//       UUID,
//       SND_DE,
//     }: any,
//   ) => {
//     return await client.query(
//       `INSERT INTO ${TABLE.TB_USER}
//       (USR_ID, TYP, USR_NM, BRTH_DT, USR_PWD, USR_TEL, 
//         POST, ADDR1, ADDR2, REG_DE, UPD_DE, HPT_NM, DGNS_NM, STAT, 
//         HPT_SEQ, UUID, SND_DE) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         USR_ID,
//         TYP,
//         USR_NM,
//         BRTH_DT,
//         USR_PWD,
//         USR_TEL,
//         POST,
//         ADDR1,
//         ADDR2,
//         REG_DE,
//         UPD_DE,
//         HPT_NM,
//         DGNS_NM,
//         STAT,
//         HPT_SEQ,
//         UUID,
//         SND_DE,
//       ],
//     );
//   },
  // updateById: async ({ USR_ID, user, isCompleted }: User) => {
  //   const result = await client.query(
  //     `UPDATE ${TABLE.USER} SET user=?, isCompleted=? WHERE USR_ID=?`,
  //     [
  //       user,
  //       isCompleted,
  //       USR_ID,
  //     ],
  //   );
  //   return result.affectedRows;
  // },
  // deleteById: async ({ USR_ID }: User) => {
  //   const result = await client.query(
  //     `DELETE FROM ${TABLE.USER} WHERE USR_ID = ?`,
  //     [USR_ID],
  //   );
  //   return result.affectedRows;
  // },
};
