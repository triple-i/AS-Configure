/**
 * ASC.view.form.LaunchConfigForm
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.view.form.LaunchConfigForm', {

    extend: 'Ext.form.Panel',

    alias: 'widget.form-LaunchConfigForm',


    initComponent: function () {
        var me = this;

        me.items = [];
        me.buildNameField();
        me.buildImageIdField();
        me.buildInstanceTypeField();
        me.buildSecurityGroupField();
        me.buildUserDataField();

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
    },


    /**
     * 名前フィールドの構築
     *
     * @return void
     **/
    buildNameField: function () {
        var me = this;
        me.items.push({
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Launch-Config Name'
        });
    },


    /**
     * ImageIdフィールドの構築
     *
     * @return void
     **/
    buildImageIdField: function () {
        var me = this;
        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['image-id', 'image-name'],
            proxy: {
                type: 'direct',
                directFn: LaunchConfig.getImageIdList
            }
        });

        me.items.push({
            xtype: 'combo',
            name: 'image-id',
            store: store,
            fieldLabel: 'Image-Id',
            displayField: 'image-name',
            valueField: 'image-id',
            queryMode: 'local',
            editable: false,
            forceSelection: true
        });
    },


    /**
     * インスタンスタイプフィールドの構築
     *
     * @return void
     **/
    buildInstanceTypeField: function () {
        var me = this;
        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['instance-type'],
            proxy: {
                type: 'direct',
                directFn: LaunchConfig.getInstanceTypeList
            }
        });

        me.items.push({
            xtype: 'combo',
            name: 'instance-type',
            store: store,
            fieldLabel: 'Instance-Type',
            displayField: 'instance-type',
            valueField: 'instance-type',
            queryMode: 'local',
            editable: false,
            forceSelection: true
        });
    },


    /**
     * セキュリティグループフィールドの構築
     *
     * @return void
     **/
    buildSecurityGroupField: function () {
        var me = this;
        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['security-group'],
            proxy: {
                type: 'direct',
                directFn: LaunchConfig.getSecurityGroupList
            }
        });

        me.items.push({
            xtype: 'combo',
            name: 'security-group',
            store: store,
            fieldLabel: 'Security-Group',
            displayField: 'security-group',
            valueField: 'security-group',
            queryMode: 'local',
            editable: false,
            forceSelection: true
        });
    },


    /**
     * ユーザデータフィールドの構築
     *
     * @return void
     **/
    buildUserDataField: function () {
        var me = this;
        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: ['filename'],
            proxy: {
                type: 'direct',
                directFn: LaunchConfig.getUserDataList
            }
        });

        me.items.push({
            xtype: 'combo',
            name: 'user-data',
            store: store,
            fieldLabel: 'UserData',
            displayField: 'filename',
            valueField: 'filename',
            queryMode: 'local',
            editable: false,
            forceSelection: true,
            allowBlank: true
        });
    }

});
