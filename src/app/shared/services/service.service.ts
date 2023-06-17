import { Injectable } from '@angular/core';

export class Task {
  id: number;

  text: string;
  constructor() {
    this.id = 0;
    this.text = '';
  }
}
const doingTasks: Task[] = [
  { id: 1, text: 'Prepare 2019 Financial' },
  { id: 2, text: 'Prepare 2019 Marketing Plan' },
  { id: 3, text: 'Update Personnel Files' },
  { id: 4, text: 'Review Health Insurance Options Under the Affordable Care Act' },
];
const plannedTasks: Task[] = [
  { id: 5, text: 'New Brochures' },
  { id: 6, text: '2019 Brochure Designs' },
  { id: 7, text: 'Brochure Design Review' },
  { id: 8, text: 'Website Re-Design Plan' },
  { id: 9, text: 'Rollout of New Website and Marketing Brochures' },
  { id: 10, text: 'Create 2018 Sales Report' },
  { id: 11, text: 'Direct vs Online Sales Comparison Report' },
  { id: 12, text: 'Review 2018 Sales Report and Approve 2019 Plans' },
  { id: 13, text: 'Submit Signed NDA' },
  { id: 14, text: 'Update Revenue Projections' },
  { id: 15, text: 'Review Revenue Projections' },
  { id: 16, text: 'Comment on Revenue Projections' },
  { id: 17, text: 'Scan Health Insurance Forms' },
  { id: 18, text: 'Sign Health Insurance Forms' },
  { id: 19, text: 'Follow up with West Coast Stores' },
  { id: 20, text: 'Follow up with East Coast Stores' },
  { id: 21, text: 'Submit Refund Report for 2019 Recall' },
  { id: 22, text: 'Give Final Approval for Refunds' },
  { id: 23, text: 'Prepare Product Recall Report' },
  { id: 24, text: 'Review Product Recall Report by Engineering Team' },
  { id: 25, text: 'Review Training Course for any Omissions' },
  { id: 26, text: 'Review Overtime Report' },
  { id: 27, text: 'Submit Overtime Request Forms' },
  { id: 28, text: 'Overtime Approval Guidelines' },
  { id: 29, text: 'Create Report on Customer Feedback' },
  { id: 30, text: 'Review Customer Feedback Report' },
  { id: 31, text: 'Customer Feedback Report Analysis' },
  { id: 32, text: 'Prepare Shipping Cost Analysis Report' },
  { id: 33, text: 'Complete Shipper Selection Form' },
  { id: 34, text: 'Upgrade Server Hardware' },
  { id: 35, text: 'Upgrade Personal Computers' },
  { id: 36, text: 'Approve Personal Computer Upgrade Plan' },
  { id: 37, text: 'Estimate Time Required to Touch-Enable Apps' },
  { id: 38, text: 'Report on Tranistion to Touch-Based Apps' },
  { id: 39, text: 'Try New Touch-Enabled WinForms Apps' },
  { id: 40, text: 'Site Up-Time Report' },
  { id: 41, text: 'Review Site Up-Time Report' },
  { id: 42, text: 'Review Online Sales Report' },
  { id: 43, text: 'Determine New Online Marketing Strategy' },
  { id: 44, text: 'Submit New Website Design' },
  { id: 45, text: 'Create Icons for Website' },
  { id: 46, text: 'Review PSDs for New Website' },
  { id: 47, text: 'Create New Shopping Cart' },
  { id: 48, text: 'Launch New Website' },
  { id: 49, text: 'Update Customer Shipping Profiles' },
  { id: 50, text: 'Create New Shipping Return Labels' },
];
const tasks = [{
  Task_ID: 28,
  Task_Assigned_Employee_ID: 7,
  Task_Owner_ID: 1,
  Task_Subject: 'Prepare 2015 Financial',
  Task_Start_Date: '2015-01-15T00:00:00',
  Task_Due_Date: '2015-01-31T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 1,
}, {
  Task_ID: 29,
  Task_Assigned_Employee_ID: 4,
  Task_Owner_ID: 1,
  Task_Subject: 'Prepare 2015 Marketing Plan',
  Task_Start_Date: '2015-01-01T00:00:00',
  Task_Due_Date: '2015-01-31T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 1,
}, {
  Task_ID: 30,
  Task_Assigned_Employee_ID: 2,
  Task_Owner_ID: 1,
  Task_Subject: 'Review Health Insurance Options Under the Affordable Care Act',
  Task_Start_Date: '2015-02-12T00:00:00',
  Task_Due_Date: '2015-04-25T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 50,
  Task_Parent_ID: 2,
}, {
  Task_ID: 31,
  Task_Assigned_Employee_ID: 1,
  Task_Owner_ID: 2,
  Task_Subject: 'Choose between PPO and HMO Health Plan',
  Task_Start_Date: '2015-02-15T00:00:00',
  Task_Due_Date: '2015-04-15T00:00:00',
  Task_Status: 'In Progress',
  Task_Priority: 4,
  Task_Completion: 75,
  Task_Parent_ID: 2,
}, {
  Task_ID: 32,
  Task_Assigned_Employee_ID: 1,
  Task_Owner_ID: 4,
  Task_Subject: 'Google AdWords Strategy',
  Task_Start_Date: '2015-02-16T00:00:00',
  Task_Due_Date: '2015-02-28T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 29,
}, {
  Task_ID: 34,
  Task_Assigned_Employee_ID: 28,
  Task_Owner_ID: 1,
  Task_Subject: '2015 Brochure Designs',
  Task_Start_Date: '2015-02-19T00:00:00',
  Task_Due_Date: '2015-02-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 3,
  Task_Completion: 100,
  Task_Parent_ID: 3,
}, {
  Task_ID: 35,
  Task_Assigned_Employee_ID: 29,
  Task_Owner_ID: 28,
  Task_Subject: 'Brochure Design Review',
  Task_Start_Date: '2015-02-19T00:00:00',
  Task_Due_Date: '2015-02-22T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 34,
}, {
  Task_ID: 36,
  Task_Assigned_Employee_ID: 29,
  Task_Owner_ID: 28,
  Task_Subject: 'Website Re-Design Plan',
  Task_Start_Date: '2015-02-19T00:00:00',
  Task_Due_Date: '2015-02-24T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 34,
}, {
  Task_ID: 37,
  Task_Assigned_Employee_ID: 4,
  Task_Owner_ID: 1,
  Task_Subject: 'Rollout of New Website and Marketing Brochures',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-28T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 3,
}, {
  Task_ID: 38,
  Task_Assigned_Employee_ID: 8,
  Task_Owner_ID: 4,
  Task_Subject: 'Update Sales Strategy Documents',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-22T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 29,
}, {
  Task_ID: 39,
  Task_Assigned_Employee_ID: 41,
  Task_Owner_ID: 8,
  Task_Subject: 'Create 2012 Sales Report',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-21T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 29,
}]
const employees = [{
  ID: 1,
  Name: 'John Heart',
}, {
  ID: 2,
  Name: 'Samantha Bright',
}, {
  ID: 3,
  Name: 'Arthur Miller',
}, {
  ID: 4,
  Name: 'Robert Reagan',
}, {
  ID: 5,
  Name: 'Greta Sims',
}, {
  ID: 6,
  Name: 'Brett Wade',
}, {
  ID: 7,
  Name: 'Sandra Johnson',
}, {
  ID: 8,
  Name: 'Ed Holmes',
}, {
  ID: 9,
  Name: 'Barb Banks',
}, {
  ID: 10,
  Name: 'Kevin Carter',
}, {
  ID: 11,
  Name: 'Cindy Stanwick',
}, {
  ID: 12,
  Name: 'Sammy Hill',
}]
export class Product {
  ID?: string;
  name?: string;
  categoryId?: string;
  image?: string;
  price?: number;
}

