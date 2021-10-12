// interfaces
import User from "../interfaces/User.ts";
// models
import UserModel from "../models/user.ts";
export const login = async (
  { request, response }: {
    request: any;
    response: any;
  },
) => {
  const value = await request.body().value;
  // console.log(JSON.stringify(value));
  // console.log(JSON.parse(value));
  // const jsonParse = await JSON.parse(value);
  try {
    const idCheck = await UserModel.doesExistById(
      { USR_ID: value.USR_ID },
    );

    if (!idCheck) {
      response.status = 200;
      response.body = {
        success: false,
        message: "해당 아이디 없음",
        response: { USR_SEQ: -2 },
      };
      return;
    }
    const passwordCheck = await UserModel.checkUserIdPwd({
      USR_ID: value.USR_ID,
      USR_PWD: value.USR_PWD,
    });
    if (!passwordCheck) {
      response.status = 200;
      response.body = {
        success: false,
        message: "비밀번호 불일치",
        response: { USR_SEQ: -1 },
      };
      return;
    }

    const user: User = await UserModel.getUserIdPwd({
      USR_ID: value.USR_ID,
      USR_PWD: value.USR_PWD,
    });
    response.status = 200;
    response.body = {
      success: true,
      message: "아이디, 비밀번호 일치",
      response: user,
    };
  } catch (error) {
    response.status = 400;
    response.body = {
      success: false,
      message: `Error login: ${error}`,
    };
  }
};
export default {
  getAllUsers: async ({ response }: { response: any }) => {
    try {
      const data = await UserModel.getAll();
      response.status = 200;
      response.body = {
        success: true,
        data,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error getuser: ${error}`,
      };
    }
  },
  createUser: async (
    { request, response }: { request: any; response: any },
  ) => {
    const body = await request.body();
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        message: "No data provided",
      };
      return;
    }

    try {
      await UserModel.add(
        {
          USR_ID: body.value.USR_ID,
          TYP: body.value.TYP,
          USR_NM: body.value.USR_NM,
          BRTH_DT: body.value.BRTH_DT,
          USR_PWD: body.value.USR_PWD,
          USR_TEL: body.value.USR_TEL,
          POST: body.value.POST,
          ADDR1: body.value.ADDR1,
          ADDR2: body.value.ADDR2,
          REG_DE: body.value.REG_DE,
          UPD_DE: body.value.UPD_DE,
          HPT_NM: body.value.HPT_NM,
          DGNS_NM: body.value.DGNS_NM,
          STAT: body.value.STAT,
          HPT_SEQ: body.value.HPT_SEQ,
          UUID: body.value.UUID,
          SND_DE: body.value.SND_DE,
        },
      );
      response.body = {
        success: true,
        message: "The record was added successfully",
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error create user: ${error}`,
      };
    }
  },
  userLogin: async (
    { params, response }: {
      params: { USR_ID: any; USR_PWD: any };
      response: any;
    },
  ) => {
    try {
      const isAvailable = await UserModel.doesExistById(
        { USR_ID: params.USR_ID },
      );

      if (!isAvailable) {
        response.status = 404;
        response.body = {
          success: false,
          message: "해당 아이디 없음",
          response: { USR_SEQ: -2 },
        };
        return;
      }
      const loginCheck = await UserModel.checkUserIdPwd({
        USR_ID: params.USR_ID,
        USR_PWD: params.USR_PWD,
      });
      if (!loginCheck) {
        response.status = 404;
        response.body = {
          success: false,
          message: "비밀번호 불일치",
          response: { USR_SEQ: -1 },
        };
        return;
      }

      const user: User = await UserModel.getUserIdPwd({
        USR_ID: params.USR_ID,
        USR_PWD: params.USR_PWD,
      });
      response.status = 200;
      response.body = {
        success: true,
        message: "아이디, 비밀번호 일치",
        response: user,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error userlogin: ${error}`,
      };
    }
  },
  getExerRawById: async (
    { params, response }: { params: { USR_ID: any }; response: any },
  ) => {
    try {
      const isAvailable = await UserModel.doesExistById(
        { USR_ID: params.USR_ID },
      );

      if (!isAvailable) {
        response.status = 404;
        response.body = {
          success: false,
          message: "존재하지 않는 유저",
        };
        return;
      }

      const user: User = await UserModel.getExerciseRawById({
        USR_ID: params.USR_ID,
      });
      response.status = 200;
      response.body = {
        success: true,
        data: user,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error getexerraw: ${error}`,
      };
    }
  },
  getExerHisById: async (
    { params, response }: { params: { USR_ID: any }; response: any },
  ) => {
    try {
      const isAvailable = await UserModel.doesExistById(
        { USR_ID: params.USR_ID },
      );

      if (!isAvailable) {
        response.status = 404;
        response.body = {
          success: false,
          message: "존재하지 않는 유저",
        };
        return;
      }

      const user: User = await UserModel.getExerciseHisById({
        USR_ID: params.USR_ID,
      });
      response.status = 200;
      response.body = {
        success: true,
        data: user,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error getexerhis: ${error}`,
      };
    }
  },


  
};
