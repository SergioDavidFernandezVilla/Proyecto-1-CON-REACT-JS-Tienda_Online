// UrlPage.js

// URLs base
export const URL_PRODUCTS = "/productos";
export const URL_PRODUCTS_CATEGORY = "/categoria/:categoria";
export const URL_PRODUCTS_FILTER = "/filter/:filter";
export const URL_PRODUCTS_PAGE = "/page/:page";

// URL de la página de productos con filtro, categoría y paginación
export const URL_PRODUCTS_RESULT = `${URL_PRODUCTS}${URL_PRODUCTS_CATEGORY}${URL_PRODUCTS_FILTER}${URL_PRODUCTS_PAGE}`;

// URL de detalle de producto
export const URL_PRODUCT_DETAIL = `${URL_PRODUCTS}/marca/:marca/categoria/:categoria/producto/:slug`;
