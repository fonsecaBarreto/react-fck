import './style.css';
import { OnActionFunction } from '../Dialog';
export interface Options {
    label: string;
}
export declare function MakeOptions(onAction: OnActionFunction, options?: Options[], title?: string): import("../Dialog").DialogConfig;
export default MakeOptions;
//# sourceMappingURL=MakeOptions.d.ts.map