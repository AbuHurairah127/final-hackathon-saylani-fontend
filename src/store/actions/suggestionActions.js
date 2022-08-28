import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "./../../config/firebase";
export const createSuggestion = (data, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const docRef = await addDoc(collection(db, "suggestions"), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      class: data.class,
      message: data.message,
    });
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }
};
