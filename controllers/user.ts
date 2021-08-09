// interfaces
import User from "../interfaces/User.ts";
// models
import UserModel from "../models/user.ts";
import ExerciseModel from "../models/exerciseData.ts";

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
        message: `Error: ${error}`,
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
        message: `Error: ${error}`,
      };
    }
  },
  // updateUserById: async (
  //   { params, request, response }: {
  //     params: { id: string };
  //     request: any;
  //     response: any;
  //   },
  // ) => {
  //   try {
  //     const isAvailable = await UserModel.doesExistById(
  //       { id: Number(params.id) },
  //     );
  //     if (!isAvailable) {
  //       response.status = 404;
  //       response.body = {
  //         success: false,
  //         message: "No user found",
  //       };
  //       return;
  //     }

  //     const body = await request.body();
  //     const updatedRows = await UserModel.updateById({
  //       id: Number(params.id),
  //       ...body.value,
  //     });
  //     response.status = 200;
  //     response.body = {
  //       success: true,
  //       message: `Successfully updated ${updatedRows} row(s)`,
  //     };
  //   } catch (error) {
  //     response.status = 400;
  //     response.body = {
  //       success: false,
  //       message: `Error: ${error}`,
  //     };
  //   }
  // },
  // deleteUserById: async (
  //   { params, response }: { params: { id: string }; response: any },
  // ) => {
  //   try {
  //     const updatedRows = await UserModel.deleteById({
  //       id: Number(params.id),
  //     });
  //     response.status = 200;
  //     response.body = {
  //       success: true,
  //       message: `Successfully updated ${updatedRows} row(s)`,
  //     };
  //   } catch (error) {
  //     response.status = 400;
  //     response.body = {
  //       success: false,
  //       message: `Error: ${error}`,
  //     };
  //   }
  // },
};
