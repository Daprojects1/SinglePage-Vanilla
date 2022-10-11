import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Home')
    }

    async getHtml() {
        return `
        <div>
           <p>Welcome to the home page</p>
        </div>
        `
    }
}