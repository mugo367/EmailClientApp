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
            if (record) {
                var form = window.lookupReference('form').getForm();
                form.loadRecord(record);
            }

        }
    },
    

    onSelectionChange: function (grid, selection,eOpts,record) {
        var statics = this.statics();
        
        if (selection.isRows) {
            console.log(grid.getSelectionModel().getSelection());
            console.log('---------selected rows---------');
        }

        if (selection.isCells) {
            Ext.create({
                xtype: 'composeMail'
            });
        }

        if (!selection) {
            console.log('---------Nothingness---------');
        }
    },

});