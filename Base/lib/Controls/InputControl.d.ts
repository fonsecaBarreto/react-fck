/// <reference types="react" />
export declare namespace InputControl {
    enum InputTypes {
        TEXT = 0,
        NUMBER = 1,
        PASSWORD = 2,
        TEXTAREA = 3,
        SELECT = 4,
        SELECTVIEW = 5,
        VIEWBOX = 6
    }
    type Specs = any;
    type Params = {
        state: any;
        name: string;
        label?: string;
        placeholder?: string;
        type: InputTypes;
        specs: Specs;
        childre: React.ReactNode;
    };
}
export declare const InputControlComponent: React.FunctionComponent<InputControl.Params>;
export default Inputcontrol;
//# sourceMappingURL=InputControl.d.ts.map