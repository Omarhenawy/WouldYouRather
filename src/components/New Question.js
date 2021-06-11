import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { render } from '@testing-library/react';
import { Redirect } from 'react-router-dom';
import { SavedQuestion } from './../actions/getQuestions';
import { connect } from 'react-redux';


class  NewQuestion extends Component{  
  state={
    optionOne : '',
    optionTwo : '',
    submit : false ,
    
  }
  
      handleChange = event => {
      let id = event.target.id;
      let value = event.target.value;
      this.setState({[id] :value});
    }
    handleSubmit = e => {
      e.preventDefault();
          const { Auth, SavedQuestion } = this.props;
    const { optionOne, optionTwo } = this.state;
     new Promise((res,rej)=>{
    SavedQuestion(optionOne,optionTwo,Auth)
     }) .then(()=>{
      this.setState({optionOne : '' ,optionTwo : ' '});
      this.setState({submit : true})

     })
    }

  render(){
    if(this.state.submit === true){
      return <Redirect to = "/" />;
    }
    
  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 700 }}>
      <Header as='h2' color='grey' textAlign='center'>
         Enter New Question
      </Header>
      <Form size='large'>
          
        <Segment stacked>
                  <Header as='h2' color='grey' textAlign='center'>
         Would you Rather ?
      </Header>
         
          <Form.Input fluid icon='angle double right'
           iconPosition='left' 
          placeholder='Enter Option One'
          id='optionOne'
          onChange={this.handleChange}
          value={this.state.optionOne}
          required

          />
          <Form.Input
            fluid
            id='optionTwo'
            icon='angle double right'
            iconPosition='left'
            placeholder='Enter Option two'
            value={this.state.optionTwo}
            onChange={this.handleChange}
            required
          />

          <Button color='grey' fluid size='large'  onClick={this.handleSubmit} >
            Submit
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)
  }
}

function mapStateToProps({ Auth }) {
  return {
    Auth
  };
}

export default connect(
  mapStateToProps,
  { SavedQuestion }
)(NewQuestion);
