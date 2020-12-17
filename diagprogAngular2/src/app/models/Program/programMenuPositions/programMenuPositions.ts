import { cableAdapterPairs } from "./cableAdapterPairs/cableAdapterPairs";
import { menuPosition } from "./menuPosition/menuPosition";
import { programExtensions } from "./programExtensions/programExtensions";

export interface programMenuPositions {

    cableGroupId: number;
    cableAdapterPairs: cableAdapterPairs;
    documentationNumber: number;
    specials: number;
    programExtensions: programExtensions;
    menuPosition: menuPosition;
    

}