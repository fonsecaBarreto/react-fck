import './style.css';
import { OnActionFunction } from '../Dialog';
export declare enum NotificationType {
    SUCCESS = 0,
    FAILURE = 1,
    INFO = 2,
    CONFIRMATION = 3
}
export declare function MakeNotification(onAction: OnActionFunction, messages: string[] | undefined, title: string | undefined, type: NotificationType): import("../Dialog").DialogConfig;
export default MakeNotification;
//# sourceMappingURL=MakeNotification.d.ts.map