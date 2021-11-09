Ext.define('EmailClient.store.Menu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menu',
    storeId: 'menu',

    root: {
        expanded: true,
        
        children: [
            {
                text: 'Inbox',
                leaf: true,
                iconCls: 'fa-inbox',
                xtype: 'inbox'

            },
            {
                text: 'Outbox',
                leaf: true,
                iconCls: 'fa-check-circle',
                xtype: 'outbox'
            },
            
            {
                text: 'Spam',
                leaf: true,
                iconCls: 'fa-exclamation',
            },
            {
                text:'Delete',
                leaf: true,
    
                iconCls: 'fa-trash',
            }
            
            
        ]
    }

});