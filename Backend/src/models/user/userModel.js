import { connectionDB } from "../../db/connectionDB.js";
import { hashPassword,hashPasswordConfirm , comparePassword } from "../../utils/passwordHash/passwordHash.js";

export const UserModel = {

  UserGet : async (id) => {
    const query = `SELECT * FROM "user" WHERE id = $1`;
    const result = await connectionDB.query(query, [id]);

    return result.rows[0];
  },

  UserRegister: async (email, hashedPassword,hashedconfirmPassword, name) => {
    const query = `INSERT INTO "user" (email, password,confirmpassword, name) VALUES ($1, $2, $3, $4)`;
    const result = await connectionDB.query(query, [email, hashedPassword, hashedconfirmPassword, name]);
    return result.rows[0];
  },

  UserLogin: async (email) => {
    const query = `SELECT * FROM "user" WHERE email = $1`;
    const result = await connectionDB.query(query, [email]);
    return result.rows[0];
  },

}