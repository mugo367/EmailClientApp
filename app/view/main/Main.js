
Ext.define('EmailClient.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    padding: '10px',
    controller: 'main',
    viewModel: 'main',
    layout: 'border',

    
    
    items: [
        {
            region: 'north',
            border: false,
            margin: '0 0 5 0',
            xtype: 'toolbar',
            items:[
                {
                    xtype: 'button',
                    text : '<i class="fas fa-edit"></i>  Compose',
                    scale: 'medium',
                    tooltip: 'Compose Mail',
                    handler:'onComposeClick'
                },
                
               '->',
               {
                   xtype: 'button',
                   text : '<i class="fas fa-cog"></i>',
                   
                   scale: 'medium'
               },
               
               {
                   xtype: 'button',
                   text : '<i class="fas fa-user-circle"></i>',
                   scale: 'medium'
               },
               {
                   xtype: 'button',
                   text : ' <i class="fas fa-sign-out-alt"></i> LogOut',
                   scale: 'medium',
                   handler:'onLogOutClick'
               }
           ],
        },
        {   
            padding: '5px',
            region: 'west',
            title:'Email Client', 
            collapsible: true,
            width: 200,
            items: [
                {
                    xtype: 'navigationpanel'
                }
            ]
        },
        {
            padding: '5px',
            region: 'center',
            itemId: 'center',
            xtype: 'tabpanel',
            closable: false,
            
            items: [
                {
                    title: 'Inbox',
                    xtype: 'inbox',
                    
                }, 
            ]
        }
    ]
});
