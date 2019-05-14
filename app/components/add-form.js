import Component from '@ember/component';
import { A } from "@ember/array";

export default Component.extend({
	store: Ember.inject.service(),
	item_id: 'string',

	init() {
		this._super(...arguments);
		this.set('error', A([]));
		console.log("add component init");
	},

	didUpdateAttrs() {
		console.log("component did update attribute");
		this._super(...arguments);
		this.set('errors', A([]));
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
			// console.log("addd invoices", this.get('invoices'));
			console.log("get input value", this.get('item_id'));
			this.set('invoices', [{id: '123', name: 'abc'},{id: '124', name: 'abcd'}])
		}
	}
});
