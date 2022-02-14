import { Meteor } from 'meteor/meteor';
import { Athletes } from '../../api/stuff/Athlete.js';
import { Events } from '../../api/stuff/Event.js';
import { Performances } from '../../api/stuff/Performance.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.

// Initialize the StuffsCollection if empty. commented out because basket error?
if (Athletes.collection.find().count() === 0) {
  if (Meteor.settings.defaultAthleteData) {
    console.log('Creating default data.');
    Meteor.settings.defaultAthleteData.map(data => Athletes.collection.insert(data));
  }
}
