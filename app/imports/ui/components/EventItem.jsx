import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class EventItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.event.eventName}</Table.Cell>
        <Table.Cell>{this.props.event.location}</Table.Cell>
        <Table.Cell>{this.props.event.date}</Table.Cell>
        <Table.Cell>
          <Link to={`/editEvent/${this.props.event._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
EventItem.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(EventItem);
