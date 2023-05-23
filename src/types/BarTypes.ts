import { ReactNode } from "react";

export type SelectableItem =
| 'tree'
| 'house'
| 'wheat'
| 'windmill'
| 'road'
| 'remove'
| 'rotate'
| 'harvest'
| 'upgrade';


export interface IBarElement {
   internalName: SelectableItem;
   icon: ReactNode;
   isDisabled: boolean;
}

export interface ISlideOutBar {
   icon: ReactNode;
   barElements: IBarElement[]
}