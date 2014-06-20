/**
 * ASC.view.grid.LaunchConfigList
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
    controllers: [
    ],
    launch: function () {
        var panel = Ext.create('ASC.view.grid.LaunchConfigList', {
            width: 700,
            height: 600,
            renderTo: 'render-component'
        });
    }
});

