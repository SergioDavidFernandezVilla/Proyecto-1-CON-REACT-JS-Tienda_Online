import { MdRailwayAlert } from "react-icons/md";

export default function CardFormsToPayComponent({ FormasPago }) {
  return (
    <section className="article__product__details__content__section__forms">
      <header className="article__product__details__descripcion__header">
        <h2 className="article__product__details__descripcion__h2">
          Formas de pago disponibles:
        </h2>

        <p>
          <strong>hasta 12 meses de pago en cuotas de 12 meses</strong>
        </p>
      </header>

      <div className="article__product__details__formas__container__images">
        {FormasPago.map((forma) => (
          <figure
            className="article__product__details__formas__figure"
            key={forma.id}
          >
            <img
              src={forma.imagen}
              alt={forma.nombre}
              className="article__product__details__formas__figure__img"
            />
          </figure>
        ))}
      </div>

      <footer className="article__product__details__content__section__forms__footer">
        <p className="article__product__details__content__section__forms__footer__p">
          Es necesario que el usuario ingrese su información de pago para poder
          realizar el pago...
        </p>

        <div className="article__product__details__content__section__forms__footer__alert">
          <p className="article__product__details__content__section__forms__footer__alert__p">
            <MdRailwayAlert className="article__product__details__content__section__forms__footer__alert__icon" />

            <strong>
              Todos los productos presentados en esta página son ficticios y se
              utilizan únicamente para fines de demostración. Hasta nuevo aviso,
              no hay existencias disponibles para la compra. Por favor, no
              intente realizar ninguna compra en este momento. Le informaremos
              cuando los productos estén disponibles.
            </strong>
          </p>
        </div>
      </footer>
    </section>
  );
}
