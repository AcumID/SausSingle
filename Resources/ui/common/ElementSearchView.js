function ElementSearchView() {
	
	var self = Ti.UI.createView({
		backgroundColor: 'black',
		width: 500,
		height: 600,
		
	});

	var SearchView = require('ui/common/ElementSearchView');
	var search = new SearchView();
	
	var MatElmView = require('ui/common/MaterialElementView');	
	search.addEventlistener('update',function(e){
		updateView(e.value);
	});
	
	var updateView = function (searchQuery){
		alert(searchQuery);
		//TODO for loop to generate matElms
		var matElm = new MatElmView("En vare");
		self.add(matElm);
	};
	
	return self;
};
	
module.exports = ElementSearchView;	
