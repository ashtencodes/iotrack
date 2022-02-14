import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class PerformanceItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.performance.athleteID}</Table.Cell>
        <Table.Cell>{this.props.performance.eventID}</Table.Cell>
        <Table.Cell>{this.props.performance.raceType}</Table.Cell>
        <Table.Cell>{this.props.performance.raceTime}</Table.Cell>
        <Table.Cell>{this.props.performance.splitsArray}</Table.Cell>
        <Table.Cell>{this.props.performance.throwDistance}</Table.Cell>
        <Table.Cell>{this.props.performance.jumpDistance}</Table.Cell>
        <Table.Cell>{this.props.performance.jumpHeight}</Table.Cell>
        <Table.Cell>{this.props.performance.ranking}</Table.Cell>
        <Table.Cell>
          <Link to={`/editPerformance/${this.props.performance._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
PerformanceItem.propTypes = {
  performance: PropTypes.shape({
    athleteID: PropTypes.string,
    eventID: PropTypes.string,
    raceType: PropTypes.number,
    raceTime: PropTypes.number,
    splitsArray: PropTypes.array,
    throwDistance: PropTypes.number,
    jumpDistance: PropTypes.number,
    jumpHeight: PropTypes.number,
    ranking: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(PerformanceItem);
