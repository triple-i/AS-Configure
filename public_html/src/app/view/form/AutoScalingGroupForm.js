/**
 * ASC.view.form.AutoScalingGroupForm
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.view.form.AutoScalingGroupForm', {

    extend: 'ASC.view.form.BaseForm',

    alias: 'widget.form-AutoSclingGroupForm',


    initComponent: function () {
        var me = this;

        me.items = [];
        me.buildCommandField();
        me.buildNameField();
        me.buildLaunchConfigField();
        me.buildMaxSizeField();
        me.buildMinSizeField();

        me.callParent(arguments);
    },


    /**
     * AutoScalingGroupを生成するのか更新するのかを選択するフィールド
     *
     * @return void
     **/
    buildCommandField: function () {
        var me = this;

        me.items.push({
            xtype: 'fieldcontainer',
            fieldLabel: 'Command',
            defaultType: 'radiofield',
            layout: 'hbox',
            items: [{
                boxLabel: 'Create',
                name: 'command',
                inputValue: 'create',
                flex: 1
            }, {
                boxLabel: 'Update',
                name: 'command',
                inputValue: 'update',
                flex: 1
            }]
        });
    },


    /**
     * @return void
     **/
    buildNameField: function () {
        var me = this;

        me.items.push({
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Group-Name'
        });
    },


    /**
     * @return void
     **/
    buildLaunchConfigField: function () {
        var me = this;

        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['name'],
            proxy: {
                type: 'direct',
                directFn: LaunchConfig.getList
            }
        });

        me.items.push({
            xtype: 'combo',
            name: 'launch-config',
            store: store,
            fieldLabel: 'LaunchConfig-Name',
            displayField: 'name',
            valueField: 'name',
            queryMode: 'local',
            editable: false,
            forceSelection: true
        });
    },


    /**
     * @return void
     **/
    buildMaxSizeField: function () {
        var me = this;

        me.items.push({
            xtype: 'numberfield',
            name: 'max-size',
            fieldLabel: 'Max-Size',
            minValue: 1
        });
    },


    /**
     * @return void
     **/
    buildMinSizeField: function () {
        var me = this;

        me.items.push({
            xtype: 'numberfield',
            name: 'min-size',
            fieldLabel: 'Min-Size',
            minValue: 0
        });
    }

});
