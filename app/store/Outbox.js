Ext.define('EmailClient.store.Outbox', {

    extend:'Ext.data.Store',
    alias: 'store.outbox',
 
    model: 'EmailClientApp.model.Outbox',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/outbox',
 
        reader: {
            type: 'json',
            rootProperty: 'outbox'
        }
    },
    autoLoad: true,
});