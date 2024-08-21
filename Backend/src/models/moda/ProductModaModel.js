import { connectionDB } from "../../db/connectionDB.js";

export const ProductModaModel = {
    createProductModa : async (name, description) => {
        const query = `
            INSERT INTO "marcas" (name, description) 
            VALUES ($1, $2);
        `;
        await connectionDB.query(query, [name, description]);
    }
    
}