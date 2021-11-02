Ext.define('EmailClientApp.model.Outbox', {

    extend:'Ext.data.Model',
 
    fields: [

     {name: 'id',  type: 'int'},
     {name: 'to', type: 'string'},
     {name: 'title', type: 'string'},
     {name: 'body', type: 'string'},
     {name: 'date', type: 'date'},

     ],
 });