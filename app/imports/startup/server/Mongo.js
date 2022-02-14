import { Meteor } from 'meteor/meteor';
import { Athletes } from '../../api/stuff/Athlete.js';
import { Events } from '../../api/stuff/Event.js';
import { Performances } from '../../api/stuff/Performance.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Athletes.collection.insert(data);
  Events.collection.insert(data);
  Performances.collection.insert(data);
}

// Initialize the StuffsCollection if empty. commented out because basket error?
/*if (Athletes.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}*/
