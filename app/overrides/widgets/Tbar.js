// define class
Ext.define('app.overrides.widgets.Tbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.Tbar',
    xtype: 'Tbar',
    // controller: 'tbarcontroller',
    
    items: [
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
            scale: 'medium',
            handler:'onRefreshClick'
        },
        {
            xtype: 'button',
            text : '<i class="fas fa-trash"></i>',
            scale: 'medium',
            handler:'onDeleteClick'
        },
    ],

});
