import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Popover, PopoverBody, Card, Container, Row, Col, CardImg, CardText, CardBody, CardTitle, Button, Nav, NavItem, NavLink  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class App extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
    this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
      viewOnlyLike: false,
      moviesCount: 0,
      moviesNameList: []
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  handleClickLikeOff() {
    this.setState({viewOnlyLike: false});
  }

  handleClickLikeOn() {
    this.setState({viewOnlyLike: true});
  }

  handleClick(isLike, name) {
    console.log(isLike);
    var moviesNameListCopy = [...this.state.moviesNameList];

    if (isLike == true) {
      moviesNameListCopy.push(name);
      this.setState({
        moviesCount: this.state.moviesCount + 1,
        moviesNameList: moviesNameListCopy
      })
    } else {
      var index = moviesNameListCopy.indexOf(name);
      moviesNameListCopy.splice(index, 1);
      this.setState({
        moviesCount: this.state.moviesCount - 1,
        moviesNameList: moviesNameListCopy
      })
    }
  }

  render() {

    var moviesData = [
      {
        img: './malefique.jpg',
        name: 'Malefique',
        desc: 'Poussée par la vengeance et une volonté farouche deprotéger les terres qu elle préside, Maléfique place ...',
        etat: false
      }, {
        img: './pi.jpg',
        name: ' L Odyssée de Pi',
        desc: 'Après que leur bateau est victime dune violente tempête etcoule au fond du Pacifique, un adolescent et un tigre du Bengale...',
        etat: false
      }, {
        img: './tintin.jpg',
        name: 'Les Aventures de Tintin',
        desc: 'Parce qu il achète la maquette d un bateau appelé la Licorne, Tintin, un jeune reporter, se retrouve entraîné dans une fantastique aventure...',
        etat: false
      }, {
        img: './malefique.jpg',
        name: 'Malefique',
        desc: 'Poussée par la vengeance et une volonté farouche deprotéger les terres qu elle préside, Maléfique place ...',
        etat: false
      }, {
        img: './pi.jpg',
        name: ' L Odyssée de Pi',
        desc: 'Après que leur bateau est victime dune violente tempête etcoule au fond du Pacifique, un adolescent et un tigre du Bengale...',
        etat: false
      }, {
        img: './tintin.jpg',
        name: 'Les Aventures de Tintin',
        desc: 'Parce qu il achète la maquette d un bateau appelé la Licorne, Tintin, un jeune reporter, se retrouve entraîné dans une fantastique aventure...',
        etat: false
      }
    ];

    var ctx = this;

    var movieList = moviesData.map(function(movie, i) {
      return (<Movie key={i} handleClickParent={ctx.handleClick} displayOnlyLike={ctx.state.viewOnlyLike} movieName={movie.name} movieImage={movie.img} movieDesc={movie.desc} movieNumber={i}/>);
    });

    var lastName = "";

    var moviesNameListCopy = [...this.state.moviesNameList];

    if (moviesNameListCopy.length > 0) {
      lastName = moviesNameListCopy.pop();
    }
    if (moviesNameListCopy.length > 0) {
      lastName = lastName + ', ' + moviesNameListCopy.pop();
    }
    if (moviesNameListCopy.length > 0) {
      lastName = lastName + ', ' + moviesNameListCopy.pop();
    }
    if (moviesNameListCopy.length > 0) {
      lastName = lastName + '...';
    }

    return (<Container className="col-12">

      <Row>
        <Col>
          <Nav>
            <NavItem>
              <NavLink href="#"><img src="logo.png" alt='logo'/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.handleClickLikeOff} href="#">
                Last releases</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.handleClickLikeOn} href="#">My movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Button id="Popover1" onClick={this.toggle}>
                  {this.state.moviesCount}
                  Movie
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                  <PopoverBody>{lastName}</PopoverBody>
                </Popover>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>

      <Row>
        {movieList}
      </Row>

    </Container>)
  }
}

class Movie extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      like: false
    };
  }

  handleClick() {
    var isLike = !this.state.like;
    var movieName = this.props.movieName;
    this.setState({like: isLike});
    this.props.handleClickParent(isLike, movieName);
  }

  render() {
    var colorHeart;
    if (this.state.like === true) {
      colorHeart = {
        color: "#FF5B53",
        cursor: "Pointer"
      }
    }

    var isDisplay;
    if (this.props.displayOnlyLike == true && this.state.like == false) {

      isDisplay = {
        display: "none"
      }
    }
    return (<Col xs="12" md="4" style={isDisplay}>

      <div id="card">
        <Card className="Card">
          <CardImg src={this.props.movieImage}/>
          <CardBody>
            <FontAwesomeIcon style={colorHeart} onClick={this.handleClick} icon={faHeart}/>
            <CardTitle>{this.props.movieName}</CardTitle>
            <CardText>{this.props.movieDesc}</CardText>
          </CardBody>
        </Card>
      </div>

    </Col>);
  }
}
export default App;
