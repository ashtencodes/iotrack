import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Athletes } from '../../api/stuff/Athlete';
import { Events } from '../../api/stuff/Event';
import { Performances } from '../../api/stuff/Performance';


// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise publish nothing.
Meteor.publish(Athletes.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Athletes.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Events.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Events.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Performances.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Performances.collection.find({ owner: username });
  }
  return this.ready();
});


// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Athletes.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Athletes.collection.find();
  }
  return this.ready();
});

Meteor.publish(Events.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Events.collection.find();
  }
  return this.ready();
});

Meteor.publish(Performances.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Performances.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
