//Components
import { OptionsModalComponent } from "../OptionsModal/OptionsModalComponent";

//JSONs
import OptionsConfig from "../../../services/Jsons/OptionsConfiguration/OptionsConfig";

export const NavModalComponent = () => {
  return (
    <nav className="modal__container__nav">
      <ul className="modal__container__nav__list__ul">
        {OptionsConfig.map((option) => (
          <OptionsModalComponent option={option} key={option.id} />
        ))}
      </ul>
    </nav>
  );
};
