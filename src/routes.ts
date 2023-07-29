import { Router } from "express";
import { ListCarController } from "./controller/ListCarController";
import { CreatCarController } from "./controller/CreatCarController";
import { ListLogCarController } from "./controller/ListLogCarController";

const router = Router();

router.get("/api/listCars", new ListCarController().handle)
router.post("/api/createCar", new CreatCarController().handle)
router.get("/api/logs", new ListLogCarController().handle)

export {router}
