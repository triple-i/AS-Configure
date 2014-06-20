

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
        var panel = Ext.create('ASC.view.container.Panel', {
            width: 550,
            height: 400,
            renderTo: 'render-component'
        });
    }
});

