import { BaseReportComponent } from "../core/components/base";
import { TextComponent } from "../core/components/text";
import BaseComponent from "../core/reactive/base.component";
import "./designer.component.css";

export default class AnkaReportDesigner extends BaseComponent {
    protected static selector = "anka-report-designer";

    protected reportComponents: (new () => BaseReportComponent)[] = [
        TextComponent,
    ];
    
    protected customHtml(): string {
        return `
            <left-menu></left-menu>
            <div class="designer-body">
                <top-bar></top-bar>
                <div class="editor-area">
                    <report-editor></report-editor>
                    <element-properties id="rightPanel"></element-properties>
                </div>
            </div>
        `;
    }
}