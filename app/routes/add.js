import Route from '@ember/routing/route';

export default Route.extend({
	actions: {
		addInvoice() {
			console.log("action ok");
		}
	}
});
