/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DemoX.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
    	title: 'Main Index',
    	id: 1,
        name: 'DemoX',
        age: 25,
        sex: 'girl',
        address: 'BeckStreet No.131',
        remark: 'Nothing.'
    }

    //TODO - add data, formulas and/or methods to support your view
});