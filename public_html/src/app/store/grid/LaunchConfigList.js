/**
 * ASC.store.grid.LaunchConfigList
 * Copyright (c) 2014 iii-planning.com
 */
Ext.define('ASC.store.grid.LaunchConfigList', {

    extend: 'Ext.data.Store',

    autoLoad: true,

    fields: [{
        name: 'name',
        type: 'string'
    }],

    proxy: {
        type: 'direct',
        directFn: LaunchConfig.getList
    }

});
