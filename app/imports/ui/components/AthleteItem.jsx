import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class AthleteItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.athlete.name}</Table.Cell>
        <Table.Cell>{this.props.athlete.grade}</Table.Cell>
        <Table.Cell>{this.props.athlete.gender}</Table.Cell>
        <Table.Cell>
          <Link to={`/editAthlete/${this.props.athlete._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
AthleteItem.propTypes = {
  athlete: PropTypes.shape({
    name: PropTypes.string,
    grade: PropTypes.number,
    gender: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(AthleteItem);
