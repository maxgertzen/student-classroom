import logo from './logo.svg';
import './App.css';
import LoginPage from './containers/LoginPage/LoginPage';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid>
      <LoginPage />
    </Container>
  )
}

export default App;
