import { cable } from "./cable/cable";

export interface cableAdapterPairs {
    cableGroup: number;
    cableId: number;
    cable: cable;
    id: number;
}