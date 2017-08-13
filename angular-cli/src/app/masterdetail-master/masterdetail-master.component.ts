import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GridOptions } from "ag-grid/main";
import { DetailPanelComponent} from "../detail-panel/detail-panel.component";

@Component({
  selector: 'app-masterdetail-master',
  templateUrl: './masterdetail-master.component.html',
  styleUrls: ['./masterdetail-master.component.css']
})
export class MasterdetailMasterComponent implements OnInit, AfterViewInit {
  public gridOptions: GridOptions;

  constructor() { 
    this.gridOptions = <GridOptions>{};
    this.gridOptions.rowData = this.createRowData();
    this.gridOptions.columnDefs = this.createColumnDefs();
  }

  ngOnInit() {
  }

  // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
  // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
  ngAfterViewInit() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  private createColumnDefs() {
    return [
        {
            headerName: 'Name', field: 'containerName',
            // left column is going to act as group column, with the expand / contract controls
            cellRenderer: 'group',
            // we don't want the child count - it would be one each time anyway as each parent
            // not has exactly one child node
            cellRendererParams: {suppressCount: true}
        },
        {headerName: 'ID', field: 'id'},
        {headerName: 'STATUS', field: 'status'},
        {headerName: 'LAST EDIT', field: 'lastEdit', cellFormatter: this.minuteCellFormatter}
    ];
  }

  public isFullWidthCell(rowNode) {
    return rowNode.level === 1;
  }

  public getFullWidthCellRenderer() {
    return DetailPanelComponent;
  }

  public getRowHeight(params) {
    var rowIsDetailRow = params.node.level === 1;
    // return 50 when detail row, otherwise return 25
    return rowIsDetailRow ? 80 : 25;
  }

  public getNodeChildDetails(record) {
      if (record.containerName) {
          return {
              group: true,
              // the key is used by the default group cellRenderer
              key: record.containerName,
              // provide ag-Grid with the children of this group
              children: [record.containerName],
              // for demo, expand the third row by default
              //expanded: record.account === 177002
          };
      } else {
          return null;
      }
  }

  private createRowData() {
    let rowData: any[] = [];

    for (let i = 0; i < 20; i++) {
        // Get random item from containerName array [duplicate]
        let containerName = this.containerNames[Math.floor(Math.random() * this.containerNames.length)];
        let lastName = this.containerStatus[Math.floor(Math.random() * this.containerStatus.length)];
        //let image = this.images[i % this.images.length];

        // let totalDuration = 0;

        // let callRecords = [];
        // // call count is random number between 20 and 120
        // let callCount = Math.floor(Math.random() * 100) + 20;
        // for (let j = 0; j < callCount; j++) {
        //     // duration is random number between 20 and 120
        //     let callDuration = Math.floor(Math.random() * 100) + 20;
        //     let callRecord = {
        //         callId: this.callIdSequence++,
        //         duration: callDuration,
        //         switchCode: 'SW' + Math.floor(Math.random() * 10),
        //         // 50% chance of in vs out
        //         direction: (Math.random() > .5) ? 'In' : 'Out',
        //         // made up number
        //         number: '(0' + Math.floor(Math.random() * 10) + ') ' + Math.floor(Math.random() * 100000000)
        //     };
        //     callRecords.push(callRecord);
        //     totalDuration += callDuration;
        // }

        // create a random id
        let id = '';
        let createIds = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var z = 0; z < 9; z++) {
          id += createIds.charAt(Math.floor(Math.random() * createIds.length))          
        }

        //create random last date edited
        let lastEdited = this.randomDate( new Date(2012, 0, 1), new Date() );


        let record = {
            containerName: containerName, //+ ' ' + lastName,
            //id: i + 177000,
            id: id,
            //status: callCount,
            status: lastName,
            //image: image,
            // convert from seconds to minutes
            // lastEdit: totalDuration / 60,
            lastEdit: lastEdited,
            //callRecords: callRecords
        };
        rowData.push(record);
    }

    return rowData;
  }

  private minuteCellFormatter(params) {
    return params.value.toLocaleString() + 'm';
  };


  //*************************************************************************************
  // DATA TO DISPLAY
  //*************************************************************************************

   // a list of names we pick from when generating data
  //  private firstnames: string[] = ['Sophia', 'Emma', 'Olivia', 'Isabella', 'Mia', 'Ava', 'Lily', 'Zoe', 'Emily', 'Chloe', 'Layla', 'Madison', 'Madelyn', 'Abigail', 'Aubrey', 'Charlotte', 'Amelia', 'Ella', 'Kaylee', 'Avery', 'Aaliyah', 'Hailey', 'Hannah', 'Addison', 'Riley', 'Harper', 'Aria', 'Arianna', 'Mackenzie', 'Lila', 'Evelyn', 'Adalyn', 'Grace', 'Brooklyn', 'Ellie', 'Anna', 'Kaitlyn', 'Isabelle', 'Sophie', 'Scarlett', 'Natalie', 'Leah', 'Sarah', 'Nora', 'Mila', 'Elizabeth', 'Lillian', 'Kylie', 'Audrey', 'Lucy', 'Maya'];
  private containerNames: string[] = ['BRAND_Website_LandindPage_1', 'BRAND_Website_LandindPage_2', 'BRAND_Website_LandindPage_3', 'BRAND_Website_LandindPage_4', 'BRAND_Website_LandindPage_5', 'BRAND_Website_Promo_1', 'BRAND_Website_Promo_2', 'BRAND_Website_Promo_3', 'BRAND_Website_Promo_4', 'BRAND_Website_Promo_5', 'BRAND_Website_Retargeting_1', 'BRAND_Website_Retargeting_2', 'BRAND_Website_Retargeting_3', 'BRAND_Website_Retargeting_4', 'BRAND_Website_Retargeting_1'];
  // private lastnames: string[] = ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Johnson'];
  private containerStatus: string[] = ['Committed', 'Pending'];
  
   private images: string[] = ['niall', 'sean', 'alberto', 'statue', 'horse'];

   // each call gets a unique id, nothing to do with the grid, just help make the sample
   // data more realistic
   private callIdSequence: number = 555;

  private randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  } 
}
