//Icons
import {
  MdShoppingCart,
  MdShoppingBag,
  MdOutlineSubdirectoryArrowLeft,
} from "react-icons/md";

//Icons
import { IoShieldCheckmarkOutline } from "react-icons/io5";

//Context
import { ShoppingCart } from "../../../../context/shoppingContext/useContextShopping";

//Dependencies
import { useContext } from "react";

export default function CardPayComponent({ productFilterSelected }) {
  const { handleAddToCart } = useContext(ShoppingCart);

  const product = {
    id: productFilterSelected.id,
    title: productFilterSelected.nombre,
    price: productFilterSelected.precio,
    image: productFilterSelected.imagen,
    description: productFilterSelected.descripcion,
    slug: productFilterSelected.slug,
    stock: productFilterSelected.stock,
    marca: productFilterSelected.marca,
    categoria: productFilterSelected.categoria,
  };

  return (
    <section className="article__product__details__content__section__pay">
      <header className="article__product__details__descripcion__header">
        <h2>Descripción del producto:</h2>
        <p className="article__product__details__descripcion__p">
          {productFilterSelected.descripcion}.
        </p>

        <h4 className="article__product__details__precio__h4">
          Precio:{" "}
          <strong className="article__product__details__precio__h4__strong">
            ${productFilterSelected.precio} MXN.
          </strong>
        </h4>
      </header>

      <div className="article__product__details__precio__container__div">
        <div className="article__product__details__envio__div__container__select">
          <h4 className="article__product__details__stock__h4">
            Disponible:{" "}
            <strong className="article__product__details__stock__h4__strong">
              {productFilterSelected.stock} unidades
            </strong>
          </h4>
          <select
            name=""
            id=""
            className="article__product__details__envio__select"
          >
            <option
              value=""
              className="article__product__details__envio__select__option"
            >
              1 unidad
            </option>
            <option
              value=""
              className="article__product__details__envio__select__option"
            >
              2 unidades
            </option>
            <option
              value=""
              className="article__product__details__envio__select__option"
            >
              3 unidades
            </option>
          </select>
        </div>

        <div className="article__product__details__envio__div__container__datos__text">
          <p className="article__product__details__envio__div__container__datos__text__p">
            <strong className="article__product__details__envio__div__container__datos__text__p__strong">
              <MdOutlineSubdirectoryArrowLeft className="article__product__details__envio__div__container__datos__text__p__icon" />
              Devolución gratis.
            </strong>{" "}
            Tienes 30 días desde que lo recibes.
          </p>
          <p className="article__product__details__envio__div__container__datos__text__p">
            <strong className="article__product__details__envio__div__container__datos__text__p__strong">
              <IoShieldCheckmarkOutline className="article__product__details__envio__div__container__datos__text__p__icon" />
              Compra Protegida.{" "}
            </strong>
            Si hubo un problema con tu pedido, puedes devolverlo en un día hábil
            o no hábil.
          </p>
        </div>
      </div>

      <div className="article__product__details__envio__container__compra__fin">
        <h4 className="article__product__details__envio__h4">
          <strong>Envio y entrega gratis.</strong>
        </h4>

        <div className="article__product__details__comprar__div">
          <button className="article__product__details__comprar__div__button__1">
            <MdShoppingBag />
            Comprar ahora
          </button>
          <button
            className="article__product__details__comprar__div__button__2"
            onClick={() => handleAddToCart(product)}
          >
            <MdShoppingCart />
            Agregar a carrito
          </button>
        </div>
      </div>
    </section>
  );
}
