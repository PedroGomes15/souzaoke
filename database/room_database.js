const { db } = require("./firebase");
const { ref, set } = require("firebase/database");

let room_id = false;

module.exports = {
  NewRoom(params) {
    const { name, line } = params;

    var ref = db.ref("room").push();
    room_id = ref.key;
    ref.set({
      name: name,
      line: line,
      createdat: db.database.ServerValue.TIMESTAMP,
    });

    return { room_id: room_id, status: "succes" };
  },
};
