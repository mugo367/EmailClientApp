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


    columns: [
        { 
            text: 'From',  
            dataIndex: 'from', 
            flex: 0.5 
        },
        { 
            text: 'Title', 
            dataIndex: 'title', 
            flex: 1 
        },
        { 
            text:'<i class="fas fa-paperclip"></i>', 
            dataIndex: 'attachment'
        },
        { 
            xtype: 'datecolumn', 
            text: 'Received', 
            dataIndex: 'date', 
            flex: 0.5
        },

    ],
    
});