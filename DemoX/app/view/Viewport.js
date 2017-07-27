/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DemoX.view.Viewport', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    requires: [
        'DemoX.view.Navigation'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'appnavi',
        region: 'west'
    },{
        region: 'center',
        xtype: 'tabpanel',
        layout: {
        	type: 'fit',

        },
        items:[{
            //title: 'Main Index',
            bind: {
                title: '{title}'
            },
            html: '<h2>Thie Page for the Application Start.</h2>'
        },{
            title: 'Test Grid',
            items:[
                {
                    xtype: 'grid',
                    //title: 'Person Grid DataView',
                    height: 300,
                    bind: {
                        title: '{title}',
                        columns:[
                            { text: 'Id',dataIndex:'{id}'},
                            { text: 'Name',dataIndex:'{name}'},
                            { text: 'Age',dataIndex:'{age}'},
                            { text: 'Sex',dataIndex:'{sex}'},
                            { text: 'Address',dataIndex:'{address}'},
                            { text: 'Remark',dataIndex:'{remark}'},
                        ]
                    }
                    
                }
            ]
        },{
            title: 'Log In',
            items: [
                {
                    xtype: 'panel',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'LoginName'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'PassWord'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: 'SubmitNo'
                        }
                    ]
                }
            ]
        }]
    },
    {
        xtype:'panel',
        region:'north',
        height: 50,
        html:'<div style="background-color:#804b65; font-size:30px; height:45px; line-height: 40px; padding-left: 20px;">DemoX</div>'
    },
    {
        xtype:'toolbar',
        region:'south',
        ui: 'footer',
        margin: '7 0 0 0',
        items: ['就绪', '->', '&copy; 2014 湖北鄂恒科技']
    }]
});
