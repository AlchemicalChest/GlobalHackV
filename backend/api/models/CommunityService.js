/**
* CommunityService.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {
    communityServiceNumber: {
      type: 'string',
      required: true
    },
    description: {
      type: 'text',
    },
    supervisor: {
      model: 'user'
    },
    credit: {
      type: 'float'
    },
    startedAt: {
      type: 'datetime'
    },
    endedAt: {
      type: 'datetime'
    },
    status: {
      type: 'string'
    },
    participant: {
      model: 'user'
    }
  }
};

