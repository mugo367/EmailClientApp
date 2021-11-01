/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('EmailClient.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    padding: '10px',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'EmailClient.view.main.MainController',
        'EmailClient.view.main.MainModel',

        'EmailClient.view.main.PersonnelList'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 0,
    titleRotation: 0,
    tabRotation: 0,
     tbar:[
         {
             xtype: 'button',
             text : '<i class="fas fa-edit"></i>  Compose',
             scale: 'medium',
             tooltip: 'Compose Mail',
             handler:'onComposeClick'
        },
        {
            xtype: 'button',
            text : '<i class="fas fa-sync"></i>',
            scale: 'medium'
       },
       {
            xtype: 'button',
            text : '<i class="fas fa-trash"></i>',
            scale: 'medium'
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
        }
        

    ],

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'center',
                    textAlign: 'center'
                },
                tall: {
                    iconAlign: 'center',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Inbox',
        iconCls: 'fa-inbox',
        items: [{
            xtype: 'inbox'
        }]
    }, {
        title: 'Sent Mail',
        iconCls: 'fa-check-circle',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Spam',
        iconCls: 'fa-exclamation',
        bind: {
            html: '{loremIpsum}'
        }
    }, 
    {
        title: 'Delete',
        iconCls: 'fa-trash',
        bind: {
            html: '{loremIpsum}'
        }
    }
]
});
