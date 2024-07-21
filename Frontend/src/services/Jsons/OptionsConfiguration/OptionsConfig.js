import {
    MdAccountCircle,
    MdAssignment,
    MdAssignmentInd,
    MdAutorenew,
    MdSettings,
    MdLogout,
} from "react-icons/md";

const OptionsConfig = [
  {
    id: 1,
    name: "Mi cuenta",
    icon: MdAccountCircle,
  },
  {
    id: 2,
    name: "Historial de pedidos",
    icon: MdAssignment,
  },
  {
    id: 3,
    name: "Privacidad y seguridad",
    icon: MdAssignmentInd,
  },
  {
    id: 4,
    name: "Rembolso de pago",
    icon: MdAutorenew,
  },
  {
    id: 5,
    name: "Configuracion",
    icon: MdSettings,
  },
  {
    id: 6,
    name: "Cerrar sesión",
    icon: MdLogout,
  },
];

export default OptionsConfig;