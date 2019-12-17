import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  serialize(snapshot, options) {
    if(!options) {
      options = {};
    }

    //include the record ID in the request body for PUTs, ect
    options.includeId = true;
    return this._super(snapshot, options);
  }
});
