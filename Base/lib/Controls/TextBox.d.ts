import React from "react";
import { FCKControls } from './protocols';
export declare enum TextBoxTypes {
    TEXT = "text",
    VIEW = "view",
    TEXTAREA = "textarea",
    NUMBER = "number",
    PASSWORD = "password"
}
export declare namespace TextBox {
    interface Params extends FCKControls.Params {
        type: TextBoxTypes;
    }
}
export declare const TextBox: React.FunctionComponent<TextBox.Params>;
//# sourceMappingURL=TextBox.d.ts.map