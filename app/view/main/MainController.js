/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('EmailClient.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

   

    routes: {
        'inbox': 'onInboxUrlActivated',
        'outbox': 'onOutboxUrlActivated',
        'spam': 'onSpamUrlActivated',
    },


    init: function() {
        var me = this,
            viewport = me.getView(),
            center = viewport.lookupReference('center');
    },

    onComposeClick: function(){
        var me = this;
         me.showForm();
    },
     showForm: function(record) {
        var window = Ext.create({
            xtype: 'composeMail',
        });
    },
    onInboxUrlActivated: function() {
        this.showView("Inbox", "inbox");
    },

    onOutboxUrlActivated: function() {
        this.showView("Outbox", "outbox");
    },

    onSpamUrlActivated: function() {
        this.showView("Spam", "spam");
    },


    showView: function(title, xtype) {
        var centerPanel = Ext.ComponentQuery.query('app-main #center')[0];
        
        var newItem = centerPanel.items.findBy(function(item, index) {
            return title === item.title;
        });

       
        if (newItem === null || newItem === undefined) {
            var tab = centerPanel.getActiveTab();
            if (tab === undefined){
                newItem = centerPanel.add({
                    xtype: xtype,
                    title: title,
                    closable: true,
                });
            }else{
                centerPanel.doRemove(tab);
                newItem = centerPanel.add({
                    xtype: xtype,
                    title: title,
                    closable: true,
                });
            }
        }
        centerPanel.setActiveItem(newItem);
    },


    onLogOutClick: function(){
        var me = this,
            view = me.getView(),
            model = me.getViewModel(),
            refs = me.getReferences();

        localStorage.setItem('isLoggedIn', false);
        view.destroy();
        Ext.create({
            xtype: 'login'
        });

    },

     
});
