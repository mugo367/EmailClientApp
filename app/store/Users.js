Ext.define('EmailClientApp.store.Users', {

   extend:'Ext.data.Store',
   alias: 'store.users',

   model: 'EmailClientApp.model.User',
   proxy: {
       type: 'rest',
       url: 'http://localhost:3000/users',

       reader: {
           type: 'json',
           rootProperty: 'users'
       }
   },
   autoLoad: true,
   

});