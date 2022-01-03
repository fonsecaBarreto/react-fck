import React from "react";
import './style.css';
export declare type ColumnConfig = {
    sm: number;
    lg: number;
};
export declare namespace FormGrid {
    type Params = {
        title?: string;
        children: React.ReactNode;
        columns: {
            sm: number;
            lg: number;
        }[] | number[];
        freeze?: boolean;
        icon?: React.ReactNode;
    };
}
export declare const FormGrid: React.FunctionComponent<FormGrid.Params>;
export default FormGrid;
//# sourceMappingURL=index.d.ts.map