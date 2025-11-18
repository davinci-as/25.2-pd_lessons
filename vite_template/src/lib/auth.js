import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

export const auth = getAuth(app);

export const authWithEmail = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};
