(function(){
	'use strict';

	function calculateArea(){
		var input;
		var area;
		input = prompt('Enter radius');

		while (input !== null){
			area = 3.14*input*input;
			document.write('<br/>With radius ' + input + ' the area is ' + area);
			input = prompt('Enter radius');
		}
	}

	//calculateArea();

	function findHighestNum(){
		var highest = 0;
		var input = prompt('Enter number to continue or zero to exit');

		while(input !== "0"){
			if (parseFloat(input) > highest){
				highest = input;
			}
			input = prompt('Enter number to continue or zero to exit');
		}

		document.write('<p>highest number: ' + highest + '</p>');
	}

	//findHighestNum();

	function countLetters(){
		var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus justo nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem augue, blandit vehicula pharetra eu, sodales id lacus. Pellentesque ullamcorper eros euismod mauris iaculis congue. Nulla quis iaculis diam. Phasellus tristique orci ac ante accumsan laoreet. Nulla mollis bibendum lorem ornare pharetra. Aliquam erat volutpat. Quisque in velit placerat, rhoncus augue vitae, lacinia tellus. Nulla in tortor ultricies, elementum ipsum sed, porttitor ex.';
		
		var input = prompt('Enter a letter');
		
		function countLetter(letter){
			var occurrences = 0;

			var chars = text.split('');

			for (var i = 0; i < chars.length; i++) {
				var c = chars[i];
				if (c === letter){
					occurrences++;
				}
			};

			return occurrences;
		}

		if (input.length !== 1){
			alert('Enter a single letter only');
		} else {
			var occurrences = countLetter(input);
			document.write('Found ' + occurrences + ' occurrences of the letter \"' + input + '\"');
		}		
	}

	//countLetters();

})();