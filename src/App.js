import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header/Header';
import { useState } from 'react';
import RegisterPage from './containers/LoginPage/RegisterPage';
import StudentsPage from './containers/StudentsPage/StudentsPage';

function App() {
  const [isLoginPage, setisLoginPage] = useState(true)
  const renderPage = ({ target: e }) => {
    if (e.innerText === 'Students' && isLoginPage) {
      setisLoginPage(!isLoginPage)
    } else if (e.innerText === 'Sign Up' && !isLoginPage) {
      setisLoginPage(!isLoginPage)
    }
  }

  return (
    <>
      <Header handleSelect={renderPage} />
      <Container fluid>
        {isLoginPage ? <RegisterPage /> : <StudentsPage />}
      </Container>
    </>
  )
}

export default App;
