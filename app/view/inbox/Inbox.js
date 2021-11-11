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

    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        mode: 'SINGLE',
        type: 'checkboxmodel',
    },

    layout: 'fit',
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
                disabled:'{!inbox.selection}'
            },
        }, '->',
        {
            xtype: 'combo',
            width: '50%',
            store: {
                type: 'inbox',
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
                    '<p class="search-item"><b>From: </b> {from}</p>',
                    '<p><b>Title: </b> {title}</p>',
                    '<p><b>Message: </b><br> {body}</p>',
                    '<p style="text-align:right;"><b>Received at: </b> {date}</p>',
                    
                ]
            }
        
        },
    ],


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

    plugins: {
        rowexpander: {
            rowBodyTpl: new Ext.XTemplate(
                '<p><b>From: </b> {from}</p>',
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