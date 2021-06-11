import React, { Component } from 'react';
import { Segment ,Header,Image,Grid,Button, GridColumn} from 'semantic-ui-react'

import { leaderboardData ,users} from './Data';
import { connect } from 'react-redux';

 class LeaderBoard extends Component{
     render(){
         const {leaderboardData} = this.props;
         return(
             
               <div style={{maxWidth:600}}className='centred' >
                 {leaderboardData.map((user) =>
                <Segment centered>

                
                 <Grid columns={3} divided padded='vertically' style={{maxWidth: 550}}  centered >
                 <Grid.Row >
                     <Grid.Column width={3} >
                         <Image src={user.avatarURL}/>
                     </Grid.Column>
                      <Grid.Column width={5}>
                         <Header>
                             {user.name}
                         </Header>
                        <Grid>

                        </Grid>
                     </Grid.Column>
                     <GridColumn>
                       <Grid.Row>   Answered question {user.answerCount}</Grid.Row>
                        <Grid.Row>   Unanswered questions {user.questionCount}</Grid.Row>

                     </GridColumn>


                 </Grid.Row>

                 </Grid>
                 </Segment>
                 )}
             </div>
              
         )
     }
 }
function mapStateToProps({ users }) {
  const leaderboardData = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
    }))
  return {
    leaderboardData
  };
}

export default connect(mapStateToProps)(LeaderBoard);
