//Components
import HeaderMenuComponent from "../../components/Header/HeaderMenuComponent";
import CardsProductComponent from "../../components/Cards/CardProducts/CardsProductComponent";
import GalleryComponent from "../../components/Cards/Gallery/GalleryComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import GalleyProductsImagen from "../../services/Jsons/GalleyProductsImagen";
import carrousel from "../../services/Jsons/CarrouselCards/carrousel";

export default function HomePage() {
  return (
    <>
      <HeaderMenuComponent />

      <div className="container__home">
        <div className="container__gallery__products">
          {GalleyProductsImagen.map((product) => (
            <GalleryComponent
              key={product.id}
              imagen={product.imagen}
              title={product.nombre}
              descripcion={product.descripcion}
              estilo={product.estilo}
              rating={product.rating}
              estrellas={product.estrellas}
              slug={product.slug}
              categoria={product.categoria}
              marca={product.marca}
            />
          ))}
        </div>

        {carrousel.map((carousel) => (
          <CardsProductComponent
            key={carousel.id}
            id={carousel.id}
            title={carousel.name}
            jsonAPI={carousel.ArrayCarrousel}
            etiqueta={carousel.etiqueta}
          />
        ))}
      </div>

      <FooterComponent />
    </>
  );
}
