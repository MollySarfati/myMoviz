import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Popover, PopoverHeader, PopoverBody, Card, Container, Row, Col, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle,  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render() {

        var movieData = [
              {image: './malefique.jpg', name: 'Malefique', desc: 'Poussée par la vengeance et une volonté farouche deprotéger les terres qu elle préside, Maléfique place ...'},
              {image: './pi.jpg', name: ' L Odyssée de Pi', desc: 'Après que leur bateau est victime dune violente tempête etcoule au fond du Pacifique, un adolescent et un tigre du Bengale...'},
              {image: './tintin.jpg', name: 'Les Aventures de Tintin', desc: 'Parce qu il achète la maquette d un bateau appelé la Licorne, Tintin, un jeune reporter, se retrouve entraîné dans une fantastique aventure...'}
            ];
        var filmList = movieData.map(function(movie) {
                  return <Movie movieName={movie.name} movieImage={movie.image} movieDesc={movie.desc}/>;
                });

        var movieNameList=["A", "B", "C","Malefique,","L Odyssée de Pi," ,"Les Aventures de Tintin,"];
        movieNameList=movieNameList.reverse()
        var totalLike=movieNameList.length;

        var movieLast= movieNameList.slice(0,3);



return (
  <Container>
    <Row>
      <Header totalLike={totalLike} lastlike={movieLast}/>
    </Row>
    <Row>
       {filmList}
    </Row>
  </Container>
    );
  }
}



class Header extends Component {
      constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          popoverOpen: false
        };
      }

      toggle() {
        this.setState({popoverOpen: !this.state.popoverOpen});
      }


  render() {
    return (
      <Container>
        <Row>
          <Col xs="1">
            <img src="logo.png"/>
          </Col>

            <Nav>
              <Col xs="5">
                <NavItem>
                  <NavLink href="#">Last Releases</NavLink>
                </NavItem>
              </Col>

            <Col xs="4">
              <NavItem>
                <NavLink href="#">My Movies</NavLink>
              </NavItem>
            </Col>

            <Col xs="3">
            <NavItem>
              <NavLink href="#">
                <Button id="Popover1" onClick={this.toggle}>
    {this.props.totalLike} Films
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                <PopoverHeader>Derniers films ajoutés</PopoverHeader>
                <PopoverBody>{this.props.lastlike}</PopoverBody>
                </Popover>
              </NavLink>
            </NavItem>
            </Col>

            </Nav>

        </Row>
      </Container>
    );
  }
}


class Movie extends Component {
  render() {
    return(
        <Col xs="12" md="4">

         <div id="card">
           <Card>
           <FontAwesomeIcon icon={faHeart} />
           <img src={this.props.movieImage}/>
             <CardBody>
               <CardTitle>{this.props.movieName}</CardTitle>
               <CardText>{this.props.movieDesc}</CardText>
               <Button>Button</Button>
             </CardBody>
            </Card>
          </div>

        </Col>
      );
  }
}
export default App;
