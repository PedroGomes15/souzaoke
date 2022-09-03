const { Router } = require("express");
const RoomController = require("../controllers/RoomController");

const routes = Router();

routes.get("/room", RoomController.read);
routes.post("/room", RoomController.create);
routes.put("/room", RoomController.update);
routes.delete("/room", RoomController.delete);

module.exports = routes;
