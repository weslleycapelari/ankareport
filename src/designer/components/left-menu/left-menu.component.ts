import BaseComponent from "../../../core/reactive/base.component";
import "./left-menu.component.css";

export class LeftMenu extends BaseComponent {
    /**
     * Nome dinâmico do componente.
     */
    protected static selector = "left-menu";

    /**
     * Estado do painel esquerdo: expandido ou colapsado.
     */
    protected leftPanelState: "expanded" | "collapsed" = "collapsed";

    toggleLeftPanel(): void {
        this.leftPanelState = this.leftPanelState === 'collapsed' ? 'expanded' : 'collapsed';
        this.updateState();
    }

    private updateState(): void {
        this.setAttribute("ag-state", this.leftPanelState);
    }

    constructor() {
        super();
        this.updateState();
    }
    
    protected customHtml(): string {
        return `
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305.4 251.25">
                    <path fill="currentColor" d="M152.75,0,0,251.25H305.4ZM49.69,209.56l10.79-17.71,23.28-5.79a15.14,15.14,0,0,0,9.37-6.91L95.6,175v0l57.28-94.82,12-19.93,11,18.1-6.09,19.44a15.25,15.25,0,0,0,1.05,11.6l2.12,4,50.61,83.76,0,.11,19.9,33h-21L206.16,214a15.14,15.14,0,0,0-10.74-4.47Z" />
                </svg>
            </div>
            <div class="panel-section">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <button type="button" class="btn btn-primary btn-block left-panel-button" id="collapseButton" data-bs-toggle="tooltip" data-bs-title="Collapse/Expand" data-bs-delay="1500">
                            <span class="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect fill="currentColor" x="3" y="3" width="18" height="1.5"/>
                                    <rect fill="currentColor" x="3" y="11.375" width="18" height="1.5"/>
                                    <rect fill="currentColor" x="3" y="19.5" width="18" height="1.5"/>
                                </svg>      
                            </span>
                            <span class="text">
                                Close
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="panel-section">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <button type="button" class="btn btn-primary btn-block left-panel-button" data-bs-toggle="tooltip" data-bs-title="Explorer" data-bs-delay="1500">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path fill="currentColor" d="M4.25 16v-1.75A2.25 2.25 0 0 1 6.5 12h4.75V8.5h1.5V12h4.75a2.25 2.25 0 0 1 2.25 2.25V16h-1.5v-1.75a.75.75 0 0 0-.75-.75h-4.75V16h-1.5v-2.5H6.5a.75.75 0 0 0-.75.75V16h-1.5Z"></path>
                                    <path fill="currentColor" d="M5 15a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6Zm0 1.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 5 16.5Zm7-1.5a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6Zm0 1.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12 16.5Zm7-1.5a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6Zm0 1.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 19 16.5Zm-7-13a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6ZM12 5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12 5Z"></path>
                                </svg>
                            </span>
                            <span class="text">
                                Explorer
                            </span>
                        </button>
                    </li>
                    <li class="list-group-item">
                        <button type="button" class="btn btn-primary btn-block left-panel-button" data-bs-toggle="tooltip" data-bs-title="Group Editor" data-bs-delay="1500">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path fill="currentColor" d="M22 13.75v5.5A2.751 2.751 0 0 1 19.25 22h-5.5A2.751 2.751 0 0 1 11 19.25v-5.5A2.751 2.751 0 0 1 13.75 11h5.5A2.751 2.751 0 0 1 22 13.75ZM12.5 17v2.25c0 .69.56 1.25 1.25 1.25H16V17h-3.5Zm4.5 3.5h2.25c.69 0 1.25-.56 1.25-1.25V17H17v3.5Zm3.5-4.5v-2.25c0-.69-.56-1.25-1.25-1.25H17V16h3.5ZM16 12.5h-2.25c-.69 0-1.25.56-1.25 1.25V16H16v-3.5Z"></path>
                                    <path fill="currentColor" fill-opacity=".62" d="M9 17v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2Zm-1 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3ZM22 4v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2Zm-1 0a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4Z"></path>
                                    <path fill="currentColor" d="M6.25 12a.75.75 0 0 1-1.5 0V8.016c0-.866.344-1.697.957-2.309a3.263 3.263 0 0 1 2.309-.957H12a.75.75 0 0 1 0 1.5H8.016A1.766 1.766 0 0 0 6.25 8.016V12ZM5 19h-.5a.5.5 0 0 1 0-1H5v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1H6v.5a.5.5 0 0 1-1 0V19ZM18 6h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1H19v.5a.5.5 0 0 1-1 0V6Z"></path>
                                </svg>
                            </span>
                            <span class="text">
                                Group Editor
                            </span>
                        </button>
                    </li>
                    <li class="list-group-item">
                        <button type="button" class="btn btn-primary btn-block left-panel-button" data-bs-toggle="tooltip" data-bs-title="Layers" data-bs-delay="1500">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path fill="currentColor" d="M20.257 13.745a1.994 1.994 0 0 1-.779 2.29l-6.049 4.084c-.846.57-1.953.57-2.798 0l-6.05-4.084a2.001 2.001 0 0 1-.779-2.29l6.841 4.56a2.498 2.498 0 0 0 2.613.098l.161-.098 6.84-4.56Z"></path>
                                    <path fill="currentColor" fill-opacity=".38" d="M20.055 12.187a1.982 1.982 0 0 1-.577.598l-6.049 4.084c-.846.57-1.953.57-2.798 0l-6.05-4.084a2.001 2.001 0 0 1-.779-2.29l6.841 4.56a2.498 2.498 0 0 0 2.613.098l.161-.098 6.84-4.56a1.994 1.994 0 0 1-.202 1.692Z"></path>
                                    <path fill="currentColor" d="m13.417 3.42 6.365 4.243a1.001 1.001 0 0 1 0 1.664l-6.365 4.244a2.5 2.5 0 0 1-2.774 0L4.278 9.327a.998.998 0 0 1 0-1.664l6.365-4.243a2.5 2.5 0 0 1 2.774 0Zm-1.826 1.182-.116.066-5.74 3.827 5.74 3.828a1 1 0 0 0 .994.066l.116-.066 5.739-3.828-5.739-3.827a1 1 0 0 0-.994-.066Z"></path>
                                </svg>
                            </span>
                            <span class="text">
                                Layers
                            </span>
                        </button>
                    </li>
                    <li class="list-group-item">
                        <button type="button" class="btn btn-primary btn-block left-panel-button" data-bs-toggle="tooltip" data-bs-title="Libraries" data-bs-delay="1500">
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <path fill="currentColor" fill-opacity=".15" d="M5.5 12.5h13v8.047h-13z"></path>
                                    <path fill="currentColor" d="M20 5.25v13.5A3.251 3.251 0 0 1 16.75 22h-9.5A3.251 3.251 0 0 1 4 18.75V5.25A3.251 3.251 0 0 1 7.25 2h9.5A3.251 3.251 0 0 1 20 5.25ZM18.5 11V5.25a1.75 1.75 0 0 0-1.75-1.75h-9.5A1.75 1.75 0 0 0 5.5 5.25V11h13Zm-13 1.5v6.25c0 .966.784 1.75 1.75 1.75h9.5a1.75 1.75 0 0 0 1.75-1.75V12.5h-13Z"></path>
                                    <path fill="currentColor" d="M9.2 7c-.386 0-.7-.336-.7-.75s.314-.75.7-.75h5.6c.386 0 .7.336.7.75s-.314.75-.7.75H9.2Zm0 9c-.386 0-.7-.336-.7-.75s.314-.75.7-.75h5.6c.386 0 .7.336.7.75s-.314.75-.7.75H9.2Z"></path>
                                </svg>
                            </span>
                            <span class="text">
                                Libraries
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
            <hr>
        `;
    }

    protected attachEvents(): void {
        const button = this.querySelector("#collapseButton") as HTMLButtonElement;
        button?.addEventListener("click", this.toggleLeftPanel.bind(this));
    }
}