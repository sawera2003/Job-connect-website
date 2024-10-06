function generateCV() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const summary = document.getElementById("summary").value;

	const cvHTML = `
		<h2>${name}</h2>
		<h3>Contact Information:</h3>
		<ul>
			<li>Email: ${email}</li>
			<li>Phone: ${phone}</li>
		</ul>
		<h3>Summary:</h3>
		<p>${summary}</p>
	`;

	document.getElementById("cv").innerHTML = cvHTML;
}

function updateTime() {
	const now = new Date();
	const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
	document.getElementById('current-time').textContent = now.toLocaleTimeString([], options);
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

