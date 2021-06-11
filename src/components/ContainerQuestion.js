
import { Segment ,Header,Image,Grid,Button} from 'semantic-ui-react'

import Poll from './Poll';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

import {useParams} from "react-router-dom";
import { useState } from 'react';

import PollAnswer from './PollAnswer';
import { connect } from 'react-redux';
import questions from './../Reducers/questions';
import { object } from 'webidl-conversions';

const  ContainerQuestion = (props) => {
const handleSubmit = () =>{
    setstate({
        ShowingResult: true
    })
};
 const [state, setstate] = useState(true)


     
     console.log(useParams())
     console.log(props.questions[Object.values(useParams())[0]])
     let question = props.questions[Object.values(useParams())[0]] ;
 
    return(
        <div>
        <Segment>
    <Grid columns={3} divided padded>
    <Grid.Row>
      <Grid.Column width={7} height = {3}>
            <Header as='h3'>
    <Image circular src={question.avatarURL}/> {question.author}
  </Header>

    </Grid.Column>
          <Grid.Column width={5} height = {3}>

         
        {!state.ShowingResult && <Poll key ={question.id}{...question} submit={handleSubmit}/>}
        {state.ShowingResult && <PollAnswer key ={question.id}{...question} />}

    </Grid.Column>

    </Grid.Row>
    

     </Grid>
        </Segment>

        </div>
    )
}


function MapStateToProps({questions}) {



  return {
    questions
  };
}

export default connect(MapStateToProps)(ContainerQuestion);
