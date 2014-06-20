Ext.define("ASC.Events",{extend:"Ext.util.Observable",singleton:!0,showInfoWindow:function(a){Ext.Msg.show({title:"Success!",msg:a,icon:Ext.Msg.INFO,buttons:Ext.Msg.OK})},showCautionWindow:function(a){Ext.Msg.show({title:"Caution!",msg:a,icon:Ext.Msg.ERROR,buttons:Ext.Msg.OK})}});Ext.ns("ASC","ASC.Controllers");ASC.Controllers=["ASC.controller.form.LaunchConfigForm","ASC.controller.window.BuildLaunchConfigCommand"];Ext.define("ASC.controller.form.LaunchConfigForm",{extend:"Ext.app.Controller",init:function(){this.control({'form-LaunchConfigForm textfield[name="name"]':{afterrender:function(a){a.focus(400,!0)}},'form-LaunchConfigForm button[action="build"]':{click:this.showCreateLaunchConfigCommandWindow}})},showCreateLaunchConfigCommandWindow:function(a){a=a.up("form-LaunchConfigForm");a.getForm().isValid()&&(a=a.getValues(),LaunchConfig.buildCreateCommand({values:a},function(a){Ext.create("ASC.view.window.BuildLaunchConfigCommand",
{command:a.command,width:560,height:350}).show()}))}});Ext.define("ASC.controller.window.BuildLaunchConfigCommand",{extend:"Ext.app.Controller",init:function(){this.control({"window-BuildLaunchConfigCommand":{afterrender:function(a){a.down("textarea").focus(!0,400)}},'window-BuildLaunchConfigCommand button[action="close"]':{click:function(a){a.up("window-BuildLaunchConfigCommand").close()}}})}});Ext.define("ASC.store.grid.LaunchConfigList",{extend:"Ext.data.Store",autoLoad:!0,fields:[{name:"name",type:"string"}],proxy:{type:"direct",directFn:LaunchConfig.getList}});Ext.define("ASC.view.grid.LaunchConfigList",{extend:"Ext.grid.Panel",alias:"widget.grid-LaunchConfigList",initComponent:function(){var a=this.buildStore(),b=this.buildColumn();Ext.apply(this,{title:"\u65e2\u5b58\u306e LaunchConfig",store:a,columns:b,stripeRows:!0,loadMask:!0});this.callParent(arguments)},buildStore:function(){return Ext.create("ASC.store.grid.LaunchConfigList")},buildColumn:function(){return[{text:"Name",dataIndex:"name",flex:1}]}});Ext.define("ASC.view.form.LaunchConfigForm",{extend:"Ext.form.Panel",alias:"widget.form-LaunchConfigForm",initComponent:function(){this.items=[];this.buildNameField();this.buildImageIdField();this.buildInstanceTypeField();this.buildSecurityGroupField();this.buildUserDataField();Ext.apply(this,{defaults:{allowBlank:!1,labelWidth:120,width:500},bodyStyle:"padding: 30px;",buttons:[{text:"build",action:"build"}]});this.callParent(arguments)},buildNameField:function(){this.items.push({xtype:"textfield",
name:"name",fieldLabel:"Launch-Config Name"})},buildImageIdField:function(){this.items.push({xtype:"combo",name:"image-id",store:Ext.create("Ext.data.Store",{autoLoad:!0,fields:["image-id","image-name"],proxy:{type:"direct",directFn:LaunchConfig.getImageIdList}}),fieldLabel:"Image-Id",displayField:"image-name",valueField:"image-id",queryMode:"local",editable:!1,forceSelection:!0})},buildInstanceTypeField:function(){this.items.push({xtype:"combo",name:"instance-type",store:Ext.create("Ext.data.Store",
{autoLoad:!0,fields:["instance-type"],proxy:{type:"direct",directFn:LaunchConfig.getInstanceTypeList}}),fieldLabel:"Instance-Type",displayField:"instance-type",valueField:"instance-type",queryMode:"local",editable:!1,forceSelection:!0})},buildSecurityGroupField:function(){this.items.push({xtype:"combo",name:"security-group",store:Ext.create("Ext.data.Store",{autoLoad:!0,fields:["security-group"],proxy:{type:"direct",directFn:LaunchConfig.getSecurityGroupList}}),fieldLabel:"Security-Group",displayField:"security-group",
valueField:"security-group",queryMode:"local",editable:!1,forceSelection:!0})},buildUserDataField:function(){this.items.push({xtype:"combo",name:"user-data",store:Ext.create("Ext.data.Store",{autoLoad:!0,fields:["filename"],proxy:{type:"direct",directFn:LaunchConfig.getUserDataList}}),fieldLabel:"UserData",displayField:"filename",valueField:"filename",queryMode:"local",editable:!1,forceSelection:!0,allowBlank:!0})}});Ext.define("ASC.view.window.BuildLaunchConfigCommand",{extend:"Ext.window.Window",alias:"widget.window-BuildLaunchConfigCommand",initComponent:function(){this.items=[];this.buildCommandTextArea();Ext.apply(this,{title:"BuildLaunchConfigCommand",layout:"fit",modal:!0,buttons:[{text:"close",action:"close"}],bodyStyle:"padding: 20px;"});this.callParent(arguments)},buildCommandTextArea:function(){this.items.push({xtype:"textarea",value:this.command,selectOnFocus:!0,readOnly:!0})}});Ext.define("ASC.view.panel.LaunchConfig",{extend:"Ext.panel.Panel",alias:"widget.panel-LaunchConfig",requires:["ASC.view.grid.LaunchConfigList","ASC.view.form.LaunchConfigForm"],initComponent:function(){Ext.apply(this,{layout:"border",border:!1,items:[{xtype:"grid-LaunchConfigList",region:"west",split:!0,width:300},{xtype:"form-LaunchConfigForm",region:"center",split:!0}]});this.callParent(arguments)}});Ext.application({controllers:ASC.Controllers,launch:function(){Ext.create("ASC.view.Viewport")}});
