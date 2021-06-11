import React, { Component } from 'react'
import { Input, Menu,Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Authenticate, AUTH_USER } from './../actions/authentication';
import { connect } from 'react-redux';
import Auth from './../Reducers/Authnetication';

 class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleLog = e => {
        e.preventDefault();
        this.props.Authenticate(null)

  }

  render() {
    const { activeItem } = this.state
    const {users , Auth} =this.props;
    
    return (
      <Menu secondary>
        <Link to='/'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          />
          </Link>
        <Link to ='/newQuestion'>
        <Menu.Item
          name='New Question'
          active={activeItem === 'New Question'}
          onClick={this.handleItemClick}
          />
          </Link>
          <Link to ='/LeaderBoard'>
        <Menu.Item
          name='Leader Board'
          active={activeItem === 'Leader Board'}
          onClick={this.handleItemClick}
          />
          </Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            
            <span><Image
                  src={users[Auth].avatarURL}
                  avatar
                  
                />{users[Auth].id}</span>
            {/* {console.log(`omar and ${users`)} */}
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleLog}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps({users,Auth}){
  console.log('mapstate to props f l navbar')
  return{
    Auth,
    users
  };
}

export default connect(mapStateToProps,{Authenticate})(NavBar);
