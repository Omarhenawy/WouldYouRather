import React, { Component } from 'react';
import { Segment ,Header,Image,Grid,Button} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import Poll from './Poll'


import PollAnswer from './PollAnswer';
import { connect } from 'react-redux';
import questions from './../Reducers/questions';





class WouldYouRather extends Component {
state = {
    Answer : false
}
handleClick = event => {
   
    this.setState(state => ({
        Answer : !state.Answer
    }));
}
 render(){
     const {optionOne,author,question_id,avatarURL} = this.props ;
     if(this.state.Answer === true){
           return <Redirect push to={`/questions/${question_id}`}/>
     }

 
    return(
        <div>
        <Segment>
    <Grid columns={3} divided padded>
    <Grid.Row>
      <Grid.Column width={7} height = {3}>
            <Header as='h3'>
      <img circular src={avatarURL} />{`${author} asks`}
  </Header>

    </Grid.Column>
          <Grid.Column width={5} height = {3}>

          <Header as ='h3'>
           {`Would you Rather `}
          </Header>
          
          <p> {optionOne.text} <br />or... </p>
          <Button onClick={this.handleClick}>
              Answer
          </Button>

    </Grid.Column>

    </Grid.Row>
    

     </Grid>
        </Segment>

        </div>
    )
}
}


export default WouldYouRather;
