export function SimpleSA(initial_data: any): {
    data: {
        get: any;
        set: React.Dispatch<any>;
        handleInputs: (key: any, value: any, capital: any) => void;
        clear: () => void;
    };
    errors: {
        get: {};
        set: React.Dispatch<React.SetStateAction<{}>>;
        clear: () => void;
    };
    loading: {
        get: boolean;
        set: React.Dispatch<React.SetStateAction<boolean>>;
    };
};
export default SimpleSA;
//# sourceMappingURL=SimpleSA.d.ts.map