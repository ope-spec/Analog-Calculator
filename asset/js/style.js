const starCount = 100; // Number of stars

for (let i = 0; i < starCount; i++) {
	let star = document.createElement('div');
	star.className = 'star';
	star.style.width = `${Math.random() * 3 + 1}px`;
	star.style.height = star.style.width;
	star.style.top = `${Math.random() * 100}vh`;
	star.style.left = `${Math.random() * 100}vw`;
	star.style.animation = `twinkle ${Math.random() * 5 + 5}s infinite`;
	document.body.appendChild(star);
}