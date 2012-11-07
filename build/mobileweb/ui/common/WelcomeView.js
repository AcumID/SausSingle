//FirstView Component Constructor
function WelcomeView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:"gray",
		opacity:0.9,
		height: "90%",
		width: "90%"
	});
	self.set

	var welcomeLabel = Ti.UI.createLabel({
		text: "Hej Pedersen og Findus, idag arbejder I på renovering af vinduer på Birkevej 12.",
		top:"10%",
	});
	self.add(welcomeLabel);
	
	
	var confirmButton = Ti.UI.createButton({
		color:'green',
		title:"Jo tak! videre til registreringen",
		top: "80%",
		left: "75%"
	});
	self.add(confirmButton);
	
	var declineButton = Ti.UI.createButton({
		color:'red',
		title:"Hov! noget stemmer ikke her!",
		top: "80%",
		left: "25%"
	});
	self.add(declineButton);
	
	//var confirmButton = Ti.UI.create
	
	//Add behavior for UI
	confirmButton.addEventListener('click', function(e) {
		self.hide()
	});
	
	return self;
};

module.exports = WelcomeView;