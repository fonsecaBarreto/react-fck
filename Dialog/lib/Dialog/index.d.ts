import React, { ReactNode } from 'react';
import './style.css';
export declare type OnActionFunction = (n: any) => any;
export declare type DialogContent = React.FunctionComponent<{
    onAction: OnActionFunction;
}>;
export declare type DialogConfig = {
    content: DialogContent;
    title: string;
    icon: ReactNode;
    loading: boolean;
    onAction: OnActionFunction;
};
export declare type DialogProps = {
    config: DialogConfig;
    offset: number;
    show: boolean;
};
export declare const MakeDialogConfig: (content: DialogContent, onAction: OnActionFunction, title?: string, icon?: null, loading?: boolean) => DialogConfig;
export declare function Dialog({ config, offset, show }: DialogProps): JSX.Element;
export default Dialog;
//# sourceMappingURL=index.d.ts.map