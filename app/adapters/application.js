import RESTAdapter from 'ember-data/adapters/rest';
import ENV from 'ember-code-challenge/config/environment';

export default RESTAdapter.extend({
    host: ENV.API_BASE_URL
});
