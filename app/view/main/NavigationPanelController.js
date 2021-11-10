Ext.define('EmailClient.view.main.NavigationPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navigationpanelcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    init: function() {},
    onItemClick: function(treepanel, record, item, index, e, eOpts) {
        this.redirectTo(record.get('url'));
    }
});