const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    
    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    FETCH_DOCTORS_BY_DEPARTMENT_SUCCESS: 'FETCH_DOCTORS_BY_DEPARTMENT_SUCCESS',
    FETCH_DOCTORS_BY_DEPARTMENT_FAIL: 'FETCH_DOCTORS_BY_DEPARTMENT_FAIL',
})

export default actionTypes;