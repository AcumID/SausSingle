//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	
	var SearchView = require('ui/common/ElementSearchView');
	var WelcomeView = require('ui/common/WelcomeView');
	var FirstView = require('ui/common/WelcomeView.js');
	var RegMat = require('ui/common/RegMat.js');	

//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	var petersView = Ti.UI.createImageView({
		image: "/images/peter.jpg"
	});
	self.add(petersView);
	

	
		
	//construct UI

	var searchView = new SearchView();
	self.add(searchView);

	var regMat = new RegMat();
	self.add(regMat);

	var welcomeView = new WelcomeView();
	self.add(welcomeView);

	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
