Ext.define('EmailCientApp.model.User', {

   extend:'Ext.data.Model',

   fields: [
    {name: 'id',  type: 'int'},
    {name: 'email', type: 'string'},
    {name: 'username', type: 'string'},
    {name: 'password', type: 'string'}
    ],
});