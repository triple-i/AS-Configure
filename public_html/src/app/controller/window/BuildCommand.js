/**
 * ASC.controller.window.BuildCommand
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.controller.window.BuildCommand', {

    extend: 'Ext.app.Controller',


    init: function () {
        var me = this;

        me.control({
            'window-BuildCommand': {
                afterrender: function (win) {
                    var textarea = win.down('textarea');
                    textarea.focus(true, 400);
                }
            },

            'window-BuildCommand button[action="close"]': {
                click: function (btn) {
                    var win = btn.up('window-BuildCommand');
                    win.close();
                }
            }
        });
    }

});
