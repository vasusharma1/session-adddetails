import Ember from 'ember';
import PouchDB from 'pouchdb';

export default Ember.Service.extend({
  init() {
    this._super(...arguments);
    let remoteDb = new PouchDB("http://localhost:5984/details", {skipSetup: true});    
    this.db = remoteDb;
  },

  register(username, password) {
    return this.db.signup(username, password);
  },

  getUser(username) {
    return this.db.getUser(username);
  }
});
