

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
        'ASC.controller.window.BuildLaunchConfigCommand'
    ],
    launch: function () {
        Ext.create('ASC.view.window.BuildLaunchConfigCommand', {
            width: 550,
            height: 400,
            renderTo: Ext.getBody()
        }).show();
    }
});

