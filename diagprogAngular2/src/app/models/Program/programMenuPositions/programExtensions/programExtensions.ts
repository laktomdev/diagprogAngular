export interface programExtensions {
    message: string;

    required: 
        {
            number: number;
            functionality: {
                value: number;
                diagnostics: boolean;
                advServiceEdition: boolean;
                dashboardProgramming: boolean;
                immobiliser: boolean;
                crashErase: boolean;
                eepromRW: boolean;
                flashRW: boolean;
                advDiagnostics: boolean;
                advFunctions: boolean;
            };
        }
    ;
    optional: {};

}