const IMAGE_URL = "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/";
const products: Product[] = [
  {
    ID: "1",
    name: "Stores"
  }, {
    ID: "1_1",
    categoryId: "1",
    name: "Super Mart of the West"
  }, {
    ID: "1_1_1",
    categoryId: "1_1",
    name: "Video Players"
  }, {
    ID: "1_1_1_1",
    categoryId: "1_1_1",
    name: "HD Video Player",
    image: IMAGE_URL + "1.png",
    price: 220
  }, {
    ID: "1_1_1_2",
    categoryId: "1_1_1",
    name: "SuperHD Video Player",
    image: IMAGE_URL + "2.png",
    price: 270
  }, {
    ID: "1_1_2",
    categoryId: "1_1",
    name: "Televisions"
  }, {
    ID: "1_1_2_1",
    categoryId: "1_1_2",
    name: "SuperLCD 42",
    image: IMAGE_URL + "7.png",
    price: 1200
  }, {
    ID: "1_1_2_2",
    categoryId: "1_1_2",
    name: "SuperLED 42",
    image: IMAGE_URL + "5.png",
    price: 1450
  }, {
    ID: "1_1_2_3",
    categoryId: "1_1_2",
    name: "SuperLED 50",
    image: IMAGE_URL + "4.png",
    price: 1600
  }, {
    ID: "1_1_2_4",
    categoryId: "1_1_2",
    name: "SuperLCD 55",
    image: IMAGE_URL + "6.png",
    price: 1750
  }, {
    ID: "1_1_2_5",
    categoryId: "1_1_2",
    name: "SuperLCD 70",
    image: IMAGE_URL + "9.png",
    price: 4000
  }, {
    ID: "1_1_3",
    categoryId: "1_1",
    name: "Monitors"
  }, {
    ID: "1_1_3_1",
    categoryId: "1_1_3",
    name: "19\"",
  }, {
    ID: "1_1_3_1_1",
    categoryId: "1_1_3_1",
    name: "DesktopLCD 19",
    image: IMAGE_URL + "10.png",
    price: 160
  }, {
    ID: "1_1_4",
    categoryId: "1_1",
    name: "Projectors"
  }, {
    ID: "1_1_4_1",
    categoryId: "1_1_4",
    name: "Projector Plus",
    image: IMAGE_URL + "14.png",
    price: 550
  }, {
    ID: "1_1_4_2",
    categoryId: "1_1_4",
    name: "Projector PlusHD",
    image: IMAGE_URL + "15.png",
    price: 750
  }
];
export class FileSystemItem {
  id?: string;

