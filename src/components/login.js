import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Authenticate } from './../actions/authentication';
import { connect } from 'react-redux';



 class LoginPage extends Component{
     state ={
         value: '',
     };
     handleClick=event =>{
         event.preventDefault();
              this.props.Login();
     }
     handleChange = (event,{value})=>{
         this.setState({value});
     }
     handleSubmit = e=> {
        e.preventDefault();
        const {Authenticate} = this.props ;
        const AUTH = this.state.value;
           Authenticate(AUTH)
     }
     loginData = () =>{
         return Object.values(this.props.users).map(user => ({
             key: user.id,
             text: user.name,
             value: user.id,
             image: {  src: user.avatarURL }
             
         }))
     }
     render(){
       console.log(this.props)
         return(
           
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Select User
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Dropdown 
          
            
           placeholder='User'
           value={this.state.value}
           options={this.loginData()}
           onChange={this.handleChange}
           fluid />
          

          <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
         )
     }
 }

 
export default connect(mapStateToProps,{Authenticate})(LoginPage)
function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}
 

