export class BaseReportComponent {
    getTitle(): string {
        return "Textbox";
    }
    
    getIcon(): string {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fill="currentColor" d="M5.75 3A3.75 3.75 0 0 0 2 6.75v10.5A3.75 3.75 0 0 0 5.75 21h12.5A3.75 3.75 0 0 0 22 17.25V6.75A3.75 3.75 0 0 0 18.25 3H5.75ZM3.5 6.75A2.25 2.25 0 0 1 5.75 4.5h12.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H5.75a2.25 2.25 0 0 1-2.25-2.25V6.75Z"></path>
                <path fill="currentColor" d="M15.5 7.5h-2.75v9h.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5h.5v-9H8.5v.75a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 7.75 6h8.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V7.5Z"></path>
            </svg>
        `;
    }
}