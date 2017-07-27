/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DemoX.view.main.Main', {
    extend: 'Ext.container.Container',
    alias: 'widget.app-mains',

    //xtype: 'app-mains',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>ABCJDDD area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        },{
            title: 'Tab 2',
            html: '<h1>Content style navigation of width p</h1>'
        }]
    },
    {
        xtype:'panel',
        region:'north',
        height: 50,
        html:'<div style="background-color:gray; font-size:30px; height:50px">DemoX</div>'
    },
    {
        xtype:'toolbar',
        region:'south',
        ui: 'footer',
        margin: '7 0 0 0',
        items: ['就绪', '->', '&copy; 2014 湖北鄂恒科技有限公司']
    }]
});
