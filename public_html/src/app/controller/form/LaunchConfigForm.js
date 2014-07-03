/**
 * ASC.controller.form.LaunchConfigForm
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.controller.form.LaunchConfigForm', {

    extend: 'Ext.app.Controller',


    init: function () {
        var me = this;

        me.control({
            'form-LaunchConfigForm textfield[name="name"]': {
                afterrender: function (field) {
                    field.focus(400, true);
                }
            },

            'form-LaunchConfigForm button[action="build"]': {
                click: me.showCreateCommandWindow
            }
        });
    },


    /**
     * LaunchConfig新規作成コマンドを記載したWindowを表示する
     *
     * @param  btn Button
     * @return void
     **/
    showCreateCommandWindow: function (btn) {
        var form = btn.up('form-LaunchConfigForm');

        if (form.getForm().isValid()) {
            var values = form.getValues();

            LaunchConfig.buildCreateCommand({
                values: values
            }, function (response) {
                Ext.create('ASC.view.window.BuildCommand', {
                    command: response.command,
                    width: 560,
                    height: 350
                }).show();
            });
            
        }
    }

});
