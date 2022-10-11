import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Settings')
    }

    async getHtml() {
        return `
        <div>
           <p>Welcome to the settings page</p>
        </div>
        `
    }
}