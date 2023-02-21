function Character(){
	this.name = "character";
	this.output = [];
	var s = 0;
	this.x = 100;
	this.yend = 100;
	this.ystart = height - this.yend;
	this.m = width - (this.x * 2);
	this.speed = 0.4;

	
	
	this.func = function(){
		var bigscale = 50;
		var smallscale = 5;
		var output_wave = [];
		var wave = fourier.waveform();
			
			for(i = 0; i < wave.length; i++){

				if(i % 25 == 0){
					
					var x1 = map(i, 0, 1024, this.x, this.x+this.m)
					
					
					if(i < 1024 * 0.25 || i > 1024 * 0.75){
						var y1 = map(wave[i], -1, 1, -smallscale, smallscale)
						output_wave.push({x: x1, y: this.ystart+ y1})

					}
					else{
						var y1 = map(wave[i], -1, 1, -bigscale, bigscale)
						output_wave.push({x: x1, y: this.ystart+ y1})
					
					};
				
				}


			}
	
		
		this.output.push(output_wave);

	}

	
	this.draw = function(){
		
		s += 0.5
		

		
		
		if (s % 50 == 0){
			this.func()
		}
		push()
		
		stroke(255);
		strokeWeight(2);
		
		for(var i = 0; i < this.output.length; i++){

			var o = this.output[i]

			beginShape()
			noFill();
			for(var j = 0; j < o.length; j++){
				
				o[j].y -= this.speed; 

				vertex(o[j].x, o[j].y);

			}

			endShape();
			
			if(o[0].y < this.yend){

				this.output.splice(i, 1);

			}
			
		}
		
		pop();
	};
	
}

