/**
* Violation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {

    violationOwner: {
      model: 'citation'
    },

    violationNumber: {
      type: 'string',
      required: true,
      unique: true
    },

    violationDescription: {
      type: 'text',
      required: true
    },

    warrantStatus: {
      type: 'boolean',
      required: true
    },

    warrantNumber: {
      type: 'string'
    },

    status: {
      type: 'string',
      required: true
    },

    statusDate: {
      type: 'date',
      required: true
    },

    fineAmount: {
      type: 'float'
    },

    courtCost: {
      type: 'float'
    }

  }
};

