//Components
import StarRatingComponent from "../StarRating/StartRatingComponent";

//Components
import OptionsCard from "../products/OptionCard/OptionsCardComponent";

//Dependencies
import { Link } from "react-router-dom";

export default function GalleryComponent({
  imagen,
  title,
  descripcion,
  estilo,
  rating,
  estrellas,
  slug,
  categoria,
  marca,
}) {
  return (
    <section className={`gallery__container_section_${estilo}`}>
      <Link
        to={`/productos/marca/${marca}/categoria/${categoria}/producto/${slug}`}
      >
        <figure className={`gallery__container_section__figure_${estilo}`}>
          <img
            src={imagen}
            alt={title}
            className="gallery__container_section__figure__img"
          />
        </figure>
      </Link>

      <OptionsCard />

      <p className="gallery__container_section__figure__p">{descripcion}</p>

      {/* Ejemplo de cómo usar el componente StarRatingComponent */}
      <StarRatingComponent rating={rating} Color="gold" />
    </section>
  );
}
