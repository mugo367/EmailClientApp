Ext.define('EmailClientApp.model.Draft', {

    extend:'Ext.data.Model',
 
    fields: [

     {name: 'id',  type: 'int'},
     {name: 'to', type: 'string'},
     {name: 'title', type: 'string'},
     {name: 'body', type: 'string'},
     {name: 'date', type: 'date'},
     {name: 'attachment', type: 'string'},
     
     ],
 });