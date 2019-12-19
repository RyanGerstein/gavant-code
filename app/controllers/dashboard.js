import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { filter, sort } from '@ember/object/computed';

export default Controller.extend({
  maxLeaderBoard: 5,
  mostImportantCustomerSort: null,
  init: function() {

    this._super(...arguments);
    this.mostImportantCustomerSort = ['budget:desc', 'lastName', 'firstName'];
  },

  customerCount: computed('model', function() {
    return this.model.length;
  }),

  customerTotalIncome: computed('model', function() {
    let totalBudget = 0;
    this.model.forEach(function(customer) { totalBudget += customer.budget; });
    return totalBudget;
  }),

  budgetSortCustomers: sort('model', 'mostImportantCustomerSort'),

  topCustomers: filter('budgetSortCustomers', function(item, idx) { return idx < 5;}),

  retiredAccounts: filter('budgetSortCustomers', function(item) { return item.budget == 0 || item.project.toLowerCase() == "retired"; }),

  companyAccountData: computed('model.@each.budget', 'model.@each.company', function() {
    let data = {};
    let companies = [];
    this.model.forEach(function(item){
      if(!data[item.company]) {
        data[item.company] = {name: item.company, employees: 0, totalBudget: 0};
      }
      data[item.company].employees++;
      data[item.company].totalBudget += item.budget;
    });
    for(let companyName in data)
    {
      companies[companies.length] = data[companyName];
    }
    companies.sort(function(a, b) { return a.totalBudget > b.totalBudget ? -1 : a.totalBudget < b.totalBudget ? 1 : (a.companyName < b.companyName ? 1 : -1)});
    return companies;
  }),

  
});
