//Jsons
import products from "../../../services/Jsons/CarrouselCards/products";
import productsElectronicos from "../../../services/Jsons/CarrouselCards/Eletronicos";
import productsHogar from "../../../services/Jsons/CarrouselCards/Hogar";

const carrousel = [
  {
    id: 1,
    name:"productos populares",
    className: "container__carrousel",
    etiqueta:"1",
    ArrayCarrousel: products,
  },
  {
    id: 2,
    name:"productos de la moda",
    className: "container__carrousel",
    etiqueta:"2",
    ArrayCarrousel: productsElectronicos,
  },
  {
    id: 3,
    name:"productos de la belleza",
    className: "container__carrousel",
    etiqueta:"3",
    ArrayCarrousel: productsHogar,
  },
];

export default carrousel;