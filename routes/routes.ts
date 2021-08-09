import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
// controller
import userController from "../controllers/user.ts";
import exerciseController from "../controllers/exerciseData.ts";
router
  .get("/users", userController.getAllUsers)
  // .post("/users", userController.createUser)
  .get("/user_exer_raw/:USR_ID", exerciseController.getExerRawById)
  .get("/user_exer_his/:USR_ID", exerciseController.getExerHisById);
  // .put("/users/:id", userController.updateUserById)
  // .delete("/users/:id", userController.deleteUserById);

export default router;
