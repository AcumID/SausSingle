function RegMat(title){

	var self = Ti.UI.createView({
		backgroundColor:'orange',
		width:"10%",
		height:"100%",
		left: "90%",
		opacity: 0.75
	});
	
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:"Registrerede Materialer",
		width:"auto",
		height:"5%",
		left: "10%",
		top:"0"
	});
	self.add(label);
	
	
	var RegMatView = require('ui/common/RegMatView.js');

	var matView = new RegMatView("Skruer", 1);
	self.add(matView);
	
	var matView2 = new RegMatView("Lægter", 2);
	self.add(matView2);
	
	
	
	
	
	
	
	
	return self;
};
module.exports = RegMat;
