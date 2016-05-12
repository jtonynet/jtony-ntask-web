import TinyEmitter from "tiny-emitter";
import Request from "browser-request";

class Ntask extends TinyEmitter {
	constructor() {
		super();
		this.request = Request;
		this.URL = "http://jtony-ntask-api.com";
	}
}

module.exports = Ntask;