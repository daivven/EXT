/**
 * Created by Administrator on 14-4-18.
 */
Ext.Loader.setConfig({
    enabled: true,
    //disableCaching: false,
    paths: {
        'Ext.ux': 'Scripts/Extjs/build/examples/ux'
    }
});



Ext.application({
  name: 'DemoX',
  //appFolder: 'app',
  extend: 'DemoX.Application',
  autoCreateViewport: 'DemoX.view.Viewport'
});


