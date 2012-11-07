function ElementSearchView() {
	
	var self = Ti.UI.createView({
		backgroundColor: 'black',
		width: 500,
		height: 600,
		
	});


	// var search = Ti.UI.createSearchBar({
    	// barColor:'#000', 
    	// showCancel:true,
    	// height:43,
    	// width: 200,
    	// top:10,
    	// hintText: "Hva' leder du efter?"
	// });
	// self.add(search);	var search = Ti.UI.createTextField({
		height: 43,
		width: 200,
		top: 10,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "Hva' leder du efter?"
	});
	
	search.addEventListener('focus',function(e){
		e.source.hintText="";
	});
	
	search.addEventListener('blur',function(e){
		e.source.hintText="Hva, leder du efter?";
	});
	
	self.add(search);
	return self;
};
	
module.exports = ElementSearchView;	
