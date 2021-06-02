import data from './students.json';
import { v4 as uuidv4 } from 'uuid';



const API = (() => {
    const { students: __students } = data;

    const _getStudentIndexById = (id) => {
        return __students.findIndex(obj => obj._id === id);
    }

    const getStudents = (sort) => {
        if (sort) {
            return __students.sort(sort)
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