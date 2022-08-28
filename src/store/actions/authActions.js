import { LOGIN, LOGOUT, NEWS } from "../types/constants";
import { auth, db } from "./../../config/firebase";
import {
  signInWithEmailAndPassword,
  updatePassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  setDoc,
} from "firebase/firestore/lite";
export const userLogin = (data, setButtonLoader) => async (dispatch) => {
  try {
    let attendanceArray = [];
    let currentStudent = {};
    let marksArray = [];
    setButtonLoader(true);
    data.userName = `${data.userName}@gulbergbostonacademy.web.app`;
    await signInWithEmailAndPassword(auth, data.userName, data.password);
    let user = auth.currentUser;
    const docSnap = await getDoc(doc(db, "students", user.uid));
    let userData = docSnap.data();
    const attendanceRef = doc(db, "attendance", user.uid);
    const attendanceSnap = await getDoc(attendanceRef);

    if (attendanceSnap.exists()) {
      const attendance = attendanceSnap.data();
      attendanceArray = Object.values(attendance);
    }
    const marksRef = collection(db, "marks");
    const marks = query(marksRef, where("studentId", "==", userData.uid));
    const marksSnapshot = await getDocs(marks);
    marksSnapshot.forEach((doc) => {
      marksArray.push(doc.data());
    });
    marksArray = marksArray.sort((a, b) => a.testNo - b.testNo);
    let subjects = JSON.parse(userData.subjects);
    currentStudent = {
      studentData: userData,
      studentAttendance: attendanceArray,
      studentSubjects: subjects,
      studentMarks: marksArray,
    };

    dispatch({
      type: LOGIN,
      payload: currentStudent,
    });
    window.notify(
      `"${userData.name}" has been successfully logged in. `,
      "success"
    );
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => {
      setButtonLoader(false);
    }, 2500);
  }
};
export const userLogout = (setIsLoggingOut) => async (dispatch) => {
  try {
    setIsLoggingOut(true);
    signOut(auth);
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    // setIsLoggingOut(false);
  }
};
export const fetchCurrentUser = (setPreLoader) => async (dispatch) => {
  try {
    onAuthStateChanged(auth, async (user) => {
      let attendanceArray = [];
      let marksArray = [];
      let currentStudent = {};
      if (user) {
        const docSnap = await getDoc(doc(db, "students", user.uid));
        const userData = docSnap.data();
        if (userData) {
          const attendanceRef = doc(db, "attendance", userData.uid);
          const attendanceSnap = await getDoc(attendanceRef);

          if (attendanceSnap.exists()) {
            const attendance = attendanceSnap.data();
            attendanceArray = Object.values(attendance);
          }
          const marksRef = doc(db, "marks", user.uid);
          const marksSnap = await getDoc(marksRef);

          if (marksSnap.exists()) {
            const marks = await marksSnap.data();
            marksArray = Object.values(marks);
          }

          marksArray = marksArray.sort((a, b) => a.testNo - b.testNo);
          let subjects = JSON.parse(userData.subjects);
          currentStudent = {
            studentData: userData,
            studentAttendance: attendanceArray,
            studentSubjects: subjects,
            studentMarks: marksArray,
          };
          dispatch({
            type: LOGIN,
            payload: currentStudent,
          });
        } else {
          await signOut(auth);
          dispatch({ type: LOGOUT });
          window.notify(
            "You are not allowed to sign in any more.Please contact management for more information.",
            "info"
          );
        }
      }
    });
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => {
      setPreLoader(false);
    }, 7500);
  }
};
export const passwordUpdate = (data, setIsLoading) => async (dispatch) => {
  try {
    setIsLoading(true);
    const user = auth.currentUser;
    await updatePassword(user, data.newPassword);
    const passwordRef = doc(db, "students", user.uid);
    await setDoc(passwordRef, { password: data.newPassword }, { merge: true });
    window.notify("Password updated successfully", "success");
  } catch (error) {
    window.notify(error.message, "error");
  } finally {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }
};
