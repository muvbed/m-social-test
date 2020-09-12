window.addEventListener("load", () => {
	document.querySelector(".navigation__burger").addEventListener("click", () => {
		document.querySelector(".navigation__burger").classList.toggle("navigation__burger_active");
		document.querySelector(".navigation__layout_main").classList.toggle("navigation__layout_open");
	})

	document.querySelector("#invite").addEventListener("click", () => {
		document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + "px";
		document.body.classList.add("overflow-hidden");
		document.querySelector(".modal").classList.add("modal_show");
	})

	document.querySelector(".modal__close").addEventListener("click", () => {
		document.body.style.paddingRight = "0px";
		document.body.classList.remove("overflow-hidden");
		document.querySelector(".modal").classList.remove("modal_show");
	})

	window.addEventListener("mouseup", (e) => {
		if (!document.querySelector(".modal__box").contains(e.target) && document.querySelector(".modal").classList.contains('modal_show')) {
			document.body.style.paddingRight = "0px";
			document.body.classList.remove("overflow-hidden");
			document.querySelector(".modal").classList.remove("modal_show");
		}
	})

	window.addEventListener("keydown", (e) => {
		if (e.keyCode === 27 && document.querySelector(".modal").classList.contains('modal_show')) {
			document.body.style.paddingRight = "0px";
			document.body.classList.remove("overflow-hidden");
			document.querySelector(".modal").classList.remove("modal_show");
		}
	})

	document.querySelector("#form").addEventListener("submit", (e) => {
		let formInput = document.querySelector(".modal__input");

		document.querySelector(".modal__error").classList.remove("modal__error_show");

		if (formInput.value.match(/@/) && !formInput.value.match(/^\w[\w-]+@[\w-]+\.[a-z]{2,4}$/i) || !formInput.value.match(/[a-zа-я0-9]/i)) {
			e.preventDefault();
			document.querySelector(".modal__error").classList.add("modal__error_show");
		}
	})
})
