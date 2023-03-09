//draw the waveform to the screen
function WavePattern(){
	//vis name
	this.name = "wavepattern";

	//draw the wave form to the screen
	this.draw = function(){
		push();
		noFill();
		stroke(255, 255, 150);
		strokeWeight(2);
		let inc = 0;

		beginShape();
		//calculate the waveform from the fft.
		var wave = fourier.waveform();
		for (var i = 0; i < wave.length; i++){
			inc++
			n = noise(inc)
			//for each element of the waveform map it to screen 
			//coordinates and make a new vertex at the point.
			let x = map(i, 0, wave.length, 0, width);
			let y = map(wave[i], -1, 1, 0, height);

			vertex(x, y);
		}

		endShape();
		pop();
	};
}
