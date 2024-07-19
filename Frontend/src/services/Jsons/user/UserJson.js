import userAvatar1 from "../../../assets/images/avatars__users/avatar__user__1.jpg"
import userAvatar2 from "../../../assets/images/avatars__users/avatar__user__2.jpg";
import userAvatar3 from "../../../assets/images/avatars__users/avatar__user__3.jpg";

const userJson = [
  {
    id: 1,
    name: "Juan",
    email: "juan@gmail.com",
    password: "123456",
    role: "admin",
    avatar: userAvatar1,
  },
  {
    id: 2,
    name: "Pedro",
    email: "pedro@gmail.com",
    password: "123456",
    role: "user",
    avatar: userAvatar2,
  },
  {
    id: 3,
    name: "Carlos",
    email: "carlos@gmail.com",
    password: "123456",
    role: "user",
    avatar: userAvatar3,
  },
];

export default userJson;