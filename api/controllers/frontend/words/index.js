module.exports = {


  friendlyName: 'Index',


  description: 'Index words.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'frontend/index'
    },
  },


  fn: async function (inputs, exits) {

      var result = {
          data_words_json: "Hello1",
          page_title: "Hello2",
          page_slug: "Hello3"
      }

      console.log(result)

      return exits.success(result)


  }


};
