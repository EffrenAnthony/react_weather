import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import {Container,Row,Col,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Arequipa, PE',
  'Puno, PE',
  'Puerto Maldonado, PE',
  'Washington, US'];

class App extends Component {

constructor(){
  super();
  this.state = {
    city: null
  }
}

  handleLocationListClick = (city)=>{
    // console.log("Click en App JS");
    // console.log(city);  
    this.setState({
      city:city
    });
  }

  render() {
    let city = this.state.city;
    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Row>
          <Col md={12}>
            <h1>Titulo</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h5>API de Climas y pronóstios</h5>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            <LocationList cities={cities} onSelectLocation={this.handleLocationListClick}/>
          </Col>
          <Col md={7} >
            <div className = "details">
            {/* pregunta */}
              {city?
              // si 
                    <ForecastExtended city={city}/>:
              // no
                    "no se ha seleccionado ninguna ciudad"}

            </div>
          </Col>
        </Row>
      </Container>
      
      
    );
  }
}

export default App;
