Ext.define('EmailClient.view.email.InboxViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inboxviewcontroller',

    
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
     },
    

    onItemSelected: function (sender, record) {
        var me = this;
        
        me.showForm(record);
        
    },
    
});