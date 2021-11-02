Ext.define('EmailClient.store.Drafts', {

    extend:'Ext.data.Store',
    alias: 'store.emails',
 
    model: 'EmailClientApp.model.Draft',
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/drafts',
 
        reader: {
            type: 'json',
            rootProperty: 'emails'
        }
    },
    autoLoad: true,
});