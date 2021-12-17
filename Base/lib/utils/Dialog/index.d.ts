import React, { ReactNode } from 'react';
import './style.css';
export declare type DialogContent = React.FunctionComponent<{
    onAction: Function;
}>;
export declare type DialogConfig = {
    content: DialogContent;
    title: string;
    icon: ReactNode;
    loading: boolean;
    onAction: Function;
};
export declare type DialogProps = {
    config: DialogConfig;
    offset: number;
    show: boolean;
};
export declare function Dialog({ config, offset, show }: DialogProps): JSX.Element;
export default Dialog;
//# sourceMappingURL=index.d.ts.map