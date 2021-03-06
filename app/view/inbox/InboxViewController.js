Ext.define('EmailClient.view.email.InboxViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inboxviewcontroller',

    
    mixins: [
        'EmailClient.mixins.GridMixin',
    ],
    init: function() {
        this.loadGridStore();
    },

    onRefreshClick: function(){
        this.loadGridStore();
    },

    onDeleteClick: function(){

        var me = this,
        grid = me.getView(),
        record = me.getSelectedRecord();
        var id = record.get('id');
        if (record) {
            var url = `http://localhost:3000/inbox/${id}`;
            me.removeSelectedRecord(url, grid);
        }
    }
});