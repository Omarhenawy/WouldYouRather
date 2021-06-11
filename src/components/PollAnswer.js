import React, { Component } from 'react';
import {Progress,Header, Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';

class PollAnswer extends Component {
    
  handleClick = () => {
    this.props.history.push('/');
  };

    render(){
       const  {optionOne,optionTwo} = this.props;
           const { question, user } = this.props;
        const  oneVotes = optionOne.votes.length ;
         const twoVotes = optionTwo.votes.length ;
         const total = oneVotes + twoVotes ;


return (
        <React.Fragment>
        <Header as='h2'>Poll Result</Header>
        <p>{optionOne.text}</p>
        <Progress percent={((oneVotes/total) *100)}> </Progress>
        <p>{optionTwo.text}</p>
        <Progress percent={((twoVotes/total) *100)}> </Progress>
        <Button onClick={this.handleClick}>Back</Button>



    </React.Fragment>

)
    }
}
function mapStateToProps({ users, Auth }) {
  const user = users[Auth];
  return {
    user
  };
}

export default withRouter(connect(mapStateToProps)(PollAnswer));