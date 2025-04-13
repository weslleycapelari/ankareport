import BaseComponent from "../../../core/reactive/base.component";
import { Properties } from "../properties";
import "./top-bar.component.css";

export class TopBar extends BaseComponent {
    /**
     * Nome dinâmico do componente.
     */
    protected static selector = "top-bar";

    constructor() {
        super();
        this.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-background top-navbar");
    }
    
    protected customHtml(): string {
        return `
            <ul class="navbar-nav">
                <li class="nav-item text-center dropdown" style="width: 2.5rem;">
                    <button class="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <ul class="dropdown-menu">
                        <li *ngFor="let item of menuItems">
                        <a class="dropdown-item" href="#">{{ item }}</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item text-center" style="width: 2.5rem;">
                    <a class="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M3 2.5c0-.276.224-.5.5-.5s.5.224.5.5v3.843l3.171-3.171c1.562-1.563 4.095-1.563 5.657 0 1.562 1.562 1.562 4.094 0 5.656l-5.025 5.026c-.195.195-.512.195-.707 0-.196-.196-.196-.512 0-.708l5.025-5.025c1.171-1.171 1.171-3.071 0-4.242-1.172-1.172-3.071-1.172-4.243 0L4.757 7H8.5c.276 0 .5.224.5.5s-.224.5-.5.5H3.6c-.331 0-.6-.269-.6-.6V2.5Z"></path>
                        </svg>
                    </a>
                </li>
                <li class="nav-item text-center" style="width: 2.5rem;">
                    <a class="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M12.999 2.5c0-.276-.223-.5-.5-.5-.276 0-.5.224-.5.5v3.843L8.828 3.172c-1.562-1.563-4.094-1.563-5.656 0-1.563 1.562-1.563 4.094 0 5.656l5.025 5.026c.195.195.512.195.707 0 .195-.196.195-.512 0-.708L3.879 8.121c-1.172-1.171-1.172-3.071 0-4.242 1.171-1.172 3.071-1.172 4.242 0L11.243 7H7.499c-.276 0-.5.224-.5.5s.224.5.5.5h4.9c.332 0 .6-.269.6-.6V2.5Z"></path>
                        </svg>
                    </a>
                </li>
                <li class="nav-item flex-fill text-center d-flex">
                    <span class="nav-link title">Untitled *</span>
                </li>
                <li class="nav-item text-center" style="width: 2.5rem;">
                    <button class="nav-link" href="#" id="toggleRightPanel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M48 416c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320zm16 64c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480zm64-224c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"/>
                        </svg>
                    </button>
                </li>
            </ul>
        `;
    }

    protected attachEvents(): void {
        const button = this.querySelector("#toggleRightPanel") as HTMLButtonElement;
        button?.addEventListener("click", () => {
            const leftPanel = document.querySelector("#rightPanel") as Properties;
            leftPanel.toggleRightPanel();
        });
    }
}