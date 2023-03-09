function Character(){
	this.name = "character";
	this.output = [];
	let s = 0;
	this.x = 100;
	this.yend = 200;
	this.ystart = height - this.yend;
	this.m = width - (this.x * 2);
	this.speed = 0.4;

	
	
	this.func = function(){
		let bigscale = 50;
		let smallscale = 5;
		let output_wave = [];
		let wave = fourier.waveform();
			
			for(i in wave){

				if(i % 25 == 0){
					
					let x1 = map(i, 0, 1024, this.x, this.x+this.m)
					
					
					if(i < 1024 * 0.25 || i > 1024 * 0.75){
						let y1 = map(wave[i], -1, 1, -smallscale, smallscale)
						output_wave.push({x: x1, y: this.ystart+ y1})

					}
					else{
						let y1 = map(wave[i], -1, 1, -bigscale, bigscale)
						output_wave.push({x: x1, y: this.ystart+ y1})
					
					};
				
				}


			}
	
		
		this.output.push(output_wave);

	}

	
	this.draw = function(){
		
		s += 0.5
		

		
		
		if (s % 40 == 0 ){
			this.func()
		}
		if(sound.isPlaying()){
		push()
		
		stroke(255);
		strokeWeight(3);
		
		for(i in this.output){

			var o = this.output[i]

			beginShape()
			noFill();
			for(j in o){
				
				o[j].y -= this.speed; 

				vertex(o[j].x, o[j].y);

			}

			endShape();
			
			if(o[0].y < this.yend){

				this.output.splice(i, 1);

			}
			
		}
		
		pop();
	}
	};
	
}

