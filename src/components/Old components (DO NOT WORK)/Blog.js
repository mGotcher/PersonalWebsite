import React from 'react';
import {Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import profilePic from '../profilePic.jpg';
import {Jumbotron} from "reactstrap";
import profile from "../profile";
import moment from "moment";
import { Media } from "reactstrap";
import blog from "../blog";
import ReactDOM from 'react-dom';
import '../blog.css';

class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
	
     return <Container>
      <Row>
        <Col>
		  
		 
                  <h1>Test</h1>
				  <h2>Test</h2>/
				<h5>Surra Surra</h5>

				<p className="blogArticle"></p>
              
             
		
		
       
        </Col>
      </Row>
	  
    </Container>

  }
}

export default Blog;
