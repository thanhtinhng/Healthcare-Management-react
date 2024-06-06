import actionTypes from './actionTypes';
import { getDoctorByDepartment } from '../../services/userService'

export const fetchDoctorByDepartment = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getDoctorByDepartment('D');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_DOCTORS_BY_DEPARTMENT_SUCCESS,
                    dataDoctor: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_DOCTORS_BY_DEPARTMENT_FAIL
                })
            }
        } catch (error) {
            console.log('FETCH_DOCTORS_BY_DEPARTMENT_FAIL: ', error)
            dispatch({
                type: actionTypes.FETCH_DOCTORS_BY_DEPARTMENT_FAIL
            })
        }
    }
}