Ext.define('EmailClient.view.viewer.EmailViewForm', {
    extend:'Ext.window.Window',
    xtype:'viewMail',
    layout:'fit',
    
    width:820,
    padding: '20 10 10 10',
    shadow:true,
    modal:true,
    autoShow:true,
    items:[
        {
            xtype : 'form',
            reference:'viewMailForm',
            jsonSubmit: true,
            defaults:{
                anchor:'95%',
                allowBlank: false,
            },

            
            items:[{

                    xtype:'fieldset',
                    // collapsible: true,
                    columnWidth:0.8,
                    defaults: {anchor: '100%'},
                    layout: 'anchor',
                    items :[{
                        xtype:'textfield',
                        reference: 'email',
                        fieldLabel: 'From',
                        name:'email',
                        editable: false,
                       
                      },
                      {
                          xtype:'textfield',
                          name: 'title',
                          fieldLabel: 'Title',
                          editable: false,
                      },
                      {
                          xtype:'textarea',
                          fieldLabel: 'Body',
                          name: 'body',
                          editable: false,

                      }
                    ]
                },
                
                
                {
                    xtype     : 'htmleditor',
                    name      : 'reply',
                    fieldLabel: 'Message',
                    height: 150,
                },

                // {
                //     xtype: 'filefield',
                //     emptyText: 'Select file',
                //     fieldLabel: 'Attachment',
                //     name: 'file-path',
                //     buttonText: 'select',
                //     buttonConfig: {
                //         iconCls: 'fa-paperclip'
                //     }
                // }

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