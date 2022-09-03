const axios = require("axios");
const Firebase = require("../database/firebase");
const Room = require("../database/room_database");

module.exports = {
  async read(request, response) {
    return response.json(r);
  },

  async create(req, res, t) {
    console.log("request ", req);
    let r = Room.NewRoom(req.body);
    return res.json(r);
  },

  async update(request, response) {
    return response.json();
  },

  async delete(request, response) {
    return response.json();
  },
};
