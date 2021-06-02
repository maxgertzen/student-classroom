import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import AddStudentModal from './containers/AddStudentModal/AddStudentModal';
import StudentsPage from './containers/StudentsPage/StudentsPage';
import { default as api } from './Dal/usersAPI';

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [studentsList, setStudentsList] = useState([])
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const addUserToDatabase = (user) => { api.add(user); closeModal() };

  useEffect(() => {
    const data = api.getAll()
    setStudentsList(data)
  }, [studentsList])
  return (
    <>
      <Header handleSelect={openModal} />
      <Container fluid>
        <StudentsPage data={studentsList} />
        {
          modalOpen ?
            <AddStudentModal handleClose={closeModal} handleShow={modalOpen} handleSubmit={addUserToDatabase} />
            :
            null
        }
      </Container>
    </>
  )
}

export default App;
