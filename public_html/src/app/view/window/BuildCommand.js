/**
 * ASC.view.window.BuildCommand
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.view.window.BuildCommand', {

    extend: 'Ext.window.Window',

    alias: 'widget.window-BuildCommand',


    initComponent: function () {
        var me = this;

        me.items = [];
        me.buildCommandTextArea();

        Ext.apply(me, {
            title: 'BuildCommand',
            layout: 'fit',
            modal: true,
            buttons: [{
                text: 'close',
                action: 'close'
            }],
            bodyStyle: 'padding: 20px;'
        });

        me.callParent(arguments);
    },


    /**
     * コマンドを表示するテキストエリア
     *
     * @return void
     **/
    buildCommandTextArea: function () {
        var me = this;

        me.items.push({
            xtype: 'textarea',
            value: me.command,
            selectOnFocus: true,
            readOnly: true
        });
    }

});
