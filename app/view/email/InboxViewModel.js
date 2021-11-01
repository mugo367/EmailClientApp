Ext.define('EmailClientApp.view.email.InboxViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.inboxviewmodel',

    stores: {
        Inbox: {
            model: 'Inbox',
            autoLoad: true,
            session: true
        }
    }
});