Ext.define('EmailClient.view.outbox.Outbox', {
    extend: 'Ext.grid.Panel',
    xtype: 'outbox',

    requires: [
        'EmailClient.store.Outbox'
    ],

    store: {
        type: 'outbox'
    },

    layout: 'fit',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        mode: 'MULTI',
        type: 'checkboxmodel',
    },

    columns: [
        { text: 'To',  dataIndex: 'to' },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text:'<i class="fas fa-paperclip"></i>', dataIndex: 'attachment'},
        { xtype: 'datecolumn', text: 'Received', dataIndex: 'dateReceived', flex: 0.5},

    ],

    plugins: {
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<p><b>To: </b> {to}</p>',
                '<p><b>Title: </b> {title}</p><br>',
                '<p><b>Message: </b><br> {body}</p>',
                )
        }
    },

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Emails {0} - {1} of {2}',
        emptyMsg: 'No Email to display'
    },

    listeners: {
        select: 'onItemSelected'
    }
}); 