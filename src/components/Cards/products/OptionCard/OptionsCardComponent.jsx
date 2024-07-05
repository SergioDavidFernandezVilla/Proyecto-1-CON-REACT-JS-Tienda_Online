import React, { useState } from "react";
import {
  MdMoreVert,
  MdOutlineShare,
  MdBlockFlipped,
  MdBookmarkAdd,
  MdCreate,
  MdShare,
} from "react-icons/md";

export default function OptionsCard() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuOpcionesCard = () => {
    return (
      <div className="menu__opciones_card">
        <p className="menu__opciones_card__title">
          <MdBookmarkAdd className="menu__opciones_card__title__icon" />
          Guardar en favoritos
        </p>
        <p className="menu__opciones_card__title">
          <MdShare className="menu__opciones_card__title__icon" />
          Compartir
        </p>
        <p className="menu__opciones_card__title">
          <MdCreate className="menu__opciones_card__title__icon" />
          Editar
        </p>
        <p className="menu__opciones_card__title">
          <MdBlockFlipped className="menu__opciones_card__title__icon" />
          No me interesa
        </p>
      </div>
    );
  };

  const handleClick = (event) => {
    event.preventDefault(); // Evitar que el Link actúe como redirección
    setIsOpen(!isOpen); // Invertir el estado de isOpen
  };

  return (
    <div className="card__product_article__figure__div_opciones">
      <button
        className="card__product_article__figure__div_opciones__button"
        onClick={handleClick}
      >
        <MdMoreVert className="card__product_article__figure__div_opciones__menu_opciones" />
      </button>
      {isOpen && <MenuOpcionesCard />}{" "}
      {/* Renderizado condicional del menú de opciones */}
      <button className="card__product_article__figure__div__button_compartir">
        <MdOutlineShare className="card__product_article__figure__div__button_compartir" />
      </button>
    </div>
  );
}
