import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('About')
    }

    async getHtml() {
        return `
        <div>
           <p>Welcome to the about page</p>
        </div>
        `
    }
}