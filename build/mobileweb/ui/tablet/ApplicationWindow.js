//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var WelcomeView = require('ui/common/WelcomeView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	var petersView = Ti.UI.createImageView({
		image: "/images/peter.jpg"
	});
	self.add(petersView);
	
	
		
	//construct UI
	var welcomeView = new WelcomeView();
	self.add(welcomeView);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
