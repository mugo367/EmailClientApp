Ext.define('EmailClient.view.main.Inbox', {
    extend: 'Ext.grid.Panel',
    xtype: 'inbox',

    requires: [
        'EmailClient.store.Inbox'
    ],

    store: {
        type: 'inbox'
    },

    layout: 'fit',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        mode: 'MULTI',
        type: 'checkboxmodel',
    },

    columns: [
        { text: 'From',  dataIndex: 'name' },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text:'<i class="fas fa-paperclip"></i>', dataIndex: 'attachment'},
        { xtype: 'datecolumn', text: 'Received', dataIndex: 'dateReceived', flex: 0.5},

    ],

    listeners: {
        select: 'onItemSelected'
    }
});