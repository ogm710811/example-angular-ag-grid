import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// import {AgGridModule} from "ag-grid-enterprise";

// Declaration Angular ag-grid enterprise
// Use this if you are using ECMA 6 imports to load ag-Grid Enterprise
import {LicenseManager} from "ag-grid-enterprise/main";
LicenseManager.setLicenseKey("ag-Grid_Evaluation_License_Not_For_Production_1Devs4_October_2017__MTUwNzA3MTYwMDAwMA==6423ab765c4b033274bc361920ba6b1b");

// application
import {AppComponent} from "./app.component";
// rich grid
import {RichGridComponent} from "./rich-grid-example/rich-grid.component";
import {DateComponent} from "./date-component/date.component";
import {HeaderComponent} from "./header-component/header.component";
import {HeaderGroupComponent} from "./header-group-component/header-group.component";
import {MasterdetailMasterComponent} from './masterdetail-master/masterdetail-master.component';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                // DateComponent,
                // HeaderComponent,
                // HeaderGroupComponent,
                DetailPanelComponent
            ]
        )
    ],
    declarations: [
        AppComponent,
        RichGridComponent,
        // DateComponent,
        // HeaderComponent,
        // HeaderGroupComponent,
        MasterdetailMasterComponent,
        DetailPanelComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
