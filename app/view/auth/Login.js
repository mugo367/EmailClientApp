Ext.define('EmailClient.view.auth.Login', {

    extend: 'Ext.window.Window',
    xtype: 'login',
    controller: 'logincontroller',

    requires: [
        'Ext.form.Panel'
    ],

    title: 'Login',
    frame: true,
    width: 320,
    bodyPadding: 10,
    autoShow: true,
    closable: false,

    viewmodel: {
        type: 'loginviewmodel'
    },
    

    items: {
        xtype: 'form',
        reference: 'loginform',
        items: [{
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            allowBlank: false
        }, 
        {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }],

        buttons: [
            {
                text: 'Login',
                formBind: true,
                listeners: {
                    click: 'onLogin'
                }
            }
        ]
    }
});