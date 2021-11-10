/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('EmailClient.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onComposeClick: function(){
        var me = this;
         me.showForm();
    },
     showForm: function(record) {
        var window = Ext.create({
            xtype: 'composeMail',
        });
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

     onRefreshClick: function(){
        var me = this;
        var view = me.getView().lookupReference('inboxReference');
        var store = view.getStore();
        store.reload();
    },

    onDeleteClick: function(){
        var me = this;
        var view = me.getView().lookupReference('inboxReference');
        var store = view.getStore();
        var selection = view.getSelectionModel().getSelection();
        var id = selection[0].get('id');
        var url = `http://localhost:3000/inbox/${id}`
        Ext.Ajax.request({
            url: url,
            method: 'DELETE',
            success: function(response){
                store.reload();
            },
            failure: function(response){
                Ext.alert('Error', 'Error deleting message');
            }
        });
    }
});
