Ext.define('EmailClient.view.composer.EmailForm', {
    extend:'Ext.window.Window',
    xtype:'composeMail',
    layout:'fit',
    controller: 'emailformcontroller',
    
    width:1000,
    padding: '30 10 10 10',
    shadow:true,
    modal:true,
    autoShow:true,
    title:'Compose Email',
    items:[
        {
            xtype : 'form',
            reference:'composeMailForm',
            jsonSubmit: true,
            defaults:{
                anchor:'100%',
                allowBlank: false,
            },
            items:[
                {
                    xtype:'textfield',
                    name: 'id',
                    hidden:true,
                    allowBlank: true,
                    readOnly: true,
                    minValue: 1

                },
                {
                  xtype:'textfield',
                  name: 'to',
                  fieldLabel: 'To',
                  vtype: 'email',
            
                },
                {
                    xtype:'textfield',
                    name: 'title',
                    fieldLabel: 'Subject',
  
                },
                {
                    xtype: 'htmleditor',
                    name: 'body',
                    fieldLabel: 'Message',
                    height: 350,
                },

                // {
                //     xtype: 'filefield',
                //     emptyText: 'Select file',
                //     fieldLabel: 'Attachment',
                //     name: 'attachment',
                //     required: false,
                //     buttonText: 'select',
                //     buttonConfig: {
                //         iconCls: 'fa-paperclip'
                //     }

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
                    formBind: true,
                    handler:'onSave'
                }
        ]
        }
    
    ]

});