Ext.define('EmailClient.view.main.Inbox', {
    extend: 'Ext.grid.Panel',
    xtype: 'inbox',
    controller:'inboxviewcontroller',
    reference:'inboxReference',

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

    // tbar:[
    //     {
    //         xtype: 'button',
    //         text : '<i class="fas fa-edit"></i>  Compose',
    //         scale: 'medium',
    //         tooltip: 'Compose Mail',
    //         handler:'onComposeClick'
    //     },
    //     {
    //         xtype: 'button',
    //         text : '<i class="fas fa-sync"></i>',
    //         scale: 'medium',
    //         handler:'onRefreshClick'
    //     },
    //     {
    //         xtype: 'button',
    //         text : '<i class="fas fa-trash"></i>',
    //         scale: 'medium',
    //         handler:'onDeleteClick'
    //     },
    
    // ],

    // dockedItems: [
    //     {
    //         xtype: 'Tbar',
    //         dock: 'top',
    //     }]
    
});