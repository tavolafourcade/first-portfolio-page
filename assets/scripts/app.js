function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "R",
				weight: getRandomInt(15)
			}, {
				text: "Css3",
				weight: getRandomInt(15)
			}, {
				text: "Javascript",
				weight: getRandomInt(15)
			}, {
				text: "Jquery",
				weight: getRandomInt(15)
			}, {
				text: "Programming",
				weight: getRandomInt(15)
			}, {
				text: "Python",
				weight: getRandomInt(15)
			}, {
				text: "React",
				weight: getRandomInt(15)
			}, {
				text: "Redux",
				weight: getRandomInt(15)
			}, {
				text: "Learning",
				weight: getRandomInt(15)
			}, {
				text: "Coaching",
				weight: getRandomInt(15)
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Front-end Developer.", "love everything about code.", "also teach programming to people.", "solve PROBLEMS!"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
