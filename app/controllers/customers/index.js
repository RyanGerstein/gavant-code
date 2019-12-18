import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  sortProperty: 'name',
  sortOptions: null,
  // filter fields are the fields the filter will check.
  filterFields: null,
  filterProperty: null,

  init: function() {
    this.sortOptions = {
      'name': ['lastName', 'firstName'],
      'budget': ['budget:desc', 'lastName', 'firstName']
    };
    this.filterFields = ['lastName', 'firstName'];
  },

  customersSortProps: computed('sortOptions', 'sortProperty', function() {
    return this.sortOptions[this.sortProperty];
  }),

  filteredModel: computed('model', 'filterFields', 'filterProperty', function () {
    if (this.filterProperty && this.filterFields)
    {
      let self = this;
      return this.model.filter(function(item) { 
        for( let i = 0; i < self.filterFields.length; i++)
        {
          if(item[self.filterFields[i]] && item[self.filterFields[i]].toLowerCase().includes(self.filterProperty.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }
    return this.model;
  }),

  sortedCustomers: sort('filteredModel', 'customersSortProps')
});
