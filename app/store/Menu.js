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
                url:'inbox',
                xtype: 'inbox'

            },
            {
                text: 'Outbox',
                leaf: true,
                iconCls: 'fa-check-circle',
                url:'outbox',
                xtype: 'outbox'
            },
            
            {
                text: 'Spam',
                leaf: true,
                url:'spam',
                iconCls: 'fa-exclamation',
                xtype: 'spam'
            },
            
        ]
    }

});