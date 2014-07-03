/**
 * ASC.controller.grid.AutoScalingGroupList
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.controller.grid.AutoScalingGroupList', {

    extend: 'Ext.app.Controller',

    init: function () {
        var me = this;

        me.control({
            'grid-AutoScalingGroupList': {
                'select': me.loadAutoScalingData
            }
        });
    },


    /**
     * AutoScalingGroupFormに選択したグループ情報をロードする
     *
     * @param  RowModel selection
     * @param  Model record
     * @param  int index
     * @param  object opt
     * @return void
     **/
    loadAutoScalingData: function (selection, record, index, opt) {
        
    }

});
