import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from '@angular/router';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular'; // AG Grid Component
import { ColDef, GetGroupIncludeFooterParams, GridApi, GridOptions, GridReadyEvent, ICellRendererParams, ValueGetterParams } from 'ag-grid-community'; // Column Definition Type Interface
import olympicData from './olympic-data.json';
import 'ag-grid-enterprise';
export interface IOlympicData {
  athlete: string,
  age: number | null,
  country: string,
  year: number,
  date: string,
  sport: string,
  gold: number,
  silver: number,
  bronze: number,
  total: number
}
// Add buttons, checkboxes or images to cells with a Cell Component.
@Component({
  standalone: true,
  template: `<button (click)="buttonClicked()">Push Me!</button>`,
 })
 export class CustomButtonComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true;
  }
  buttonClicked() {
    alert("clicked");
  }
 }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgGridAngular, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'agGrid';
  private gridApi!: GridApi<any>;
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];

  public rowDataGrouped: IOlympicData[] = olympicData;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // fetch('https://www.ag-grid.com/example-assets/olympic-winners')
    // .then(response => response.json())
    // .then(data => {
    //   this.gridApi.setGridOption("rowData", data);
    // });
  }

  onGridReady(params: GridReadyEvent) {
    // this.http
    //   .get<
    //     IOlympicData[]
    //   >("https://www.ag-grid.com/example-assets/olympic-winners.json")
    //   .subscribe((data) => (this.rowDataGrouped = data));
  }

  /*
  Column Definitions: Defines the columns to be displayed.

  The field or valueGetter attributes Map Data to Columns. A field maps to a field in the data. 
  A Value Getter is a function callback that returns the cell value.

  The headerName provides the title for the header. If missing the title is derived from field.

  Format text for cell content using a Value Formatter.

  Columns are Resized by dragging the Column Header edges. Additionally assign flex values to allow columns to flex to the grid width.
  
  Column Filters are embedded into each column menu. 
  These are enabled using the filter attribute. The filter type is inferred from the cell data type.
  */
  // columnDefs: ColDef[] = [

  //   { field: "make", flex: 2 },
  //  // { headerName: "Make & Model", valueGetter: (p: ValueGetterParams) => p.data.make + ' ' + p.data.model, flex: 2 },
  //   // { field: "price", valueFormatter: p => '£' + Math.floor(p.value).toLocaleString(), flex: 1 },
  //   { field: "model", flex: 1 },
  //   { field: "price", flex: 1 },
  //   { field: "electric", flex: 1 },
  //   { field: "button", cellRenderer: CustomButtonComponent, flex: 1 }
  // ];

  /*
  Working with Data
  By default, the row data is used to infer the Cell Data Type. The cell data type allows grid features, such as filtering 
  and editing, to work without additional configuration.

  Column Filters are embedded into each column menu. 
  These are enabled using the filter attribute. The filter type is inferred from the cell data type.

  There are 5 Provided Filters which can be set through this attribute. You can also create your own Custom Filter.

  Floating Filters embed the Column Filter into the header for ease of access.

  Enable Editing by setting the editable attribute to true. The cell editor is inferred from the cell data type.

  Set the cell editor type using the cellEditor attribute. 
  There are 7 Provided Cell Editors which can be set through this attribute. You can also create your own Custom Editors.

  Sorting 
  Data is Sorted by clicking the column headers. Sorting is enabled by default.

  Row Selection 
  Row Selection is enabled using the rowSelection attribute. Use the checkboxSelection column definition attribute to render checkboxes for selection.
  */
  // columnDefs: ColDef[] = [

  //   // { field: "make", editable: true, filter: true, floatingFilter: true, flex: 2 },
  //   { 
  //     field: "make",
  //     editable: true, 
  //     cellEditor: 'agSelectCelLEditor',
  //     cellEditorParams: {
  //       values: ['Tesla', 'Ford', 'Toyota'],
  //     },
  //     checkboxSelection: true
  //   },
  //   { field: "model", flex: 1 },
  //   { field: "price", flex: 1 },
  //   { field: "electric", flex: 1 },
  //   { field: "button", cellRenderer: CustomButtonComponent, flex: 1 }
  // ];

  buttonClicked() {
    alert("clicked");
  }

   // Row Data: The data to be displayed.
  // rowData = [
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
  //   { make: 'Fiat', model: '500', price: 15774, electric: false },
  //   { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  // ];

  public rowData: any[] | null = [
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      month: "June",
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      month: "October",
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      month: "August",
    },
    {
      make: "Mercedes",
      model: "EQA",
      price: 48890,
      electric: true,
      month: "February",
    },
    {
      make: "Fiat",
      model: "500",
      price: 15774,
      electric: false,
      month: "January",
    },
    {
      make: "Nissan",
      model: "Juke",
      price: 20675,
      electric: false,
      month: "March",
    },
    {
      make: "Vauxhall",
      model: "Corsa",
      price: 18460,
      electric: false,
      month: "July",
    },
    {
      make: "Volvo",
      model: "EX30",
      price: 33795,
      electric: true,
      month: "September",
    },
    {
      make: "Mercedes",
      model: "Maybach",
      price: 175720,
      electric: false,
      month: "December",
    },
    {
      make: "Vauxhall",
      model: "Astra",
      price: 25795,
      electric: false,
      month: "April",
    },
    {
      make: "Fiat",
      model: "Panda",
      price: 13724,
      electric: false,
      month: "November",
    },
    {
      make: "Jaguar",
      model: "I-PACE",
      price: 69425,
      electric: true,
      month: "May",
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      month: "June",
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      month: "October",
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      month: "August",
    },
    {
      make: "Mercedes",
      model: "EQA",
      price: 48890,
      electric: true,
      month: "February",
    },
    {
      make: "Fiat",
      model: "500",
      price: 15774,
      electric: false,
      month: "January",
    },
    {
      make: "Nissan",
      model: "Juke",
      price: 20675,
      electric: false,
      month: "March",
    },
    {
      make: "Vauxhall",
      model: "Corsa",
      price: 18460,
      electric: false,
      month: "July",
    },
    {
      make: "Volvo",
      model: "EX30",
      price: 33795,
      electric: true,
      month: "September",
    },
    {
      make: "Mercedes",
      model: "Maybach",
      price: 175720,
      electric: false,
      month: "December",
    },
    {
      make: "Vauxhall",
      model: "Astra",
      price: 25795,
      electric: false,
      month: "April",
    },
    {
      make: "Fiat",
      model: "Panda",
      price: 13724,
      electric: false,
      month: "November",
    },
    {
      make: "Jaguar",
      model: "I-PACE",
      price: 69425,
      electric: true,
      month: "May",
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      month: "June",
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      month: "October",
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      month: "August",
    },
    {
      make: "Mercedes",
      model: "EQA",
      price: 48890,
      electric: true,
      month: "February",
    },
    {
      make: "Fiat",
      model: "500",
      price: 15774,
      electric: false,
      month: "January",
    },
    {
      make: "Nissan",
      model: "Juke",
      price: 20675,
      electric: false,
      month: "March",
    },
    {
      make: "Vauxhall",
      model: "Corsa",
      price: 18460,
      electric: false,
      month: "July",
    },
    {
      make: "Volvo",
      model: "EX30",
      price: 33795,
      electric: true,
      month: "September",
    },
    {
      make: "Mercedes",
      model: "Maybach",
      price: 175720,
      electric: false,
      month: "December",
    },
    {
      make: "Vauxhall",
      model: "Astra",
      price: 25795,
      electric: false,
      month: "April",
    },
    {
      make: "Fiat",
      model: "Panda",
      price: 13724,
      electric: false,
      month: "November",
    },
    {
      make: "Jaguar",
      model: "I-PACE",
      price: 69425,
      electric: true,
      month: "May",
    },
  ];

  public groupedColumnDefs: ColDef[] = [
    { field: 'athlete' },
    { field: 'age' },
    { field: 'country', rowGroup: true, hide: true },
    { field: 'sport' },
    { field: 'year' },
    { field: 'date' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];

  public groupedGridOptions: GridOptions = {
    columnDefs: this.groupedColumnDefs,
    groupRemoveSingleChildren: true,
    groupIncludeFooter: (params: GetGroupIncludeFooterParams) => {
      const node = params.node;
      if (node && node.level === 1) return true;
      if (node && node.key === "France") return true;
  
      return false;
    },
  }


  public columnDefs: ColDef[] = [
    {
      field: "make",
      checkboxSelection: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: [
          "Tesla",
          "Ford",
          "Toyota",
          "Mercedes",
          "Fiat",
          "Nissan",
          "Vauxhall",
          "Volvo",
          "Jaguar",
        ],
      },
      sortIndex: 1,
      sort: 'asc',
    },
    { field: "model", sortIndex: 2,  sort: 'asc'},
    { field: "price", filter: "agNumberColumnFilter", sortIndex: 3,  sort: 'asc', },
    { field: "electric" },
    {
      field: "month",
      comparator: (valueA, valueB) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const idxA = months.indexOf(valueA);
        const idxB = months.indexOf(valueB);
        return idxA - idxB;
      },
    },
  ];

}
