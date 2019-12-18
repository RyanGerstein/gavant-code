import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  sortProperty: 'name',
  sortOptions: null,

  init: function() {
    this.sortOptions = {
      'name': ['lastName', 'firstName'],
      'budget': ['budget:desc']
    };
  },

  customersSortProps: computed('sortProperty', function() {
    return this.sortOptions[this.sortProperty];
  }),

  sortedCustomers: sort('model', 'customersSortProps')
});
