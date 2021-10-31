Ext.define('Learning.view.email.EmailForm', {
    extend:'Ext.window.Window',
    xtype:'composeMail',
    layout:'fit',
    
    width:1020,
    padding: '40 10 10 10',
    shadow:true,
    modal:true,
    autoShow:true,
    title:'Compose Email',
    items:[
        {
            xtype : 'form',
            reference:'form',
            jsonSubmit: true,
            defaults:{
                anchor:'100%',
                allowBlank: false,
            },
            items:[
                {
                  xtype:'textfield',
                  name: 'recipient',
                  fieldLabel: 'To',
            
                },
                {
                    xtype:'textfield',
                    name: 'title',
                    fieldLabel: 'Subject',
  
                },
                {
                    xtype     : 'htmleditor',
                    name      : 'body',
                    fieldLabel: 'Message',
                    height: 250,
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
        }
    
    ]

});