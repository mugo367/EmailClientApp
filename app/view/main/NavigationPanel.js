Ext.define('EmailClient.view.main.NavigationPanel', {
    extend: 'Ext.tree.Panel',
    xtype: 'navigationpanel',
    controller: 'navigationpanelcontroller',
    rootVisible: false,

   
    padding: '5px',
    

    store: {
        type: 'menu'
    },

    
    
    listeners: {
        itemclick: 'onItemClick',
    }

});