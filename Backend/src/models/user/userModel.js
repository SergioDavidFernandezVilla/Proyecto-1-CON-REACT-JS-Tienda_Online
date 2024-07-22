import { connectionDB } from "../../db/connectionDB.js";
import { hashPassword, comparePassword } from "../../utils/passwordHash/passwordHash.js";

export const UserModel = {

  UserGet : async (id) => {
    const query = `SELECT * FROM "user" WHERE id = $1`;
    const result = await connectionDB.query(query, [id]);

    return result.rows[0];
  },

  UserRegister: async (email, hashedPassword, name) => {
    const query = `INSERT INTO "user" (email, password, name) VALUES ($1, $2, $3)`;
    const result = await connectionDB.query(query, [email, hashedPassword, name]);
    return result.rows[0];
  },

  UserLogin: async (email) => {
    const query = `SELECT * FROM "user" WHERE email = $1`;
    const result = await connectionDB.query(query, [email]);
    return result.rows[0];
  },

}