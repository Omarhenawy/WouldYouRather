import React, { Component } from 'react';
import  NavBar from './Navbar';
import { Grid, Image,Tab } from 'semantic-ui-react'
import ContainerQuestion from './ContainerQuestion'
import {getQuestions} from '../actions/getQuestions'
import {getUsers} from '../actions/getUsers'
import { userQuestionData } from './Data';
import Poll from './Poll';
import WouldYouRather from './WouldYouRather';
import { connect } from 'react-redux';


 class HomePage extends Component {
    render(){
const { user } = this.props;
console.log(user)
        return(
            <div>
                
                <Grid columns={2} centered>
    <Grid.Row>
      <Grid.Column>
<Tab panes={panes(this.props)}></Tab>
          </Grid.Column>
    </Grid.Row>

  </Grid>
                
            </div>
        )
    }
}




const GridQuestions = (props) => (
  <Grid columns={2} centered>
    <Grid.Row>
      <Grid.Column>
<Tab panes={panes(props)}></Tab>
          </Grid.Column>
    </Grid.Row>

  </Grid>
)
const panes = props => [
    { menuItem: "Unanswered", render: () => <Tab.Pane>  {props.questions.answered.map(question => (
          <WouldYouRather  key={question.qid} {...question}  question_id={question.id}
 unanswered={true} {...props} />
        ))}
</Tab.Pane> },

  { menuItem: "Answered", render: () => <Tab.Pane>     {props.questions.unanswered.map(question => (
          <WouldYouRather key={question.qid} {...question}  question_id={question.id}
          unanswered={false} {...props} />
        ))}
</Tab.Pane> }
];


function mapStateToProps({ Auth, users, questions }) {
  console.log('mapstate top props f l homepage')
  const ids = Object.keys(users[Auth].answers);
  const answered = Object.values(questions)
    .filter(question => ids.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter(question => !ids.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    user : users[Auth],
    questions: {
      answered,
      unanswered
    }
  };
}

export default connect(mapStateToProps)(HomePage);


