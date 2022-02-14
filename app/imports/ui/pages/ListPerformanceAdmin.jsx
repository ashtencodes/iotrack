import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Performances } from '../../api/stuff/Performance';
import PerformanceItemAdmin from '../components/PerformanceItemAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListPerformanceAdmin extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center">List Performances (Admin)</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>AthleteID</Table.HeaderCell>
              <Table.HeaderCell>EventID</Table.HeaderCell>
              <Table.HeaderCell>Race Type</Table.HeaderCell>
              <Table.HeaderCell>Race Time</Table.HeaderCell>
              <Table.HeaderCell>Throw Distance</Table.HeaderCell>
              <Table.HeaderCell>Jump Distance</Table.HeaderCell>
              <Table.HeaderCell>Jump Height</Table.HeaderCell>
              <Table.HeaderCell>Place</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.performances.map((performance) => <PerformanceItemAdmin key={performance._id} performance={performance} />)}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ListPerformanceAdmin.propTypes = {
  performances: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Performances.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const performances = Performances.collection.find({}).fetch();
  return {
    performances,
    ready,
  };
})(ListPerformanceAdmin);
