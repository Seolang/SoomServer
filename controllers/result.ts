// interfaces
import Rst from "../interfaces/Result.ts";
// models
import RstModel from "../models/result.ts";

export default {
//운동 결과 정보 불러오기
  getAllResult: async ({ response }: { response: any }) => {
      try {
          const data = await RstModel.getAllResult();
          response.status = 200;
          response.body = {
              success: true,
              data,
          };
          console.log(data)
      } catch (error) {
          response.status = 400;
          response.body = {
              success: false,
              message: `Error getresult: ${error}`,
          };
      }
  },

  //새로운 운동결과 전송
  createResult: async (
    { request, response }: { request: any; response: any },
  ) => {
    const body = await request.body();
    const value = await body.value;
    console.log(value);
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        message: "No data provided",
      };
      return;
    }

    try {
      await RstModel.addResult( value );
      response.body = {
        success: true,
        message: "The record was added successfully",
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        message: `Error sendresult: ${error}`
      };
    }
    console.log(response.body)
  },

}