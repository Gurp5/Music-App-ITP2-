function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		let spectrum = fourier.analyze();
		let wavey = fourier.waveform();
		noStroke();
		
		fill(255,255,0)
		beginShape()
		for(i in wavey)
		{
			
			let xw = map(i, 0, wavey.length, 0, width);
			let yw = map(wavey[i], -1, 1, 0, height);

			vertex(xw, yw);

		}
		endShape()
		for (i in spectrum){ 
			let y = map(i, 0, spectrum.length, 0, height);
		    let x = map(spectrum[i], 0, 255, 0, width);
			if( x > 0) // used only when there is music playing or when there is frequency, just draws whats necessary
			{
				

				ellipse(0 + x, 0 + y, 2, 2)
				ellipse(1 + x, 0 + y+i*2, 2, 2)

			}
			
			
		    //rect(0, y, x, spectrum.length/height );
  		}
	
		pop();
	};
}
