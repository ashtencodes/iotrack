import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class EventItemAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.event.eventName}</Table.Cell>
        <Table.Cell>{this.props.event.location}</Table.Cell>
        <Table.Cell>{this.props.event.date}</Table.Cell>
        <Table.Cell>{this.props.event.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
EventItemAdmin.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.number,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default EventItemAdmin;
