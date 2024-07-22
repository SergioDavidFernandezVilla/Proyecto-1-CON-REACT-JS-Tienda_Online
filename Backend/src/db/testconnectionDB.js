import { connectionDB } from "./connectionDB.js";

async function testConnection() {
    try {
      const res = await connectionDB.query('SELECT NOW()');
      console.log('Conexión exitosa:', res.rows[0]);
    } catch (err) {
      console.error('Error en la conexión:', err);
    } finally {
      await connectionDB.end();
    }
  }
  
  testConnection();