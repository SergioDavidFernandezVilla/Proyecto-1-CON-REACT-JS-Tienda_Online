//Icons
import StarSVG from "../StarRating/StartSVG/StartSVGComponent";

// Componente StartRatingComponent para mostrar la calificación con estrellas
export function StartRatingComponent({
  rating,
  maxEstrellas = 5, // Establecer el máximo de estrellas por defecto a 5
  Color,
}) {
  // Redondear a una precisión razonable
  rating = Math.round(rating * 2) / 2;

  // Calcular el número de estrellas completas y medias
  const estrellasCompletas = Math.floor(rating); // Estrellas completas
  const estrellasMedias = rating - estrellasCompletas; // Parte fraccionaria

  // Array para almacenar las estrellas completas y medias
  let estrellasArray = [];

  // Agregar estrellas completas al array
  for (let i = 0; i < estrellasCompletas; i++) {
    estrellasArray.push(<StarSVG key={`star-${i}`} Color={Color} />);
  }

  // Agregar estrella media si la calificación tiene parte fraccionaria mayor a 0
  if (estrellasMedias > 0) {
    estrellasArray.push(
      <StarSVG
        key={`star-half`}
        Color={Color}
        style={{
          clipPath: `inset(0 ${100 * (1 - estrellasMedias)}% 0 0)`,
        }}
      />
    );
  }

  // Agregar estrellas vacías para completar el total de estrellas si es necesario
  while (estrellasArray.length < maxEstrellas) {
    estrellasArray.push(
      <StarSVG key={`star-empty-${estrellasArray.length}`} Color="lightgray" />
    );
  }

  return (
    <div className="gallery__container_section__figure__img_calificacion">
      <p className="gallery__container_section__figure__img_calificacion__p">
        Calificación: {rating}
      </p>

      <div className="gallery__container_section__figure__img_calificacion__container__stars">
        {estrellasArray}
      </div>
    </div>
  );
}

export default StartRatingComponent;
