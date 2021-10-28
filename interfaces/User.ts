export default interface User {
  USR_ID: string,
  TYP: string,
  USR_NM: string,
  BRTH_DT: string,
  USR_PWD: string,
  USR_TEL: string, 
  POST: string,
  ADDR1: string,
  ADDR2?: string, // default null
  REG_DE: string, // datetime
  UPD_DE: string, // datetime
  HPT_NM?: string, // default null
  DGNS_NM?: string, // default null
  STAT?: string,
  HPT_SEQ?: bigint, // default null
  UUID?: string, // default null
  SND_DE?: string, // datetime
}
