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

    items: {
        xtype: 'form',
        reference: 'loginform',
        items: [{
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email',
            allowBlank: false,
            vtype: 'email'
        }, 
        {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false,
            // vtype: 'mypassword'
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