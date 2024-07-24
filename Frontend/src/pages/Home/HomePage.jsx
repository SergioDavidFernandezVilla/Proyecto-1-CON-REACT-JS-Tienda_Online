//Components
import HeaderMenuComponent from "../../components/Header/HeaderMenuComponent";
import CardsProductComponent from "../../components/Cards/CardProducts/CardsProductComponent";
import GalleryComponent from "../../components/Cards/Gallery/GalleryComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import GalleyProductsImagen from "../../services/Jsons/GalleyProductsImagen";
import carrousel from "../../services/Jsons/CarrouselCards/carrousel";
import { ModalConfiguracionComponent } from "../../components/ModalConfiguration/ModalConfiguracionComponent";
import { MenuAuthComponent } from "../../components/MenuAuth/MenuAuthComponent";

//Dependencies
import { useContext } from "react";

//Context
import { ContextMenu } from "../../context/MenushopContext/useContextMenu";
import { AuthContext } from "../../context/AuthContext/useAuthContext";

export default function HomePage() {
  const {
    isOpenModalConfiguracion,
    setIsOpenModalConfiguracion,
    handleClickModalConfiguracion,
  } = useContext(ContextMenu);

  const { isOpenMenuAuth, isOpenAccount } = useContext(AuthContext);

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

      {isOpenMenuAuth && <MenuAuthComponent />}
      {isOpenAccount && <MenuAuthComponent />}

      {isOpenModalConfiguracion && <ModalConfiguracionComponent />}

      <FooterComponent />
    </>
  );
}
