import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
class AthleteItemAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.athlete.name}</Table.Cell>
        <Table.Cell>{this.props.athlete.quantity}</Table.Cell>
        <Table.Cell>{this.props.athlete.condition}</Table.Cell>
        <Table.Cell>{this.props.athlete.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
AthleteItemAdmin.propTypes = {
  athlete: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default AthleteItemAdmin;
