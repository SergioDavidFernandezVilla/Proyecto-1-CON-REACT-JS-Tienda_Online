//Jsons
import AccountImages from "../../../services/Jsons/AccountsImages/AccountImages";

export const FooterMenuAuthComponent = () => {
  return (
    <footer className="footer__menu__auth">
      <header className="footer__menu__auth__header">
        <p className="footer__menu__auth__header__p">
          <strong>Inicia sesión con</strong>
        </p>
      </header>
      <div className="container__menu__auth__footer__div">
        {AccountImages.map((account) => (
          <figure className="footer__menu__auth__figure" key={account.id}>
            <img
              src={account.avatar}
              alt={account.empresa}
              className="footer__menu__auth__figure__img"
            />
          </figure>
        ))}
      </div>
    </footer>
  );
};
