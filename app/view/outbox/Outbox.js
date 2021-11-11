Ext.define('EmailClient.view.outbox.Outbox', {
    extend: 'Ext.grid.Panel',
    xtype: 'outbox',
    controller:'outboxviewcontroller',
    reference:'outboxReference',

    requires: [
        'EmailClient.store.Outbox'
    ],

    store: {
        type: 'outbox'
    },
    
    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        mode: 'SINGLE',
        type: 'checkboxmodel',
    },

    tbar:[
                
        {
            xtype: 'button',
            text : '<i class="fas fa-sync"></i>',
            scale: 'medium',
            handler:'onRefreshClick'
        },
        {
            xtype: 'button',
            text : '<i class="fas fa-trash"></i>',
            scale: 'medium',
            handler:'onDeleteClick',
            bind:{
                disabled:'{!outbox.selection}'
            },
        }, '->',
        {
            xtype: 'combo',
            width: '50%',
            store: {
                type: 'outbox',
                pageSize: 10
            },
            displayField: 'from',
            valueField: 'from',
            typeAhead: false,
            hideLabel: true,
            hideTrigger: true,
            anchor: '100%',

            listConfig: {
                loadingText: 'Searching...',
                emptyText: 'No matching posts found.',
    
                itemSelector: '.search-item',
    
                // Custom rendering template for each item
                itemTpl: [
                    '<p class="search-item"><b>To: </b> {to}</p>',
                    '<p><b>Title: </b> {title}</p>',
                    '<p><b>Message: </b><br> {body}</p>',
                    '<p style="text-align:right;"><b>Received at: </b> {date}</p>',
                    
                ]
            }
        
        },
    ],

    layout: 'fit',
    
    columns: [
        { 
            text: 'To',  
            dataIndex: 'to', 
            flex: 0.5 
        },
        { 
            text: 'Title', 
            dataIndex: 'title', 
            flex: 1 },
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

    plugins: {
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<p><b>To: </b> {to}</p>',
                '<p><b>Title: </b> {title}</p><br>',
                '<p><b>Message: </b><br> {body}</p>',
                '<p style="text-align:right;"><b>Received at: </b> {date}</p>',
                )
        }
    },

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Emails {0} - {1} of {2}',
        emptyMsg: 'No Email to display'
    },

    
}); 