const { db, getTimestamp } = require("./firebase");
const { getDatabase, ref, set, get, update, child } = require("firebase/database");

module.exports = {
  NewRoom(params, room_id) {
    const { name, line } = params;

    set(ref(db, "room/" + room_id), {
      name: name,
      line: line,
      createdat: getTimestamp(),
    });

    return { room_id: room_id, status: "succes" };
  },

  GetRoom(room_id, callback) {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `room/${room_id}`))
      .then((data) => {
        if (data.exists()) {
          callback(data.val());
        } else {
          console.log("No data available");
          callback(null);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },

  UpdateRoom(params, room, room_id) {
    const { name = null, line } = params;

    room.name = name ? name : room.name;
    room.line = line;
    room.updatedat = getTimestamp();

    const updates = {};
    updates["/room/" + room_id] = room;
    update(ref(db), updates);

    return { status: "succes", line: line };
  },

  GenerateId() {
    return Math.random().toString(36).substring(2, 8);
  },
};
