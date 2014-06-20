/**
 * ASC.view.panel.LaunchConfig
 * Copyright (c) 2014 iii-planning.com
 */
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext': '/ext/src',
        'Ext.ux': '/src/ux',
        'ASC': '/src/app'
    }
});


Ext.direct.Manager.addProvider(ASC.REMOTING_API);
Ext.application({
    name: 'Asc',
    controllers: [
        'ASC.controller.form.LaunchConfigForm',
        'ASC.controller.window.BuildLaunchConfigCommand'
    ],
    launch: function () {
        var panel = Ext.create('ASC.view.panel.LaunchConfig', {
            width: 900,
            height: 600,
            renderTo: 'render-component'
        });
    }
});

