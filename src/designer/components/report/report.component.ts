import BaseComponent from "../../../core/reactive/base.component";
import "./report.component.css";

export class Report extends BaseComponent {
    /**
     * Nome dinâmico do componente.
     */
    protected static selector = "report-editor";

    constructor() {
        super();
    }
    
    protected customHtml(): string {
        return `

        `;
    }

    protected attachEvents(): void {
        //const button = this.querySelector("#collapseButton") as HTMLButtonElement;
        //button?.addEventListener("click", this.toggleLeftPanel.bind(this));
    }
}