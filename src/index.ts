import Designer, { DesignerOptions } from "./designer/designer";
import Renderer, { RendererOptions } from "./renderer/renderer";
import AnkaReportDesigner from "./designer/designer.component";
import { LeftMenu } from "./designer/components/left-menu";
import { TopBar } from "./designer/components/top-bar";
import { Report } from "./designer/components/report";
import * as pkg from "../package.json";
import "./index.css";
import { Properties } from "./designer/components/properties";

AnkaReportDesigner.register();
LeftMenu.register();
TopBar.register();
Report.register();
Properties.register();

export const version = pkg.version as string;

export function designer(options: DesignerOptions) {
  return new Designer(options);
}

export function render(options: RendererOptions) {
  return new Renderer(options);
}
