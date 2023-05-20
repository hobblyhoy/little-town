import { ReactNode } from "react";

export type SelectableItem =
| 'tree'
| 'house'
| 'wheat'
| 'windmill'
| 'road'
| 'remove'
| 'rotate'
| 'harvest';


export interface IBarElement {
   internalName: SelectableItem;
   icon: ReactNode;
}

export interface ISlideOutBar {
   icon: ReactNode;
   barElements: IBarElement[]
}