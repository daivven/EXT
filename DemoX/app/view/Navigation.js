Ext.define('DemoX.view.Navigation',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.appnavi',

    layout: 'accordion',
    width: 230,
    split: true,
    collapsed: true,
    collapsible: true,
    title: 'System Main Menu',
    defaults: {
        autoScroll: true,
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        defaults: {
            xtype: 'button',
            width: 50,
            height: 30,
            margins: '10 5 10 5'
        }
    },
    items: [
        {
        	xtype: 'panel',
        	title: 'Grid Example List',
        	items: [
                {
                	text: 'Simple Grid'
                },
                {
                	text: 'Local Grid'
                },
                {
                	text: 'Mutil Grid'
                },
                {
                	text: 'Change Grid'
                }
        	]
        },
        {
        	xtype: 'panel',
        	title: 'Tree Example List',
        	items: [
                {
                	text: 'Tree Grid'
                },
                {
                	text: 'Tree Drop'
                },
                {
                	text: 'Tree Node'
                },
                {
                	text: 'Tree Mutil'
                }
        	]
        },
        {
        	xtype: 'panel',
        	title: 'Chart Example List',
        	items: [
                {
                	text: 'Pie Chart'
                },
                {
                	text: '3D Chart'
                },
                {
                	text: 'Line Chart'
                },
                {
                	text: 'Cube Chart'
                }
        	]
        }
    ]

});