

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
        Ext.create('ASC.view.form.LaunchConfigForm', {
            width: 700,
            height: 600,
            renderTo: 'render-component'
        });
    }
});

