module.exports = {
  friendlyName: 'Logout',
  description: 'Logout users.',
  inputs: {
  },
  exits: {
    redirect: {
      responseType: 'redirect'
    }
  },
  fn: async function (inputs, exits) {
    // console.log(this.req.session.me);
    this.req.session.destroy(function(err) {  
      
        return exits.redirect(sails.config.custom.base_url_admin);
    });
  }
};
