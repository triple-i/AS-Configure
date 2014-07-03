/**
 * ASC.view.Viewport
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.view.Viewport', {

    extend: 'Ext.container.Viewport',

    alias: 'widget.view-Viewport',

    requires: [
        'ASC.view.panel.LaunchConfig'
    ],


    initComponent: function () {
        var me = this;

        me.items = [];
        me.buildTabPanel();

        Ext.apply(me, {
            layout: 'border'
        });

        me.callParent(arguments);
    },


    /**
     * @return void
     **/
    buildTabPanel: function () {
        var me = this;
        
        me.items.push({
            xtype: 'tabpanel',
            region: 'center',
            title: 'AutoSaling Configure',
            items: [{
                xtype: 'panel-LaunchConfig',
                title: 'LaunchConfig'
            }, {
                xtype: 'panel',
                html: '<p>asc</p>',
                title: 'AutoSalingGroup'
            }]
        });
    }

});
