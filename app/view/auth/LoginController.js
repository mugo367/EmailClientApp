Ext.define('EmailClient.view.auth.LoginController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',

    statics: {
        helper: function (response, formdata, me) {
            if (response.status == 200) {
                var userCredentials = JSON.parse(response.responseText);
                if (userCredentials.email.trim() == formdata.email.trim() && userCredentials.password == formdata.password)
                {
                    localStorage.setItem('isLoggedIn', true);
                    me.getView().destroy();
                    Ext.widget('app-main');
                    return;
                }
                else 
                {
                    Ext.Msg.alert('Invalid Email or Password');
                    return;
                }
            }
            Ext.Msg.alert('Something went horribly wrong. Reload the Page');
            
        }
    },

    onLogin: function(btn,eOpts,e) {
        var me = this;
        
        var window = this.getView(),
        form = window.lookupReference('loginform').getForm();
        var formdata = form.getValues();
        var statics = this.statics();
        
        Ext.Ajax.request({
            url: `http://localhost:3000/users/${0}`,
            method: 'GET',
            success: function(response, eOpts) {
               statics.helper(response, formdata, me);
            },

            failure: function(response, eOpts) {
               statics.helper(response, formdata, me);
            }
        });
    }
});