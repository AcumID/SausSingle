function MaterialElementView(name) {
	
	var self = Ti.UI.createView({
		backgroundColor: 'white',
		width: 100,
		height: 100,
		borderRadius: 5
		
	});

	var label = Ti.UI.createLabel({
		text: name
	});
	
	self.add(label);

	return self;
};
	
module.exports = MaterialElementView;	