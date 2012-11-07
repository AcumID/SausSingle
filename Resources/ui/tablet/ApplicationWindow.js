//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView.js');
	var RegMat = require('ui/common/RegMat.js');	
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);
	
	var regMat = new RegMat();
	self.add(regMat);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
