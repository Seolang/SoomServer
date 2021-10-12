import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
// controller
import userController, { login } from "../controllers/user.ts";
import resultController from "../controllers/result.ts";

router
  .get("/users", userController.getAllUsers)
  .post("/login", login)
  .get("/result", resultController.getAllResult)
  .post("/result", resultController.createResult)

export default router;
