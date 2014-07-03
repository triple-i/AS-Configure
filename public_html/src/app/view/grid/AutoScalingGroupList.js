/**
 * ASC.view.grid.AutoScalingGroupList
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.view.grid.AutoScalingGroupList', {

    extend: 'Ext.grid.Panel',

    alias: 'widget.grid-AutoScalingGroupList',

    
    initComponent: function () {
        var me = this,
            store = me.buildStore(),
            columns = me.buildColumn();

        Ext.apply(me, {
            title: '既存の AutoScalingGroup',
            store: store,
            columns: columns,
            stripeRows: true,
            loadMask: true
        });

        me.callParent(arguments);
    },


    /**
     * ストアの構築
     *
     * @return Ext.data.Store
     **/
    buildStore: function () {
        return Ext.create('ASC.store.grid.AutoScalingGroupList');
    },


    /**
     * カラムの構築
     *
     * @return array
     **/
    buildColumn: function () {
        return [{
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }];
    }

});
