//Icons
import email from "../../../assets/icons/RegisterAndLogin/icon__email.svg"
import password from "../../../assets/icons/RegisterAndLogin/icon__pasword.svg"
import user from "../../../assets/icons/RegisterAndLogin/icon__username.svg"

export const RegisterData = [
  {
    id: 1,
    idType:"name",
    name: "Nombre completo",
    nameInput:"name",
    type: "text",
    placeholder: "Nombre",
    autoComplete: "username",
    IconInput: user,
  },
  {
    id: 2,
    idType:"email",
    name: "Correo electrónico",
    nameInput:"email",
    type: "email",
    placeholder: "ejemplo@ejemplo.com",
    autoComplete: "email",
    IconInput: email,
  },
  {
    id: 3,
    idType:"password",
    name: "Contraseña",
    nameInput:"password",
    type: "password",
    placeholder: "******",
    autoComplete: "new-password",
    IconInput: password,
  },
  {
    id: 4,
    idType:"confirmpassword",
    name: "Confirmar contraseña",
    nameInput:"confirmpassword",
    type: "password",
    placeholder: "******",
    autoComplete: "new-password",
    IconInput: password,
  },
];

export const LoginData = [
  {
    id: 1,
    idType:"Email",
    name: "Email",
    nameInput:"email",
    type: "email",
    placeholder: "ejemplo@ejemplo.com",
    autoComplete: "email",
    IconInput: email,
  },
  {
    id: 2,
    idType:"Contraseña",
    name: "Contraseña",
    nameInput:"password",
    type: "password",
    placeholder: "******",
    autoComplete: "new-password",
    IconInput: password,
  },
];