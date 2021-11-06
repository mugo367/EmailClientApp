Ext.define('EmailClient.view.viewer.EmailViewForm', {
    extend:'Ext.form.Panel',
    xtype:'viewMail',
    padding: '10 10 10 10',

    layout: 'anchor',
    defaults: {anchor: '100%'},

    items:[
    
        {
            xtype:'textarea',
            name: 'body',
            editable: false,
            height:200
        },
        
        {
            xtype     : 'htmleditor',
            name      : 'reply',
            fieldLabel: 'Reply',
            height: 350,
        },

        {
            xtype: 'filefield',
            emptyText: 'Select file',
            fieldLabel: 'Attachment',
            name: 'file-path',
            buttonText: 'select',
            buttonConfig: {
                iconCls: 'fa-paperclip'
            }
        }

    ],
    buttons:[
        {
            xtype:'button',
            text:'Reset',
            handler:'onReset'
        },
        {
            xtype:'button',
            text:'Save',
            handler:'onSave'
        }
    ]
    
});