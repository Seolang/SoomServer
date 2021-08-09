// interfaces
// import User from "../interfaces/User.ts";

// models
import UserModel from "../models/user.ts";
import ExerciseModel from "../models/exerciseData.ts";

export default {

  getExerRawById: async (
    { params, response }: { params: { USR_ID: any }; response: any },
    ) => {
    try {
        // 유저 존재 유무 체크
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

      const user: any = await ExerciseModel.getExerciseRawById({ USR_ID: params.USR_ID });
      response.status = 200;
      response.body = {
        success: true,
        data: user,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error: ${error}`,
      };
    }
  },
  getExerHisById: async (
    { params, response }: { params: { USR_ID: any }; response: any },
    ) => {
    try {
        // 유저 존재 유무 체크
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

      const user: any = await ExerciseModel.getExerciseHisById({ USR_ID: params.USR_ID });
      response.status = 200;
      response.body = {
        success: true,
        data: user,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error: ${error}`,
      };
    }
  },
}