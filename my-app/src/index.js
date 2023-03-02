import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
const TopMenu = () => (
    <Navbar bg="secondary" expand="lg">

      <Container>
        <Nav className="justify-content-start">
          <Nav.Link style={{color:'white'}}><Instagram/></Nav.Link>
        </Nav>
        <Nav className="justify-content-center">
          <Image src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/wod-boardroom-logo.png" width="70px"></Image>
        </Nav>
        <Nav className="justify-content-end">
          <Button variant="dark">Menu</Button>
        </Nav>
      </Container>
    </Navbar>
);

const CenterImage = () => (
    <Container className="d-flex align-self-center justify-content-center">
      <Image src="https://courses.ics.hawaii.edu/ics314s23/morea/ui-frameworks/wod-boardroom-logo.png" width="500px" style={{marginTop:"125px"}}></Image>
    </Container>
);

const FooterMenu = () => (
    <footer className="fixed-bottom">
      <Container>
        <Row className="pt-4">
          <Col>
            <h3>Hours</h3>
            <div className="mt-3">Wednesday - Thursday 5pm – 10pm</div>
            <div>Friday - Saturday 5pm – 11pm</div>
            <div>Sunday Brunch 10am - 2pm</div>
          </Col>
          <Col>
            <h3>Stay Connected</h3>
            <div className="mt-3"><a href="#" style={{color:'black'}}>Instagram</a></div>
            <div><a href="#" style={{color:'black'}}>Contact Us</a></div>
            <div><a href="#" style={{color:'black'}}>Gift Cards</a></div>
            <div><a href="#" style={{color:'black'}}>Reservations</a></div>
          </Col>
          <Col></Col>
          <Col>
            <h3>THE BOARDROOM</h3>
            <div className="mt-3">44 Kainehe St.</div>
            <div>Kailua, HI 96734</div>
            <br/>
            <div>(808)807-5640</div>
          </Col>
        </Row>
      </Container>
    </footer>
);
const Boardroom = () => (
    <div className="d-flex flex-column min-vh-100">
      <TopMenu/>
      <CenterImage/>
      <FooterMenu/>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Boardroom />);