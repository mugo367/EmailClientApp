// define class
Ext.define('app.overrides.widgets.TbarController', {

    extends: 'Ext.app.ViewController',
    alias: 'controller.tbarcontroller',

    onComposeClick: function(){
        var me = this;
        me.showForm();
    },

    showForm: function(record) {
        var window = Ext.create({
            xtype: 'composeMail',
        });
    },

    // onRefreshClick: function(){
    //     var me = this;
    //     var view = me.getView();
    //     var store = view.getStore();
    //     store.reload();
    // },

    // onDeleteClick: function(){}

});    

