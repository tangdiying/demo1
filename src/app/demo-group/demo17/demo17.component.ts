import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo17',
  templateUrl: './demo17.component.html',
  styleUrls: ['./demo17.component.css']
})
export class Demo17Component implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  // sortName: string | null = null;
  // sortValue: string | null = null;
  // searchAddress: string;
  // listOfName = [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }];
  // listOfAddress = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
  // listOfSearchName: string[] = [];
  // listOfData: Array<{ name: string; age: number; address: string; [key: string]: string | number }> = [
  //   {
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   },
  //   {
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park'
  //   },
  //   {
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park'
  //   },
  //   {
  //     name: 'Jim Red',
  //     age: 32,
  //     address: 'London No. 2 Lake Park'
  //   }
  // ];
  // listOfDisplayData: Array<{ name: string; age: number; address: string; [key: string]: string | number }> = [
  //   ...this.listOfData
  // ];

  // sort(sort: { key: string; value: string }): void {
  //   this.sortName = sort.key;
  //   this.sortValue = sort.value;
  //   this.search();
  // }

  // filter(listOfSearchName: string[], searchAddress: string): void {
  //   this.listOfSearchName = listOfSearchName;
  //   this.searchAddress = searchAddress;
  //   this.search();
  // }

  // search(): void {
  //   /** filter data **/
  //   const filterFunc = (item: { name: string; age: number; address: string }) =>
  //     (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
  //     (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
  //   const data = this.listOfData.filter(item => filterFunc(item));
  //   /** sort data **/
  //   if (this.sortName && this.sortValue) {
  //     this.listOfDisplayData = data.sort((a, b) =>
  //       this.sortValue === 'ascend'
  //         ? a[this.sortName!] > b[this.sortName!]
  //           ? 1
  //           : -1
  //         : b[this.sortName!] > a[this.sortName!]
  //         ? 1
  //         : -1
  //     );
  //   } else {
  //     this.listOfDisplayData = data;
  //   }
  // }







  sortName: string | null = null;
  sortValue: string | null = null;
  // searchAddress: string;
  // listOfName = [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }];
  // listOfAddress = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
  // listOfSearchName: string[] = [];
  listOfData: Array<{ name: string; age: number; address: string; [key: string]: string | number }> = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  listOfDisplayData: Array<{ name: string; age: number; address: string; [key: string]: string | number }> = [
    ...this.listOfData
  ];

  handleSort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    console.log('1',this.listOfDisplayData)
    debugger
    this.listOfDisplayData = this.listOfDisplayData.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
    console.log('2',this.listOfDisplayData)
  }
}
