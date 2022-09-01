import { LOGIN, LOGOUT } from "./../types/constants";
let initialState = {
  isAuthenticated: true,
  cUser: {},
  cUserAttendance: [],
  noOfPresentDays: 0,
  totalDays: 0,
  noOfAbsents: 0,
  cUserMarks: [],
  cUserSubjects: [],
  news: [],
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      let isUserLogginedNow = true;
      let user = action.payload.studentData;
      let userAttendance = action.payload.studentAttendance;
      let presents = 0;
      let absents = 0;
      let totalNoOfDays = 0;
      userAttendance.forEach((attendance) => {
        if (attendance.attendanceStatus === true) {
          presents++;
        }
        totalNoOfDays++;
      });
      absents = totalNoOfDays - presents;
      let marksArray = action.payload.studentMarks;
      let subjects = action.payload.studentSubjects;
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
        cUser: user,
        cUserAttendance: userAttendance,
        noOfPresentDays: presents,
        noOfAbsents: absents,
        totalDays: totalNoOfDays,
        cUserMarks: marksArray,
        cUserSubjects: subjects,
      };
    }
    case LOGOUT: {
      let isUserLogginedNow = false;
      return {
        ...state,
        isAuthenticated: isUserLogginedNow,
        cUser: {},
      };
    }

    default:
      return state;
  }
};

export default authReducer;
