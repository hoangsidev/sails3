/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/




  // backend
  'GET /backend/dashboard': { action: 'backend/dashboard' },
  'GET /backend/words/page/:page': { action: 'backend/words/words' },
  // 'GET /backend/word/view/:id': { action: 'backend/words/view' },
  'GET /backend/word/create': { action: 'backend/words/create' },
  'POST /backend/word/insert': { action: 'backend/words/insert' },
  'GET /backend/word/edit/:id': { action: 'backend/words/edit' },
  'POST /backend/word/update': { action: 'backend/words/update' },
  'POST /backend/word/delete': { action: 'backend/words/delete' },

  'GET /backend/approvals/page/:page': { action: 'backend/approvals/approvals' },
  // 'GET /backend/approval/view/:id': { action: 'backend/approvals/view' },
  // 'GET /backend/approval/create': { action: 'backend/approvals/create' },
  // 'POST /backend/approval/insert': { action: 'backend/approvals/insert' },
  'GET /backend/approval/edit/:id': { action: 'backend/approvals/edit' },
  'POST /backend/approval/update': { action: 'backend/approvals/update' },
  'POST /backend/approval/delete': { action: 'backend/approvals/delete' },

  'GET /backend/': { action: 'backend/users/login' },
  'POST /backend/': { action: 'backend/users/login' },
  'GET /backend/logout': { action: 'backend/users/logout' },

  'GET /backend/users/page/:page': { action: 'backend/users/users' },
  // 'GET /backend/user/view/:id': { action: 'backend/users/view' },
  'GET /backend/user/create': { action: 'backend/users/create' },
  'POST /backend/user/insert': { action: 'backend/users/insert' },
  'GET /backend/user/edit/:id': { action: 'backend/users/edit' },
  'POST /backend/user/update': { action: 'backend/users/update' },
  'POST /backend/user/delete': { action: 'backend/users/delete' },

  'GET /backend/config': { action: 'backend/config' },
  'GET /backend/feedback': { action: 'backend/feedback' },
 
  // end backend


  // frontend
  'GET /':  { action: 'frontend/words/index' },
  'GET /search': { action: 'frontend/words/search' },
  'GET /signup': { action: 'frontend/users/signup' }
  // end frontend

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
