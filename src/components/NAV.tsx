import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import QuizIcon from '@mui/icons-material/Quiz';


function BrandExample() {
   const Styles={
    container: {
        backgroundColor: 'blue',
        padding: '20px',
        border: '1px solid gray',
      },
      text: {
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
      },
      nav:{
        display:"flex"
      },
      head:{
        margin:"0",
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
        marginTop:"10px",
        marginLeft:"12px",
        textDecoration:"none"
      }
   }
  return (
    <>
      <Navbar >
        <Container style={Styles.container}>
          <Navbar.Brand href="#home" style={Styles.nav}>
           <QuizIcon style={Styles.text}/>
           <h1 style={Styles.head}>Quiz App</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;