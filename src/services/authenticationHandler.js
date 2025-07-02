import { setInLocalStorage, isLocalStorageEmpty } from "./localStorageHandler";
import { getUid } from "./uidHandler";
import { postUser } from "./firebaseHandler";

export function signIn() {
  if (isLocalStorageEmpty()) {
    const name = prompt("What is your name?");
    const user = {
      id: getUid(),
      name,
    };

    setInLocalStorage("user", user);
    postUser(user);
  }
}
