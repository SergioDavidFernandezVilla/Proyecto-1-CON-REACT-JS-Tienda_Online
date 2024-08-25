import { ProductsListModel } from "../../models/productsList/ProductsListModel.js";


export const ProductsListController = {
    GetProductsList: async (req, res) => {
        try {
              //agarra todo los datos del producto
                const result = await ProductsListModel.getProductsList(req, res);
                res.status(200).json({message: "Se ha obtenido correctamente", data: result});
                
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los productos', error: error.message });
        }
    }
};