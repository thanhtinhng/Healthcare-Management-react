import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword})
}

const getDoctorByDepartment = (departmentId) => {
    return axios.get(`/api/doctor-by-department?departmentId=${departmentId}`)
}

export { handleLoginApi, getDoctorByDepartment }