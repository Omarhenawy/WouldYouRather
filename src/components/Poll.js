import React, { Component } from 'react';
import {Button , Radio , Header ,Form, Segment,Grid} from 'semantic-ui-react';

import { questionData } from './Data';
import {handleQuestionAnswer} from '../actions/getUsers'
import { connect } from 'react-redux';

class Poll extends Component {
    
  state = {value : ""};
  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = event => {
      event.preventDefault();
      if(this.state.value !== ""){
          this.props.submit(this.state.value);
          console.log(this.state.value)
        const { Auth, id, handleQuestionAnswer } = this.props;
        
      handleQuestionAnswer(Auth, id, this.state.value);

      }
  }

  render() {
      
    const { optionOne , optionTwo } = this.props;
    console.log(this.props);

    return (
      <div>
      <Segment>
        <Grid columns={3} divided padded>
          <Grid.Row>
      <Form >
        <Form.Field> 
          <Header> Choose</Header>
        </Form.Field>
        <Form.Field>
          <Radio
            label={optionOne.text}
            name='radioGroup' value='optionOne'
            checked={this.state.value === 'optionOne'} onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label={optionTwo.text}
            name='radioGroup' value='optionTwo'
            checked={this.state.value === 'optionTwo'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
      </Grid.Row>
      </Grid>
      </Segment>
      </div>
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
  { handleQuestionAnswer }
)(Poll);
