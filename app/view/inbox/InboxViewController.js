Ext.define('EmailClient.view.email.InboxViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inboxviewcontroller',

    statics: {
        showForm: function(record) {
            var window = Ext.create({
                xtype: 'viewMail',
                viewModel:{
                    data:{
                        record: record
                    }
                }
            });
            console.log(record);
            if (record) {
                var form = window.lookupReference('viewMailForm').getForm();
                form.loadRecord(record);
            }

        }
    },
    

    onSelectionChange: function (grid, selection,eOpts,record) {
        var statics = this.statics();
        
        if (selection.isRows) {
            var selected = grid.getSelectionModel().getSelection();
        }

        if (selection.isCells) {
            console.log('========================');
            console.log(grid.getSelectionModel().getSelection());
            console.log('========================');
            statics.showForm(record);
        }
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

    onRefreshClick: function(){
        var me = this;
        var view = me.getView();
        var store = view.getStore();
        store.reload();
    },

});