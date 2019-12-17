import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, observer } from '@ember/object';
import Table from 'ember-light-table';

export default Component.extend({
  router: service(),
  classNames: ['customers-table', 'table-responsive'],
  model: null,
  table: null,

  columns: computed(function() {
    return [
      {
        label: 'First Name',
        valuePath: 'firstName',
        sortable: false
      },
      {
        label: 'Last Name',
        valuePath: 'lastName',
        sortable: false
      },
      {
        label: 'Email',
        valuePath: 'emailAddress',
        width: '250px',
        sortable: false,
        breakpoints: ['tablet', 'desktop', 'jumbo']
      },
      {
        label: 'Company',
        valuePath: 'company',
        sortable: false,
        breakpoints: ['desktop', 'jumbo']
      },
      {
        label: 'Project',
        valuePath: 'project',
        sortable: false,
        breakpoints: ['desktop', 'jumbo']
      },
      {
        label: 'Budget',
        valuePath: 'budget',
        sortable: false,
        breakpoints: ['jumbo']
      }
    ]
  }),

  // eslint-disable-next-line ember/no-observers
  onModelChange: observer('model', function() {
    if(this.table) {
      this.table.setRowsSynced(this.model);
    }
  }),

  init() {
    this._super(...arguments);
    let table = new Table(this.columns, this.model, {enableSync: true});
    this.set('table', table);
  },

  actions: {
    onRowClick(row) {
      this.router.transitionTo('customers.customer', row.get('id'));
    }
  }
});
