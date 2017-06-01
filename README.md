# blog

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd blog`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Planning
*1. Create static pages
  * About
    * Content
    * Link to Contact and Index
  * Contact
    * Content
    * Link to About and Index
*2. Create dynamic pages
  * Index
    * Static content
    * Create model
    * Component with Form to add thoughts and info
      * Tie component to model
    * Component to display entries
      * Tie component to mode
    * Link to About and Contacts.
*3. Create individual entry view
  * Create "entry" route
  * Configure entry route to use ID
  * Insert links with ids into the Index view
  * CRUD
   * Component to update entries
      * Tie component to model
    * button class="btn btn-success"to delete
      * Tie button class="btn btn-success"to model
*4. Replace links with Navbar
*5. Styling
*6. Add tags with a many-to-many relationship. 


### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
