/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    dateOfBirth: {
      type: 'date',
      required: true
    },
    drivingLicenseNumber: {
      type: 'string',
      unique: true
    },
    address: {
      type: 'string',
    },
    city: {
      type: 'string',
    },
    state: {
      type: 'string',
    },
    admin: {
      type: 'boolean',
      defaultsTo: false
    },
    citations:{
      collection: 'citation',
      via: 'defendant'
    }
  }
};
