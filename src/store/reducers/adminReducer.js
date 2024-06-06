import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null,
    doctorByDepartment: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                adminInfo: action.adminInfo
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }

        case actionTypes.FETCH_DOCTORS_BY_DEPARTMENT_SUCCESS:
            state.doctorByDepartment = action.dataDoctor;
            return {
                ...state,
               
            }
        case actionTypes.FETCH_DOCTORS_BY_DEPARTMENT_FAIL:
            state.doctorByDepartment = [];
            return {
                ...state,
                
            }
        default:
            return state;
    }
}

export default appReducer;