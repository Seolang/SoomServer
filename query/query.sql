/* 유저 테이블 */
CREATE TABLE `TB_USER` IF NOT EXISTS (
  `USR_SEQ` bigint NOT NULL AUTO_INCREMENT,
  `USR_ID` varchar(255) NOT NULL,
  `TYP` char(1) NOT NULL,
  `USR_NM` varchar(50) NOT NULL,
  `BRTH_DT` char(8) NOT NULL,
  `USR_PWD` varchar(100) NOT NULL,
  `USR_TEL` varchar(20) NOT NULL,
  `POST` varchar(5) NOT NULL,
  `ADDR1` varchar(100) NOT NULL,
  `ADDR2` varchar(100) DEFAULT NULL,
  `REG_DE` datetime NOT NULL,
  `UPD_DE` datetime NOT NULL,
  `HPT_NM` varchar(255) DEFAULT NULL,
  `DGNS_NM` varchar(255) DEFAULT NULL,
  `STAT` char(1) NOT NULL,
  `HPT_SEQ` bigint DEFAULT NULL,
  `UUID` varchar(50) DEFAULT NULL,
  `SND_DE` datetime DEFAULT NULL,
  PRIMARY KEY (`USR_SEQ`,`USR_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3

