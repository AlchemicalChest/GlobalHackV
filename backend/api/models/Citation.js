/**
* Citation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {
    citationNumber: {
      type: 'string',
      required: true,
      unique: true
    },
    citationDate: {
      type: 'date',
      required: true
    },
    defendant: {
      model:'user'
    },
    court_date: {
      type: 'date'
    },
    court_location: {
      type: 'string'
    },
    court_address: {
      type: 'string'
    },
    violations: {
      collection: 'violation',
      via: 'violationOwner'
    }
  }
};

