function RegMatView(title, pos){
		
	var self = Ti.UI.createView({
		backgroundColor:'green',
		width:"90%",
		height:"3%",
		left: "5%",
		opacity: 0.75,
		top: 45 + (pos-1)*45
	});
	
	var closeButton = Ti.UI.createButton ({
   		title: '-',
   		top: "20%",
   		left: "0%",
   		width: "auto",
   		height: "60%"
	});	
	closeButton.addEventListener('click',function(e) {
   		//den her skulle jo gerne fjerne hele den pågældende RegMatView instansiering
   		alert("Nu skulle den jo gerne fjerne det lort, men fatter ikke lige hvordan");
   	});
	self.add(closeButton);

	var nameLabel = Ti.UI.createLabel({
  		text: title,
  		width: "75%", 
  		height: 'auto',
	});
	self.add(nameLabel);
	
	
	
	return self
};


module.exports = RegMatView;
