import {
  MdAlarm,
  MdDesktopWindows,
  MdDiscount,
  MdEventSeat,
  MdGite,
} from "react-icons/md";

export default function OptionsFilterMenu() {
  return (
    <div className="container__filter__menu_search_div">
      <div className="item__filter__menu__search">
        <p className="item__filter__menu__search__p">
          <MdDesktopWindows className="item__filter__menu__search__p__icon" />
          Eletronico
        </p>
      </div>
      <div className="item__filter__menu__search">
        <p className="item__filter__menu__search__p">
          <MdEventSeat className="item__filter__menu__search__p__icon" />
          Muebles
        </p>
      </div>

      <div className="item__filter__menu__search">
        <p className="item__filter__menu__search__p">
          <MdDiscount className="item__filter__menu__search__p__icon" />
          Articulos
        </p>
      </div>

      <div className="item__filter__menu__search">
        <p className="item__filter__menu__search__p">
          <MdAlarm className="item__filter__menu__search__p__icon" />
          Ofertas tiempo limitado
        </p>
      </div>

      <div className="item__filter__menu__search">
        <p className="item__filter__menu__search__p">
          <MdGite className="item__filter__menu__search__p__icon" />
          Cosas del hogar
        </p>
      </div>
    </div>
  );
}
