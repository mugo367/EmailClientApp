/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'EmailClient.Application',

    name: 'EmailClient',

    requires: [
        // This will automatically load all classes in the EmailClient namespace
        // so that application classes do not need to require each other.
        'EmailClient.*'
    ],

    // The name of the initial view to create.
    mainView: 'EmailClient.view.main.Main'
});
