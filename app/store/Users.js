Ext.define('EmailCientApp.store.Users', {

   extend:'Ext.data.Store',
   alias: 'store.users',

   model: 'EmailCientApp.model.User',
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