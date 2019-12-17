# Gavant Ember.js Code Challenge

Build a basic CRM that tracks prospective customers and their available project budget. The application uses the Robust UI Kit Bootstrap theme (https://robust.bootlab.io).
 
## Code Challenge Instructions

> The customer list view needs to show first name, last name, email, phone, company, project and budget. The list is sorted by the customer's full name (ascending) by default. The user can click on a row to edit the item it a detail view.
> 
> The customer detail view is used to edit a customer record. All fields are required. Additionally, the email address and budget must be valid formats. When the user hits save, he’s brought back to the customer list view and the record reflects the updates.

### Tasks
1. Verify that the views provided meet the above specification. Make any adjustments that are needed.
2. Add an option to sort by customer budget (descending).
3. Add a search box to the customer list. This keyword search will match customers by name, company and/or project.
4. Add a new “Dashboard” menu item that navigates the user to a new dashboard view. The dashboard view needs to show the following widgets of information:  
    1. Total count of customers and total sum of customer budget
    2. List of top 5 prospects (sorted highest budget descending)
    3. Bonus: Whatever else you think is helpful at a glance on such a summary view

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* Extract the contents of this directory into an empty folder/repository
* Open a terminal/command prompt and change into the directory above
* Run `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Configuring the REST API

This application makes network requests to several API endpoints provided by Gavant, in order to fetch and save data. You must configure the base host URL for these endpoints by editing the following line in the application's `config/environment.js` file:

```
API_BASE_URL: 'https://xadsfmudcl.execute-api.us-east-1.amazonaws.com/prod/{your-name-here}'
```
Replacing `{your-name-here}` with your full name, separated by dashes (e.g. "john-smith").

## Addons and Libraries Used

This application uses several third-party libraries (called "addons" in the Ember.js ecosystem) to implement its functionality. The specific versions of the dependencies being used can be found in this app's package.json file. You can learn more about their usage and APIs by visiting their documentation and repositories below:

* Ember Light Table - https://github.com/offirgolan/ember-light-table
* Bootstrap 4 - https://github.com/twbs/bootstrap
* ember-cli-sass - https://github.com/aexmachina/ember-cli-sass
* ember-truth-helpers - https://github.com/jmurphyau/ember-truth-helpers

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js guides](https://guides.emberjs.com/v3.10.0/)
* [ember.js api docs](https://api.emberjs.com/ember/3.10)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
