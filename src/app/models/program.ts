import {PricingInfo} from './pricingInfo';
export interface Program {
    programIdent: number;
    programName: string;
    isActive: boolean;
    createDate: Date;
    menuPositions: number;
    pricingInfo: PricingInfo;
    programPackages: string;
    id: number;
}
