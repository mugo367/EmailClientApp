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

        localStorage.removeItem('isLoggedIn');
        view.destroy();
        Ext.create({
            xtype: 'login'
        });

     },
});
