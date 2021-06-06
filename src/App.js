import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import AddStudentModal from './containers/AddStudentModal/AddStudentModal';
import StudentsPage from './containers/StudentsPage/StudentsPage';
import { default as api } from './Dal/usersAPI';

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [studentsList, setStudentsList] = useState([]);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const addUserToDatabase = (user) => {
    setStudentsList(prevList => [...prevList, api.add(user)]);
    closeModal();
  };

  const applySortOnTable = (sortMethod) => {
    const sortedData = api.getAll(sortMethod);
    setStudentsList(sortedData)
  }

  useEffect(() => {
    const data = api.getAll()
    setStudentsList(data)
  }, [])
  return (
    <>
      <Header handleSelect={openModal} />
      <Container fluid>
        <StudentsPage data={studentsList} sortTable={applySortOnTable} />
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
