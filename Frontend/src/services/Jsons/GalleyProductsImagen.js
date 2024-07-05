// Importa las imágenes
import imagen1 from "../../assets/images/products/imagen9.jpg";
import imagen2 from "../../assets/images/products/imagen8.jpg";
import imagen3 from "../../assets/images/products/imagen3.jpg";

// Define el array de datos de las imágenes
const galleyProductsImagen = [
  {
    id: 26,
    slug: "producto-galeria-1",
    nombre: "Producto 1",
    descripcion: "Mesa de productos de la galería de productos populares",
    categoria: "Hogar",
    marca: "Marca A",
    imagen: imagen1,
    precio: 100,
    estilo: "grande",
    rating: 4.5,
    stock: 10,
  },
  {
    id: 27,
    slug: "producto-galeria-2",
    nombre: "Producto 2",
    descripcion: "Decoración china de la galería",
    categoria: "Electrónica",
    marca: "Marca B",
    imagen: imagen2,
    estilo: "medio",
    precio: 400,
    rating: 4.0,
    stock: 3,
  },
  {
    id: 28,
    slug: "producto-galeria-3",
    nombre: "Producto 3",
    descripcion: "Explora tus lugares favoritos con mayor confort y familiaridad",
    categoria: "Juguetes",
    marca: "Marca C",
    imagen: imagen3,
    estilo: "pequeño",
    precio: 700,
    rating: 3.0,
    stock: 5,
  },
];

export default galleyProductsImagen;
