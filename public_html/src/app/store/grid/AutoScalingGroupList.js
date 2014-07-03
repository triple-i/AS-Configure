/**
 * ASC.store.grid.AutoScalingGroupList
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.store.grid.AutoScalingGroupList', {

    extend: 'Ext.data.Store',

    autoLoad: true,

    fields: [{
        name: 'name',
        type: 'string'
    }],

    proxy: {
        type: 'direct',
        directFn: AutoScalingGroup.getList
    }

});
