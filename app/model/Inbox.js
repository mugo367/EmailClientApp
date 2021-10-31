Ext.define('EmailClientApp.model.Inbox', {

    extend:'Ext.data.Model',
 
    fields: [
        {
            name: 'name', 
            type: 'string'
        },
        {
            name: 'email', 
            type: 'string'
        },
        {
            name: 'title', 
            type: 'string'
        },
        {
            name: 'body', 
            type: 'string'
        },
        {
            name: 'attachment', 
            type: 'boolean'
        },
        {
            name: 'dateReceived', 
            type: 'date'
        },
     ],
 });