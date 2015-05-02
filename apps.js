Ext.application({
     name : 'PhoneBook',
     appFolder : 'apps',
     requires : ["PhoneBook.common.PhoneBookCommonAjax","PhoneBook.CustomPanel"],
	 controllers :['PhoneBookControlller'],
	 launch : function() {
         Ext.create('Ext.panel.Panel', {
            renderTo : Ext.getBody(),
            height : window.innerHeight,
            width : window.innerWidth,
            items : [
                { 
                   // region : 'north',
					xtype : 'headerView'
                },
                { 
                   // region : 'center',
                    xtype : 'searchPanel'
                },{
                	//region : 'south',
                	//xtype : 'contactList',
                	xtype : 'panel',
                	layout : 'table',
                	column : 2,
                	items : [{
                		xtype : 'contactList',
                		width : screen.width*0.94
                	},{
                		xtype : Ext.create('Ext.slider.Single', {
                	        height: 250,
                	        width :  100,
                	        vertical: true,
                	        minValue: 0,
                	        maxValue: 100,
                	        listeners : {
                	        	'change' : function(slider,newVal,a ,b){
                	        		Ext.ComponentQuery.query('contactList')[0].getView().focusRow(newVal);
                	        	}
                	        }
                	    })
                	}]
                }
            ],listeners : {
            	afterrender : function(){
            		//alert("I am rendered");
            		//PhoneBook.app.getController('PhoneBookControlller').getSearchData();
            	}
            }
        });
    }
});
