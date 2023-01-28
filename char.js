function Character(){
	this.name = "character";

	this.draw = function(){
		push();
		var character = fourier.analyze();
		noStroke();
		
		fill(0,255,0)
		for (var i = 0; i< character.length; i++){
			var x = map(i, 0, character.length, 0, width);
		    var h = -height + map(character[i], 0, 255, height, 0);
		    rect(x, height, width / character.length, h );
  		}
	
		pop();
	};
}
