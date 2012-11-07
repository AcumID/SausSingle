function ReggedMaterials(title){
	var self = Ti.UI.createView({
		backgroundColor:'orange',
		width:"10%",
		height:"100%",
		left: "90%",
		opacity: 0.75
	});
	
	
	
	var skruer = createMaterial("skruer", 300);


	
	
	function createMaterialView(name, amount){
		var MaterialView = Titanium.UI.createView({
			backgroundColor:'white',
		});
		createMinusButton();
		createMatLabel(name, amount);
		
	}
	
	function createMatLabel(name, amount){
		var label = Ti.UI.createLabel({})
	}
	
	
	
	
	
	
	
	
	
	
	function createMinusButton(){
		var minusButton = Titanium.UI.createButton({
   		title: '-',
   		top: 10,
   		left: "1%",
   		width: 20,
   		height: 20
		});
		
		minusButton.addEventListener('click',function(e)
		{
   			self.remove(minusButton);
   			
		});
	
		self.add(minusButton);
	}
	
	
	
	
	
	
	
	
	
	
	return self
};
module.exports = ReggedMaterials;
