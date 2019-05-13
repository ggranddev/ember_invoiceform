import Component from '@ember/component';

export default Component.extend({
	store: Ember.inject.service(),
	init() {
		this._super(...arguments);
		this.set('error', []);
		console.log("add component init");
	},

	didReceiveAttrs() {
		console.log("did receive attr");
	},

	willRender() {
		console.log("will render");
	},

	didRender() {
		console.log("did render");
	},

	didInsertElement() {
		console.log("insert element");
	},

	actions: {
		addInvoice() {
			console.log("addd invoices", this.get('invoices'));
			
		}
	}
});
