Ext.define('EmailClient.view.main.Inbox', {
    extend: 'Ext.grid.Panel',
    xtype: 'inbox',
    controller:'inboxviewcontroller',

    requires: [
        'EmailClient.store.Inbox'
    ],

    store: {
        type: 'inbox'
    },

    layout: 'fit',

    selModel: {
        type: 'spreadsheet',
        rowSelect: true,
        rowNumbererHeaderWidth: 0,
        mode: 'MULTI',
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: false,
    },

    listeners: {
        selectionchange: 'onSelectionChange',
    },

    columns: [
        { text: 'From',  dataIndex: 'from' },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text:'<i class="fas fa-paperclip"></i>', dataIndex: 'attachment'},
        { xtype: 'datecolumn', text: 'Received', dataIndex: 'date', flex: 0.5},

    ],

    // bbar: 
    // {
    //     xtype: 'paginginfo',
    //     displayInfo: true,
    //     displayMsg: 'Emails {0} - {1} of {2}',
    //     emptyMsg: 'No Email to display'
    // }
});