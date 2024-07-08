// Dependencies
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// JSONs
import { CategoriesFilters } from "../../services/Jsons/CategoriesFilters/CategoriesFilters";

//Utils
import { URL_PRODUCTS_QUERY } from "../../utils/UrlPage";

export default function useCategoriesFiltersHook() {
  const navigate = useNavigate();
  const { categoria, page } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (categoryName) => {
    const checkTextCategory = categoryName
      .trim()
      .toLowerCase()
      .replaceAll(" ", "-");

    // Solo navegar si la categoría seleccionada es diferente a la actual
    if (categoryName !== selectedCategory) {
      setSelectedCategory(categoryName);
      navigate(`${URL_PRODUCTS_QUERY}/${checkTextCategory}/page/${page || 1}`);
    } else {
      setSelectedCategory("");
      navigate(`${URL_PRODUCTS_QUERY}/${categoria}/page/${page || 1}`);
    }
  };

  // Navegar al cargar la página según la categoría seleccionada
  useEffect(() => {
    setSelectedCategory(categoria);
    navigate(`${URL_PRODUCTS_QUERY}/${categoria}/page/${page || 1}`);
  }, [navigate, categoria, page]);

  return {
    selectedCategory,
    handleClick,
    CategoriesFilters, // Esto permite que el componente acceda directamente al JSON de categorías
  };
}
