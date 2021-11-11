Ext.define('EmailClient.view.email.OutboxViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.outboxviewcontroller',


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
            var url = `http://localhost:3000/outbox/${id}`;
            me.removeSelectedRecord(url, grid);
        }
    }
});