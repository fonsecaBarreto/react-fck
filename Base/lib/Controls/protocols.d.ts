export declare namespace StateAdapter {
    type Handler = {
        data: {
            onInput: (key: string, value: any, captial?: boolean) => void;
            get: Record<string, any>;
            set: (params: Record<string, any>) => void;
            clear: () => void;
        };
        errors: {
            get: Record<string, any>;
            set: (params: Record<string, any>) => void;
            clear: () => void;
        };
        loading: {
            get: boolean;
            set: (params: boolean) => void;
        };
    };
}
export declare namespace FCKControls {
    type Params = {
        name: string;
        label?: string;
        state: StateAdapter.Handler;
        placeHolder?: string;
        className?: string;
    };
}
//# sourceMappingURL=protocols.d.ts.map