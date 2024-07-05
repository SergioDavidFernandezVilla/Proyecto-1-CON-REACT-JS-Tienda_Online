import ResultSearchComponent from "./ResultSearchComponent";

export default function ResultsSearchMenu({
  data = [],
  data2 = [],
  handleClickClearSearch,
  handleClickStop,
  ContenedorResultsSearchRef,
}) {
  // Calcula el límite total de resultados combinados que deseas mostrar
  const totalLimit = 7;

  // Combina ambos conjuntos de datos y limita el total de resultados a mostrar
  const combinedResults = [
    ...data.slice(0, Math.ceil(totalLimit / 2)),
    ...data2.slice(0, Math.floor(totalLimit / 2)),
  ];

  return (
    <div
      className="container__search_menu__open__div"
      ref={ContenedorResultsSearchRef}
    >
      {combinedResults.map((product, index) => (
        <ResultSearchComponent
          key={`${product.id}-${index}`}
          id={product.id}
          nombre={product.nombre.replace(/<\/?[^>]+(>|$)/g, "")}
          handleClickClearSearch={handleClickClearSearch}
          handleClickStop={handleClickStop}
          slug={product.slug}
        />
      ))}
    </div>
  );
}
