import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Performances } from '../../api/stuff/Performance';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  athleteID: String,
  eventID: String,
  raceType: String,
  raceTime: Number,
  throwDistance: Number,
  jumpDistance: Number,
  jumpHeight: Number,
  ranking: Number,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddPerformance extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { athleteID, eventID, raceType, raceTime, throwDistance, jumpDistance, jumpHeight, ranking } = data;
    const owner = Meteor.user().username;
    Performances.collection.insert({ athleteID, eventID, raceType, raceTime, throwDistance, jumpDistance, jumpHeight, ranking, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Performance added successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Add Performance</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='athleteID'/>
              <TextField name='eventID'/>
              <TextField name='raceType'/>
              <NumField name='raceTime' decimal={false}/>
              <NumField name='throwDistance' decimal={true}/>
              <NumField name='jumpDistance' decimal={true}/>
              <NumField name='jumpHeight' decimal={true}/>
              <NumField name='ranking' decimal={false}/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AddPerformance;
