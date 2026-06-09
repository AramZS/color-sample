
function setTheme(themeName) {
	localStorage.setItem("theme", themeName);
	document.documentElement.className = "theme-" + themeName;

	let current = document.querySelector(".theme-picker li.current");
	if (!current) {
		return;
	}
	current.classList.remove("current");

	current = document.querySelector(
		".theme-picker li." + "theme-" + themeName
	);
	if (!current) {
		return;
	}
	current.classList.add("current");
}

// Set theme before page renders
(function () {
	setTheme(localStorage.getItem("theme") || "alfalfa");
})();

// When document ready add event listeners
document.addEventListener("DOMContentLoaded", function () {
	const selectTheme = (e) => {
		const btn = e.currentTarget;
		if (!btn.dataset.theme) {
			return;
		}
		setTheme(btn.dataset.theme);
	};

	Array.from(document.getElementsByClassName("theme-selector-btn")).forEach(
		(el) => {
			el.addEventListener("click", selectTheme);
		}
	);

	setTheme(localStorage.getItem("theme") || "neon");
});