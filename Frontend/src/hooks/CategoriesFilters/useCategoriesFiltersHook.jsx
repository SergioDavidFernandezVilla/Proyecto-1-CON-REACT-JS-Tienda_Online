//Dependencies
import { useNavigate } from "react-router-dom";

//Utils
import {
  URL_PRODUCTS,
  URL_PRODUCTS_CATEGORY,
  URL_PRODUCTS_PAGE,
} from "../../utils/UrlPage";

export default function useCategoriesFiltersHook() {
  const navigate = useNavigate();

  const handleClick = (e, categoryName) => {
    const checkboxes = document.getElementsByName("categorias");
    const checkTextCategory = categoryName
      .trim()
      .toLowerCase()
      .replaceAll(" ", "-", " ", "-");

    checkboxes.forEach((checkbox) => {
      if (checkbox.id !== e.target.id) {
        checkbox.checked = false;
      }
    });

    if (e.target.checked) {
      const URL = `${URL_PRODUCTS}${URL_PRODUCTS_CATEGORY}/${checkTextCategory}${URL_PRODUCTS_PAGE}`;
      navigate(`${URL}1`);
    } else {
      console.log(`Deseleccionado: ${checkTextCategory}`);
    }
  };

  return {
    handleClick,
  };
}
