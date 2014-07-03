/**
 * ASC.view.form.BaseForm
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.view.form.BaseForm', {

    extend: 'Ext.form.Panel',

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            defaults: {
                allowBlank: false,
                labelWidth: 120,
                width: 500
            },
            bodyStyle: 'padding: 30px;',
            buttons: [{
                text: 'build',
                action: 'build'
            }]
        });

        me.callParent(arguments);
    }

});
