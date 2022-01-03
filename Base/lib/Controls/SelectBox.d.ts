import React from "react";
import { FCKControls } from './protocols';
export declare type LabelView = {
    label: string;
    value: string;
};
export declare namespace SelectBox {
    interface Params extends FCKControls.Params {
        list: string[] | LabelView[];
    }
}
export declare const SelectBox: React.FunctionComponent<SelectBox.Params>;
//# sourceMappingURL=SelectBox.d.ts.map