//Dependencies
import { useState, useRef, useContext } from "react";

//Context
import { ShoppingCart } from "../../context/useContextShopping";

//Icons
import { MdRemoveCircle, MdAddCircle, MdDeleteForever } from "react-icons/md";

export const ShopCardComponent = ({ product }) => {
  const { newCart, handleRemoveFromCart, updateQuantity } =
    useContext(ShoppingCart);

  const [cantidad, setCantidad] = useState(1);

  const inputRefCantidad = useRef(null);

  const handleClickAumento = () => {
    if (inputRefCantidad.current.value < product.stock) {
      const newCantidad = cantidad + 1;
      inputRefCantidad.current.value = newCantidad;
      setCantidad(newCantidad);
      updateQuantity(product.id, newCantidad);
    }
  };

  const handleClickMenos = (e) => {
    if (inputRefCantidad.current.value > 1) {
      const newCantidad = cantidad - 1;
      inputRefCantidad.current.value = newCantidad;
      setCantidad(newCantidad);
      updateQuantity(product.id, newCantidad);
    } else {
      handleRemoveFromCart(product, e);
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
            <strong>Disponible:</strong> {product.stock}
          </p>
        </header>

        <div className="container__menu__short__cart__content__item__buttons__stock">
          <button
            className="container__menu__short__cart__content__item__div__button"
            onClick={(e) => handleClickMenos(e)}
          >
            {cantidad > 1 ? (
              <MdRemoveCircle className="container__menu__short__cart__content__item__div__button__icon" />
            ) : (
              <MdDeleteForever className="container__menu__short__cart__content__item__div__button__icon__remove" />
            )}
          </button>

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
            onClick={() => handleClickAumento()}
          >
            <MdAddCircle className="container__menu__short__cart__content__item__div__button__icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
