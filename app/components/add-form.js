import Component from '@ember/component';

export default Component.extend({
	store: Ember.inject.service(),
	actions: {
		addInvoice() {
			console.log("addd invoices", this.get('invoices'));
		}
	}
});
