//FirstView Component Constructor
function WelcomeView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:"white",
		opacity:0.9,
		height: "90%",
		width: "90%",
		borderWidth:2,
		borderColor:"Black"
	});
	

	var welcomeLabel = Ti.UI.createLabel({
		text: "Hej Pedersen og Findus..",
		top:"10%",
		font: {fontFamily:"Segoe UI", fontSize:35 },
	});
	self.add(welcomeLabel);
	
		var welcomeJobLabel = Ti.UI.createLabel({
		text: "Idag arbejder I på renovering af vinduer på Birkevej 12.",
		top:"30%",
		font: {fontFamily:"Segoe UI Light", fontSize:35 },
	});
	self.add(welcomeJobLabel);
	
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