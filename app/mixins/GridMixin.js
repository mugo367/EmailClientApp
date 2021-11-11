Ext.define('EmailClient.mixins.GridMixin', {
   
    loadGridStore: function() {
        var grid = this.getView();
        var store = grid.getStore();
        store.load();
    },

    
    getSelectedRecord: function() {
        var me = this,
            records = me.getSelectedRecords();
        if (records[0]) {
            return records[0];
        } else {
            Ext.Msg.alert('Error', 'Select at least one record.');
            return;
        }
    },

    getSelectedRecords: function() {
        var me = this,
            grid = me.getView();
        var records = grid.getSelectionModel().getSelection();
        return records;
    },
   
    removeSelectedRecord: function(url, grid) {
        Ext.Ajax.request({
            url: url,
            method: 'DELETE',
            success: function(response, eOpts) {
                var result = EmailClient.Util.jsonToPojo(response.responseText);
                if (result.success) {
                    Ext.toast({
                        html: 'Deleted successfully',
                        title: 'Success',
                        width: 200,
                        align: 't'
                    });
                }

            },
            failure: function(response, eOpts) {
                console.log(response.responseText);
                var result = EmailClient.Util.jsonToPojo(response.responseText);
                EmailClient.Util.showError(result.msg);
            }
        });
        grid.getStore().reload();

    },


});