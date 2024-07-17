//Icons
import { MdRemoveCircle, MdAddCircle, MdDeleteForever } from "react-icons/md";

//Dependencies
import { useState, useRef, useContext, useEffect } from "react";

//Context
import { ShoppingCart } from "../../context/useContextShopping";

export const ShopCardComponet = ({ product }) => {
  const [totalCartPrevious, setTotalCartPrevious] = useState(0);
  const [cantidadPrevious, setCantidadPrevious] = useState(0);
  const [cantidad, setCantidad] = useState(1);

  const { newCart, handleRemoveFromCart, totalCart, setTotalCart } =
    useContext(ShoppingCart);

  const inputRefCantidad = useRef(null);

  const handleClickAumento = () => {
    if (inputRefCantidad.current.value < product.stock) {
      inputRefCantidad.current.value = cantidad + 1;

      setCantidad(cantidad + 1);

      console.log("productStock", product.stock);
    }
  };

  const handleClickMenos = (e) => {
    if (inputRefCantidad.current.value > 1) {
      inputRefCantidad.current.value = cantidad - 1;
      setCantidad(cantidad - 1);
    }
  };

  return (
    <section
      className="container__menu__short__cart__content__item"
      key={product.id}
    >
      <figure className="container__menu__short__cart__content__item__figure">
        <img
          src={product.image}
          alt={product.title}
          className="container__menu__short__cart__content__item__figure__img"
        />
      </figure>

      <div className="container__menu__short__cart__content__item__div">
        <header>
          <h4 className="container__menu__short__cart__content__item__div__h4">
            {product.title}
          </h4>

          <p className="container__menu__short__cart__content__item__div__p">
            <strong>Precio: </strong> ${product.price} MXN
          </p>

          <p className="container__menu__short__cart__content__item__div__p">
            <strong>Disponible:</strong>
            {product.stock}
          </p>
        </header>

        <div className="container__menu__short__cart__content__item__buttons__stock">
          {cantidad > 1 ? (
            <button
              className="container__menu__short__cart__content__item__div__button"
              onClick={(e) => handleClickMenos(e, product)}
            >
              <MdRemoveCircle className="container__menu__short__cart__content__item__div__button__icon" />
            </button>
          ) : (
            <button
              className="container__menu__short__cart__content__item__div__button"
              onClick={(e) => handleRemoveFromCart(product, e)}
            >
              <MdDeleteForever className="container__menu__short__cart__content__item__div__button__icon__remove" />
            </button>
          )}

          <input
            type="number"
            name="quantity"
            ref={inputRefCantidad}
            value={cantidad}
            onChange={() => setCantidad(cantidad)}
            maxLength={2}
            className="container__menu__short__cart__content__item__div__input"
          />

          <button
            className="container__menu__short__cart__content__item__div__button"
            onClick={(e) => handleClickAumento(e, product)}
          >
            <MdAddCircle className="container__menu__short__cart__content__item__div__button__icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
