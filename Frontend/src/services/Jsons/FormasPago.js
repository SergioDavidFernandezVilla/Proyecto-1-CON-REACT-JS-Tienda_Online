import discover from "../../assets/icons/discover_card.svg"
import mastercard from "../../assets/icons/master_card.svg"
import paypal from "../../assets/icons/paypal_card.svg"
import visa from "../../assets/icons/visa_card.svg"

const FormasPago = [
  {
    id: 1,
    nombre: "Visa",
    imagen: visa,
    metodo:"Valido para todas las tarjetas de crédito y débito.",
  },
  {
    id: 2,
    nombre: "Mastercard",
    imagen: mastercard,
    metodo:"Valido para todas las tarjetas de crédito y débito.",
  },
  {
    id: 3,
    nombre: "American Express",
    imagen: discover,
    metodo:"Valido para todas las tarjetas de crédito y débito.",
  },
  {
    id: 4,
    nombre: "Diners",
    imagen: paypal,
    metodo:"Valido para todas las tarjetas de crédito y débito.",
  }
];

export default FormasPago;