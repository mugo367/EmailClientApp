Ext.define('EmailClient.store.Outbox', {

    extend:'Ext.data.Store',
    alias: 'store.emails',
 
    model: 'EmailClientApp.model.Outbox',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/outbox',
 
        reader: {
            type: 'json',
            rootProperty: 'emails'
        }
    },
    autoLoad: true,
});