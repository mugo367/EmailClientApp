Ext.define('EmailClient.store.Inbox', {
    extend:'Ext.data.Store',
    alias: 'store.inbox',
 
    model: 'EmailClientApp.model.Inbox',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/inbox',
 
        reader: {
            type: 'json',
            rootProperty: 'inbox'
        }
    },
    autoLoad: true,
});
