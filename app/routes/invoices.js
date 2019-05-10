import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

	model() {
		return {
			invoices: [{
		      	id: 'invoice #1',
		      	amount: 123.11,
		      	date: '2019-02-02',
		      	from: 'John',
	  		},
	  		{
		      	id: 'invoice #2',
		      	amount: 123.11,
		      	date: '2019-02-02',
		      	from: 'John',
	  		},
	  		{
		      	id: 'invoice #3',
		      	amount: 123.11,
		      	date: '2019-02-02',
		      	from: 'John',
	  		}]
	  	}
  	}
});


