Ext.define('EmailClient.view.composer.EmailFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.emailformcontroller',

    onSave: function () {
        var me = this;
        var window = me.getView();
        var form = window.lookupReference('composeMailForm').getForm();
        var id = form.findField('id').getValue();
        var url = 'http://localhost:3000/outbox/';
        method = 'POST';
        if (id) {
            url += id;
            method = 'PUT';
        }

        if (form.isValid()) {
            form.submit({
                url: url,
                method: method,
                success: function (form, action) {
                    Ext.Msg.alert('Success', 'Email sent successfully');
                    window.close();
                },
                failure: function (form, action) {
                    Ext.Msg.alert('Failure', 'Email could not be saved');
                }
            });
        }
    },

    onReset: function () {
        var me = this;
        var window = me.getView();
        form = window.lookupReference('composeMailForm').getForm();
        form.reset();
    },

});
