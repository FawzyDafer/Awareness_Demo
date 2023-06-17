import { Component, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DxTreeViewComponent } from 'devextreme-angular';
import 'devextreme/data/odata/store';
import { FileSystemItem, ServiceService } from 'src/app/shared/services/service.service';

@Component({
  templateUrl: 'tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})

export class TasksComponent {
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.ctrlKey = event;
    //console.log("this.ctrlKey",event)
  }
  @HostListener('document:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    // console.log("this.ctrlKey" , event);
    this.ctrlKey = event;
  }
  @HostListener('click', ['$event'])
  onClick(btn: any) {
    console.log("mouse click" )
    console.log("mouse click" ,!this.itemClicked)
    console.log("mouse click",this.ctrlElements.length>=1) 
    console.log("!this.ctrlKey.repeat",!this.ctrlKey.repeat)
    if (!this.ctrlKey.repeat && !this.itemClicked) {
      this.ctrlElements = [];
      this.itemsDriveC.forEach((element:any)=>{
        element.isDirectory=false;
        console.log(" element.isDirectory", element.isDirectory)
      });
    }
    this.itemClicked=false;
  }

  @ViewChild('treeviewDriveC') treeviewDriveC!: DxTreeViewComponent;
  @ViewChild('treeviewDriveD') treeviewDriveD!: DxTreeViewComponent;
  @ViewChild('Stepper') Stepper!:any;
  itemsDriveC: FileSystemItem[];
  itemsDriveD: FileSystemItem[];
  steps:any =[];
  popupVisible = false;
  productData: any;
  ctrlKey: any;
  ctrlElements: any = [];
  dragEnd: boolean = false;
  x: any = [];
  lists: any[] = [];
  selectedStep:any;
  IsSelectedStep:boolean = false;
  items!: FileSystemItem[];
  itemClicked: boolean=false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder ,service: ServiceService) {
    this.itemsDriveC = service.getItemsDriveC();
    this.itemsDriveD = service.getItemsDriveD();
    this.items = service.getItemsDriveD();
    this.ctrlKey={
      repeat:false
    }
    // this.items = service.getTasks().map((task) => task.Task_Subject);

    this.steps =[{
      stepId:1,
      stepName:"First Activity"
    },
    {
      stepId:2,
      stepName:"Second Activity"
    },{
      stepId:3,
      stepName:"Thired Activity"
    }]
  }

  onTaskadd(e: any) {
    // e.toData.forEach((element:any)=>{
    //   if(e.itemData.itemData.id===element.id){
    //     return;
      
    //   }
    //   console.log('is repeeted element')
    // })
    if(this.ctrlElements.length===1 && e.itemData.itemData=== this.ctrlElements[0]) this.ctrlElements=[];

    console.log("eeeeeTasks", e)
    console.log("ctrlElements inn onTaskadd ", this.ctrlElements)
    let i = 0;
    if (!this.ctrlElements.length) {
      e.toData.splice(e.toIndex, 0, e.itemData.itemData);
      console.log("eeeeeTasks", e)
    }
    else {
      if(this.dragEnd)e.toData.splice(e.toIndex, 0, e.itemData.itemData);
      this.ctrlElements.forEach((element: any) => {
        i++;
        e.toData.splice(e.toIndex, 0, element);
        console.log("element", element)
        console.log("eeeeeTasks   --" + i, e)
      })
    }
    // e.toData.splice(e.toIndex, 0, e.itemData);

    console.log("eeeeeTasks   --", e)
    // e.toData.splice(e.toIndex, 0, e.itemData);
  //  this.ctrlElements = [];
    this.dragEnd = true;
  }
  onReorder(e: any) {
    this.items.splice(e.fromIndex, 1);
    this.items.splice(e.toIndex, 0, e.itemData);
  }
  onDrop(e: any) {
    if (e.fromComponent === e.toComponent && e.fromIndex === e.toIndex) {
      return;
    }

    const fromTreeView = this.getTreeView(e.fromData);
    const toTreeView = this.getTreeView(e.toData);

    const fromNode = this.findNode(fromTreeView, e.fromIndex);
    const toNode = this.findNode(toTreeView, this.calculateToIndex(e));

    if (e.dropInsideItem && toNode !== null && !toNode.itemData.isDirectory) {
      return;
    }

    const fromTopVisibleNode = this.getTopVisibleNode(e.fromComponent);
    const toTopVisibleNode = this.getTopVisibleNode(e.toComponent);

    const fromItems = fromTreeView.option('items');
    const toItems = toTreeView.option('items');
    this.moveNode(fromNode, toNode, fromItems, toItems, e.dropInsideItem);

    fromTreeView.option('items', fromItems);
    toTreeView.option('items', toItems);
    fromTreeView.scrollToItem(fromTopVisibleNode);
    toTreeView.scrollToItem(toTopVisibleNode);
    console.log('eNode', e)
  }
  onDragStart(e: any) {
    e.itemData = e.fromData[e.fromIndex];
  }
  ///******************************************************** */
  onDragChange(e: any) {

    console.log('onDragChange', e)
    
    //  if (e.itemData.parent) {
    //   e.cancel = true;
    //   const fromNode = this.findNode(this.getTreeView(e.fromData), e.fromIndex);
    //   const toNode = this.findNode(this.getTreeView(e.toData), this.calculateToIndex(e));
    //   e.itemData = fromNode;
    //   console.log('fromNode', fromNode)
    //   console.log('toNode', toNode)
    //  } 
    //  else {
     // e.cancel = false;
      // if (e.fromComponent === e.toComponent) {
      const fromNode = this.findNode(this.getTreeView(e.fromData), e.fromIndex);
      const toNode = this.findNode(this.getTreeView(e.toData), this.calculateToIndex(e));
      e.itemData = fromNode;
      if(!fromNode.parent)
      {
        e.cancel = true;
      }
      else{
        e.cancel = false;
      }
      console.log('fromNode', fromNode)
      console.log('toNode', toNode)
      // if (toNode !== null && this.isChildNode(fromNode, toNode)) {
      //   e.cancel = true;
      // }
      //}
    //}
  }
  clickc(e:any){
    console.log('onItemClic', e)
  }
  onDragEnd(e: any) {
    
    console.log('onDragEnd', e)
    if (e.fromComponent === e.toComponent && e.fromIndex === e.toIndex) {
      return;
    }
    const fromTreeView = this.getTreeView(e.fromData);
    const toTreeView = this.getTreeView(e.toData);

    const fromNode = this.findNode(fromTreeView, e.fromIndex);
    const toNode = this.findNode(toTreeView, this.calculateToIndex(e));

     if (e.dropInsideItem && toNode !== null && !toNode.itemData.isDirectory) {
       return;
     }

    //const fromTopVisibleNode = this.getTopVisibleNode(e.fromComponent);
    // const toTopVisibleNode = this.getTopVisibleNode(e.toComponent);
    const fromItems = fromTreeView.option('items');
    const toItems = toTreeView.option('items');
    if(e.toData === e.fromData){
      this.moveNode(fromNode, toNode, fromItems, toItems, e.dropInsideItem);
    }
    console.log('toItems', toNode)
    //fromTreeView.option('items', fromItems);
   // toTreeView.option('items', toItems);
   // fromTreeView.scrollToItem(fromTopVisibleNode);
    //toTreeView.scrollToItem(toTopVisibleNode);
    console.log('toNode', toNode)
  }
  addChild(e: any) {


    console.log('text value', e)
    console.log('product value', this.productData)
    this.itemsDriveD.push({
      id: Date.now().toString(),
      parentId: this.productData.id,
      name: e,
      icon: 'file',
      isDirectory: false,
      expanded: true,
    })

    console.log('after addedd ', this.itemsDriveD)
  }
  showPopup(e: any) {
    this.productData = e;
    this.popupVisible = true;
  }
  getTreeView(driveName: any) {
    console.log('driveName', driveName)
    return driveName === 'driveC'
      ? this.treeviewDriveC.instance
      : this.treeviewDriveD.instance;
  }
  calculateToIndex(e: any) {
    if (e.fromComponent != e.toComponent || e.dropInsideItem) {
      return e.toIndex;
    }

    return e.fromIndex >= e.toIndex
      ? e.toIndex
      : e.toIndex + 1;
  }
  findNode(treeView: any, index: any) {
    const nodeElement = treeView.element().querySelectorAll('.dx-treeview-node')[index];
    if (nodeElement) {
      return this.findNodeById(treeView.getNodes(), nodeElement.getAttribute('data-item-id'));
    }
    return null;
  }
  findNodeById(nodes: any, id: any) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].itemData.id == id) {
        return nodes[i];
      }
      if (nodes[i].children) {
        const node: any = this.findNodeById(nodes[i].children, id);
        if (node != null) {
          return node;
        }
      }
    }
    return null;
  }
  moveNode(fromNode: any, toNode: any, fromItems: any, toItems: any, isDropInsideItem: any) {
    const fromIndex = fromItems.findIndex((item: any) => item.id == fromNode.itemData.id);
    fromItems.splice(fromIndex, 1);

    const toIndex = toNode === null || isDropInsideItem
      ? toItems.length
      : toItems.findIndex((item: any) => item.id == toNode.itemData.id);
    toItems.splice(toIndex, 0, fromNode.itemData);

    this.moveChildren(fromNode, fromItems, toItems);
    if (isDropInsideItem) {
      fromNode.itemData.parentId = toNode.itemData.id;
    } else {
      fromNode.itemData.parentId = toNode != null
        ? toNode.itemData.parentId
        : undefined;
    }
  }
  moveChildren(node: any, fromDataSource: any, toDataSource: any) {
    if (!node.itemData.isDirectory) {
      return;
    }

    node.children.forEach((child: any) => {
      if (child.itemData.isDirectory) {
        this.moveChildren(child, fromDataSource, toDataSource);
      }

      const fromIndex = fromDataSource.findIndex((item: any) => item.id == child.itemData.id);
      fromDataSource.splice(fromIndex, 1);
      toDataSource.splice(toDataSource.length, 0, child.itemData);
    });
  }
  isChildNode(parentNode: any, childNode: any) {
    let parent = childNode.parent;
    while (parent !== null) {
      if (parent.itemData.id === parentNode.itemData.id) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }
  getTopVisibleNode(component: any) {
    const treeViewElement = component.element();
    const treeViewTopPosition = treeViewElement.getBoundingClientRect().top;
    const nodes = treeViewElement.querySelectorAll('.dx-treeview-node');
    for (let i = 0; i < nodes.length; i++) {
      const nodeTopPosition = nodes[i].getBoundingClientRect().top;
      if (nodeTopPosition >= treeViewTopPosition) {
        return nodes[i];
      }
    }
    return null;
  }
  create(e: any) {
    console.log("creeeet", e);
  }
  enter(e: any) {

    // this.ctrlElements.forEach((element:any)=>{
    //   if(e.id === element.id) return;
    // })
    if(!e?.parentId)
    {
      console.log("exxx", e);
      if (!this.ctrlKey.repeat ) {
        this.itemsDriveC.forEach((element: any) => {
          element.isDirectory = element.id === e.id ? true : false;
        })
        this.ctrlElements = [];
       
      }
      if (this.ctrlElements.length > 0 && this.ctrlKey?.repeat && this.ctrlKey?.key === "Control") {
        this.itemsDriveC.forEach((element: any) => {
          if (element.id === e.id) element.isDirectory = true;
        })
      }
    }else{
      if (!this.ctrlKey.repeat) {
        this.itemsDriveC.forEach((element: any) => {
          element.isDirectory = element.id === e.id ? true : false;
        })
        this.ctrlElements = [];
        let node = e;
        this.ctrlElements[0] = node;
      }
      if (this.ctrlElements.length > 0 && this.ctrlKey?.repeat && this.ctrlKey?.key === "Control") {
        this.itemsDriveC.forEach((element: any) => {
          if (element.id === e.id) element.isDirectory = true;
        })
        this.ctrlElements.forEach((element:any,index:any)=>{
          if(e.id === element.id){
            this.ctrlElements.splice(index,1)
          }
        })
        this.ctrlElements.push(e);

      }
      console.log("e", e);
    }
    console.log("this.ctrlElements", this.ctrlElements);
    console.log("this.x", this.x);
    this.itemClicked =true;
  }


  // activities 
  addActivity(){
    this.steps.push({
      stepId:6,
      stepName:"Last Activity"
    })
  }

  OpenActivity(data:any){
   this.selectedStep =data ;
    this.IsSelectedStep = !this.IsSelectedStep;
    console.log(" this.IsSelectedStep" ,this.IsSelectedStep)
  //  this.Stepper.select();
  }
  

}
