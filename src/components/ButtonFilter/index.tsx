import { useContext } from "react";
import { ButtonFilter, DivConteinerButtons } from "./styled";
import { ProductsContext } from "../../Contexts/ProductsContexts";

export const ButtonsFilter = () => {
  const { filterProducts } = useContext(ProductsContext);

  return (
    <>
      <DivConteinerButtons>
        <li>
          <ButtonFilter onClick={() => filterProducts("Todos")}>
            Todos
          </ButtonFilter>
        </li>
        <li>
          <ButtonFilter onClick={() => filterProducts("Camisetas")}>
            Camisetas
          </ButtonFilter>
        </li>
        <li>
          <ButtonFilter onClick={() => filterProducts("Camisas")}>
            Camisas
          </ButtonFilter>
        </li>
        <li>
          <ButtonFilter onClick={() => filterProducts("Calças")}>
            Calças
          </ButtonFilter>
        </li>
        <li>
          <ButtonFilter onClick={() => filterProducts("Shorts")}>
            Shorts
          </ButtonFilter>
        </li>
        <li>
          <ButtonFilter onClick={() => filterProducts("Saia")}>
            Saia
          </ButtonFilter>
        </li>
        <li>
          <ButtonFilter onClick={() => filterProducts("Vestidos")}>
            Vestidos
          </ButtonFilter>
        </li>
        <li>
          <ButtonFilter onClick={() => filterProducts("Blazers")}>
            Blazers
          </ButtonFilter>
        </li>
        <li>
          {" "}
          <ButtonFilter onClick={() => filterProducts("Casacos")}>
            Casacos
          </ButtonFilter>
        </li>
        <li>
          <ButtonFilter onClick={() => filterProducts("Jaquetas")}>
            Jaquetas
          </ButtonFilter>
        </li>
        <li>
          {" "}
          <ButtonFilter onClick={() => filterProducts("Íntimas")}>
            íntimas
          </ButtonFilter>
        </li>
      </DivConteinerButtons>
    </>
  );
};
