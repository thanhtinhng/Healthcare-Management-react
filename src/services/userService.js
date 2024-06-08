import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword})
}

const getDoctorByDepartment = (departmentId) => {
    return axios.get(`/api/doctor-by-department?departmentId=${departmentId}`)
}

const getDoctorById = (doctorId) => {
    return axios.get(`/api/doctor-by-id?doctorId=${doctorId}`)
}

const postAppointment = (date, time, doctorId, userId) => {
    return axios.post('/api/appointment', {date: date, time: time, doctorId: doctorId, userId: userId})
}

export { handleLoginApi, getDoctorByDepartment, getDoctorById, postAppointment }