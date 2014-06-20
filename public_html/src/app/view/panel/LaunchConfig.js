/**
 * ASC.view.panel.LaunchConfig
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.view.panel.LaunchConfig', {

    extend: 'Ext.panel.Panel',

    alias: 'widget.panel-LaunchConfig',

    requires: [
        'ASC.view.grid.LaunchConfigList',
        'ASC.view.form.LaunchConfigForm'
    ],


    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            layout: 'border',
            border: false,
            items: [{
                xtype: 'grid-LaunchConfigList',
                region: 'west',
                split: true,
                width: 300
            }, {
                xtype: 'form-LaunchConfigForm',
                region: 'center',
                split: true
            }]
        });

        me.callParent(arguments);
    }

});
