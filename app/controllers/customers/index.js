import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  sortProperty: 'lastName',

  customersSortProps: computed('sortProperty', function() {
    return [this.sortProperty];
  }),

  sortedCustomers: sort('model', 'customersSortProps')
});
