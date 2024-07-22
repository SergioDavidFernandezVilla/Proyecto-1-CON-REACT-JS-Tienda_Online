import { connectionDB } from "../../db/connectionDB.js";

export const UserModel = {

  UserRegister: async (email, password, name) => {
    const query = `INSERT INTO "user" (email, password, name) VALUES ($1, $2, $3)`;
    const result = await connectionDB.query(query, [email, password, name]);

    return result.rows[0];
  },

}