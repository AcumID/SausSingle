function SearchView() {
	
	var self = Ti.UI.createView({
		backgroundColor: 'black',
		width: 200,
		height: 55
		
	});

	var search = Ti.UI.createTextField({
		height: 43,
		width: 200,
		top: 10,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "Hva' leder du efter?"
	});
	
	search.addEventListener('focus',function(e){
		if(e.source.hintText=="Hva' leder du efter?"){
			e.source.hintText="";
		}
	});
	
	search.addEventListener('change',function(e){
		self.fireEvent(e.source,'update',e.value);
	})
	
	search.addEventListener('blur',function(e){
		e.source.hintText="Hva, leder du efter?";
	});
	
	self.add(search);

	return self;
};
	
module.exports = SearchView;	
