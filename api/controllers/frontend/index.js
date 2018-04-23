module.exports = {


  friendlyName: 'Index',


  description: 'Index frontend.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'frontend/index'
    },
    redirect: {
      responseType: 'redirect'
    },
    notFound: {
      responseType: 'notFound'
    }
  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
