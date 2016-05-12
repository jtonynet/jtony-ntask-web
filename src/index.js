import App from "./app.js";

window.onload = () => {
	/*var nome = `José Antonio`;
	alert(`Bem-vindo ${nome} show`);*/

	const main = document.querySelector("main");
	new App(main).init();
}