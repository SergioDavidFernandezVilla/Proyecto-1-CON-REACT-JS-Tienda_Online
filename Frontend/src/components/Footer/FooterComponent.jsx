import {
  MdOutlineFacebook,
  MdHome,
  MdShoppingBag,
  MdOutlineMenuBook,
  MdContactEmergency,
  MdSettings,
  MdHistory,
  MdCreditCard,
  MdInfo,
  MdPolicy,
  MdOutlineInfo,
} from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          <header className="footer__nav__header">
            <h4 className="footer__nav__header__h4">Acceso rápido</h4>
          </header>
          <ul className="footer__nav__list">
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdHome />
                <p>Inicio</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/products" className="footer__nav__list__item__link">
                <MdShoppingBag />
                <p>productos</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdOutlineMenuBook />
                <p>blog</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdContactEmergency />
                <p>contacto</p>
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer__nav">
          <header className="footer__nav__header">
            <h4 className="footer__nav__header__h4">Redes sociales</h4>
          </header>
          <ul className="footer__nav__list">
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdOutlineFacebook />
                <p>Facebook</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <PiInstagramLogoFill />
                <p>Instagram</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <FaSquareXTwitter />
                <p>Twitter</p>
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer__nav">
          <header className="footer__nav__header">
            <h4 className="footer__nav__header__h4">Mi cuenta</h4>
          </header>
          <ul className="footer__nav__list">
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdSettings />
                <p>Configuracion</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdHistory />
                <p>Historial de pedidos</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdCreditCard />
                <p>Rembolso de pago</p>
              </a>
            </li>
          </ul>
        </nav>

        <nav className="footer__nav">
          <header className="footer__nav__header">
            <h4 className="footer__nav__header__h4">Sobre nosotros</h4>
          </header>
          <ul className="footer__nav__list">
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdInfo />
                <p>Acerca de</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdPolicy />
                <p>Política de privacidad</p>
              </a>
            </li>
            <li className="footer__nav__list__item">
              <a href="/" className="footer__nav__list__item__link">
                <MdOutlineInfo />
                <p>Condiciones de uso</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <aside className="footer__copyright">
        <p className="footer__copyright__p">
          © 2024 Proyecto React - Todos los derechos reservados Tienda Online.
        </p>
      </aside>
    </footer>
  );
}
