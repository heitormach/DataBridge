import { JucespModel } from './jucesp.model';
import { InfoCrimModel } from './infocrim.model';
import { DetranModel } from './detran.model';
import { CagedModel } from './caged.model';
import { CadespModel } from './cadesp.model';
import { ArpenspModel } from './arpensp.model';
import { ArispModel } from './arisp.model';
import { SielModel } from './siel.model';
import { SivecModel } from './sivec.model';
export interface RelatorioModel {
    arisp?: ArispModel;
    arpensp?: ArpenspModel;
    cadesp?: CadespModel;
    caged?: CagedModel;
    censec?: {};
    detran?: DetranModel;
    infocrim?: InfoCrimModel;
    jucesp?: JucespModel;
    siel?: SielModel;
    sivec?: SivecModel;
}
