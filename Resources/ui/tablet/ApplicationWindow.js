//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var SearchView = require('ui/common/ElementSearchView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);
	var searchView = new SearchView();
	self.add(searchView);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
