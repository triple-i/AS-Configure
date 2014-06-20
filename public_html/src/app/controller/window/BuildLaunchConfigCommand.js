/**
 * ASC.controller.window.BuildLaunchConfigCommand
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.controller.window.BuildLaunchConfigCommand', {

    extend: 'Ext.app.Controller',


    init: function () {
        var me = this;

        me.control({
            'window-BuildLaunchConfigCommand': {
                afterrender: function (win) {
                    var textarea = win.down('textarea');
                    textarea.focus(true, 400);
                }
            },

            'window-BuildLaunchConfigCommand button[action="close"]': {
                click: function (btn) {
                    var win = btn.up('window-BuildLaunchConfigCommand');
                    win.close();
                }
            }
        });
    }

});
