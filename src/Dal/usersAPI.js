import data from './students.json';
import { v4 as uuidv4 } from 'uuid';



const API = (() => {
    const __students = (() => {
        let storedStudents = []
        Object.keys(window.localStorage)?.forEach(function (key) {
            let student = JSON.parse(localStorage.getItem(key))
            storedStudents.push(student);
        });
        return [...data.students, ...storedStudents]
    })();



    const _getStudentIndexById = (id) => {
        return __students.findIndex(obj => obj._id === id);
    }

    const getStudents = (sort) => {
        if (sort instanceof Function) {
            return [...__students].sort(sort)
        }
        return __students;
    }

    const addStudent = (student) => {
        let _id = uuidv4();
        let newStudent = {
            _id,
            ...student
        }
        __students.push(newStudent);
        localStorage.setItem(`${String(_id + Math.floor(Math.random() * 1000)).slice(10)}`, JSON.stringify(newStudent))
        return newStudent
    }

    const removeStudent = (id) => {
        let index = _getStudentIndexById(id);
        if (index > -1) {
            let removed = __students.splice(index, 1);
            return removed;
        }
    }

    const getOneStudent = (id) => {
        let index = _getStudentIndexById(id);
        if (index > -1) {
            return __students[index]
        }
    }

    return {
        getAll: getStudents,
        getOne: getOneStudent,
        remove: removeStudent,
        add: addStudent
    }
})();

export default API