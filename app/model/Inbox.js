Ext.define('EmailClientApp.model.Inbox', {

    extend:'Ext.data.Model',
 
    fields: [

        {name: 'id',  type: 'int'},
        {name: 'from', type: 'string'},
        {name: 'title', type: 'string'},
        {name: 'body', type: 'string'},
        {name: 'date', type: 'date'},
        {name: 'attachment', type: 'string'},
   
        ],
    
 });