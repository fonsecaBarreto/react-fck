import React from "react";
export declare const StateAdapter: (initial_data: Record<string, any>) => {
    data: {
        get: Record<string, any>;
        set: React.Dispatch<React.SetStateAction<Record<string, any>>>;
        onInput: (key: string, value: string, capital?: boolean) => void;
        clear: () => void;
    };
    errors: {
        get: Record<string, any>;
        set: React.Dispatch<React.SetStateAction<Record<string, any>>>;
        clear: () => void;
    };
    loading: {
        get: boolean;
        set: React.Dispatch<React.SetStateAction<boolean>>;
    };
};
export default StateAdapter;
//# sourceMappingURL=StateAdapter.d.ts.map