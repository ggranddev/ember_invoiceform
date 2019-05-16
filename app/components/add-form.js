import Component from '@ember/component';
import { A } from "@ember/array";

export default Component.extend({
	store: Ember.inject.service(),
	item_id: 'string',
	invoices: [],

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
			console.log("get input value", this.get('item_id'), this.get('item_amount'));
			let invoices_data = this.get('invoices');

			invoices_data.push(
				{
					id: this.get('item_id'),
					amount: this.get('item_amount'), 
					date: this.get('item_date'), 
					from: this.get('item_from')
				}
			);
			this.set('invoices', invoices_data);
		}
	}
});