  parentId?: string;

  name?: string;

  icon?: string;

  isDirectory?: boolean;

  expanded?: boolean;
}
const itemsDriveD: FileSystemItem[] = [{
  id: '1',
  name: 'تعزيز استخدام الادوات الرقميه',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '2',
  parentId: '1',
  name: 'رفع وعي المستوويين',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '3',
  parentId: '2',
  name: ' اعداد تقنيات تخدم الامسوي الاداري ',
  icon: 'file',
  isDirectory: false,
  expanded: true,
},{
  id: '1',
  name: 'تعزيز استخدام الادوات الرقميه',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '2',
  parentId: '1',
  name: 'رفع وعي المستوويين',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '3',
  parentId: '2',
  name: ' اعداد تقنيات تخدم الامسوي الاداري ',
  icon: 'file',
  isDirectory: false,
  expanded: true,
},{
  id: '1',
  name: 'تعزيز استخدام الادوات الرقميه',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '2',
  parentId: '1',
  name: 'رفع وعي المستوويين',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '3',
  parentId: '2',
  name: ' اعداد تقنيات تخدم الامسوي الاداري ',
  icon: 'file',
  isDirectory: false,
  expanded: true,
},{
  id: '1',
  name: 'تعزيز استخدام الادوات الرقميه',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '2',
  parentId: '1',
  name: 'رفع وعي المستوويين',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '3',
  parentId: '2',
  name: ' اعداد تقنيات تخدم الامسوي الاداري ',
  icon: 'file',
  isDirectory: false,
  expanded: true,
},{
  id: '1',
  name: 'تعزيز استخدام الادوات الرقميه',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '2',
  parentId: '1',
  name: 'رفع وعي المستوويين',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '3',
  parentId: '2',
  name: ' اعداد تقنيات تخدم الامسوي الاداري ',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, ];
const itemsDriveC: FileSystemItem[] = [{
  id: '1',
  name: 'Documents',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '2',
  parentId: '1',
  name: 'Projects',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '3',
  parentId: '2',
  name: 'About.rtf',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '4',
  parentId: '2',
  name: 'Passwords.rtf',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '5',
  parentId: '2',
  name: 'About.xml',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '6',
  parentId: '2',
  name: 'Managers.rtf',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '7',
  parentId: '2',
  name: 'ToDo.txt',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '8',
  name: 'Images',
  isDirectory: false,
  icon: 'activefolder',
  expanded: true,
}, {
  id: '9',
  parentId: '8',
  name: 'logo.png',
  isDirectory: false,
  icon: 'file',
  expanded: true,
}, {
  id: '10',
  parentId: '8',
  name: 'banner.gif',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '11',
  name: 'System',
  icon: 'activefolder',
  isDirectory: false,
  expanded: true,
}, {
  id: '12',
  parentId: '11',
  name: 'Employees.txt',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '13',
  parentId: '11',
  name: 'PasswordList.txt',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '14',
  name: 'Description.rtf',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}, {
  id: '15',
  name: 'Description.txt',
  icon: 'file',
  isDirectory: false,
  expanded: true,
}];

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getTasks() {
    return tasks;
  }
  getEmployees() {
    return employees;
  }
  getDoingTasks(): Task[] {
    return doingTasks;
  }

  getPlannedTasks(): Task[] {
    return plannedTasks;
  }

  getItemsDriveC(): FileSystemItem[] {
    return itemsDriveC;
  }

  getItemsDriveD(): FileSystemItem[] {
    return itemsDriveD;
  }
}
