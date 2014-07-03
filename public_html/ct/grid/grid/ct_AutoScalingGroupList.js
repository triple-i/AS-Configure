

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
        'ASC.controller.grid.AutoScalingGroupList'
    ],
    launch: function () {
        var panel = Ext.create('ASC.view.grid.AutoScalingGroupList', {
            width: 700,
            height: 600,
            renderTo: 'render-component'
        });
    }
});

