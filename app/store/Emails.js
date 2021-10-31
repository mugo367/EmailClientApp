Ext.define('EmailClientApp.store.Emails', {

    extend:'Ext.data.Store',
    alias: 'store.emails',
 
    model: 'EmailCientApp.model.Email',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/emails',
 
        reader: {
            type: 'json',
            rootProperty: 'emails'
        }
    },
    autoLoad: true,
});