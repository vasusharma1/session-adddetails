import { Adapter } from 'ember-pouch';
import PouchDB from 'pouchdb';
PouchDB.debug.enable('*');

var remote = new PouchDB('http://localhost:5984/details');
var db = new PouchDB('local_pouch');

db.sync(remote, {
   live: true,  
   retry: true   
});
export default Adapter.extend({
db: db
});
