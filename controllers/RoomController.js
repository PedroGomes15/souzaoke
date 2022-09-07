const axios = require("axios");
const Firebase = require("../database/firebase");
const Room = require("../database/room_database");

module.exports = {
  async read(req, res) {
    const room_id = req.query.room_id;
    Room.GetRoom(room_id, (room) => {
      return res.json(room);
    });
  },

  async create(req, res) {
    const room_id = Room.GenerateId();
    Room.GetRoom(room_id, (room) => {
      if (!room) {
        let r = Room.NewRoom(req.body, room_id);
        return res.json(r);
      }
    });
  },

  async update(req, res) {
    const room_id = req.query.room_id;
    Room.GetRoom(room_id, (room) => {
      if (room) {
        let r = Room.UpdateRoom(req.body, room, room_id);
        return res.json(r);
      } else {
        return res.json({ status: "Room Not Finded" });
      }
    });
  },

  async delete(request, response) {
    return response.json();
  },
};
