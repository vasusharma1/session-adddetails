import Ember from 'ember';
export default Ember.Controller.extend({
  session: Ember.inject.service(),	
	actions:{
		savedetails(){
				var details=this.store.createRecord("details",{
				id: this.get('session.user.name'),
				name: this.get('session.user.name'),
				address: this.get('address'),
				interests: this.get('interests'),
				skills: this.get('skills')
			});
			details.save();
			this.set('id','');
			this.set('name','');
			this.set('address','');
			this.set('interests','');
			this.set('skills','');									
		},
	}
});
