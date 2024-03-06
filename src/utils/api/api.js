import { users } from "./../dummydb";

export function getUserServices(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[userId]) {
        resolve(users[userId]);
      } else if (userId > 4) {
        reject(new Error("Usuario no encontrado"));
      } else {
        reject(new Error("El usuario no tiene una imagen asignada"));
      }
    }, 1000);
  });
}
