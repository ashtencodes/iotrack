import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class PerformanceItemAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.performance.athleteID}</Table.Cell>
        <Table.Cell>{this.props.performance.eventID}</Table.Cell>
        <Table.Cell>{this.props.performance.raceType}</Table.Cell>
        <Table.Cell>{this.props.performance.raceTime}</Table.Cell>
        <Table.Cell>{this.props.performance.throwDistance}</Table.Cell>
        <Table.Cell>{this.props.performance.jumpDistance}</Table.Cell>
        <Table.Cell>{this.props.performance.jumpHeight}</Table.Cell>
        <Table.Cell>{this.props.performance.ranking}</Table.Cell>
        <Table.Cell>{this.props.performance.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
PerformanceItemAdmin.propTypes = {
  performance: PropTypes.shape({
    athleteID: PropTypes.string,
    eventID: PropTypes.string,
    raceType: PropTypes.string,
    raceTime: PropTypes.number,
    throwDistance: PropTypes.number,
    jumpDistance: PropTypes.number,
    jumpHeight: PropTypes.number,
    ranking: PropTypes.number,
    _ides: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default PerformanceItemAdmin;
