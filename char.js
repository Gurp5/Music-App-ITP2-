function Character(){
	this.name = "character";
	var s = 0;
	var output = [];
	this.func = function(){

		if(s % 100 == 0){
	
			output.push([{ x:x, y:ystart }, { x:(x + m), y:ystart }]);
	
		}
	}

	
	this.draw = function(){
		
		x = 100;
		yend = 100;
		ystart = height - yend;
		m = width - (x * 2);
		speed = 0.4;
		s += 2;
		this.func()
		push()
		
		stroke(255);
		strokeWeight(2);
		
		for(var i = 0; i < output.length; i++){

			var o = output[i]

			beginShape()
			
			for(var j = 0; j < o.length; j++){
				
				o[j].y -= speed; 

				vertex(o[j].x, o[j].y);

			}

			endShape();
			
			if(o[0].y < yend){

				output.splice(i, 1);

			}
			
		}
		
		pop();
	};
	
}

