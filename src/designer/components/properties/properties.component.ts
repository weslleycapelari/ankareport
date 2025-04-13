import BaseComponent from "../../../core/reactive/base.component";
import "./properties.component.css";

export class Properties extends BaseComponent {
    /**
     * Nome dinâmico do componente.
     */
    protected static selector = "element-properties";

    /**
     * Estado do painel direito: expandido ou colapsado.
     */
    protected rightPanelState: "expanded" | "collapsed" = "collapsed";

    toggleRightPanel(): void {
        this.rightPanelState = this.rightPanelState === 'collapsed' ? 'expanded' : 'collapsed';
        this.updateState();
    }

    private updateState(): void {
        this.setAttribute("ag-state", this.rightPanelState);
    }

    constructor() {
        super();
        this.updateState();
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