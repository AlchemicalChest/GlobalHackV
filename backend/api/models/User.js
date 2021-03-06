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
    citations: {
      collection: 'citation',
      via: 'defendant'
    },
    credit: {
      type: 'float',
      defaultsTo: 0
    },
    volunteerWorks: {
      collection: 'communityService',
      via: 'participant'
    },
    supervisedCommunityServices: {
      collection: 'communityService',
      via: 'supervisor'
    },
    email: {
      type: 'email',
      unique: true
    },
    encryptedPassword: {
      type: 'string',
    }
  },

  beforeCreate: function (values, next) {
    if (!values.password) {
      console.log('Something wrong!');
      return next({err: ['Password doesn\'t match password confirmation.']});
    }

    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
      if (err) return next(err);
      values.encryptedPassword = encryptedPassword;
      next();
    });
  }

};

