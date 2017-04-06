import DS from 'ember-data';
import Model from 'ember-pouch/model';
export default Model.extend({
  name: DS.attr(),
  address: DS.attr(),
  interests: DS.attr(),
  skills: DS.attr(),  
  rev:  DS.attr()
});
