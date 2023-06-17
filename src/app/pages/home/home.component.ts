import { Component, OnInit, ViewChild, enableProdMode } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';

import { ServiceService, Task } from 'src/app/shared/services/service.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ],
  preserveWhitespaces: true,
})

export class HomeComponent implements OnInit {
  @ViewChild('treeviewDriveC') treeviewDriveC!: DxTreeViewComponent ;
  items: string[];
  
  lists: any[] = [];
  doingTasks: Task[];
  epic:any[]=[];

  plannedTasks: Task[];
  statuses: string[] = ['Not Started', 'Need Assistance', 'In Progress', 'Deferred', 'Completed'];

  employees: Object = {};

  dropFeedbackMode: string;

  itemOrientation: string;

  dragDirection: string;

  dragDirections: string[];

  scrollSpeed: number;

  scrollSensitivity: number;

  handle: string;

  dragTemplate: string;
  itemsDriveC;
  cursorOffset: any;
  constructor(service: ServiceService) {
    this.items = service.getTasks().map((task) => task.Task_Subject);
    this.epic =service.getTasks().map((task) => task.Task_Subject); 
    this.dropFeedbackMode = 'push';
    this.itemOrientation = 'vertical';
    this.dragDirection = 'both';
    this.dragDirections = ['both', 'vertical'];
    this.scrollSpeed = 30;
    this.scrollSensitivity = 60;
    this.handle = '';
    this.dragTemplate = '';
    this.cursorOffset = null;
    const tasks = service.getTasks();
    this.statuses.forEach((status) => {
      this.lists.push(tasks.filter((task) => task.Task_Status === status));
    });
    this.doingTasks = service.getDoingTasks();
    this.plannedTasks = service.getPlannedTasks();
    this.itemsDriveC = service.getItemsDriveC();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // onDragStart(e:any) {
  //   e.itemData = this.items[e.fromIndex];
  // }

  onReorder(e:any) {
    this.items.splice(e.fromIndex, 1);
    this.items.splice(e.toIndex, 0, e.itemData);
  }

  onItemOrientationChanged(e:any) {
    this.dragDirections = ['both', e.value];
    this.dragDirection = 'both';
  }

  onHandleChanged(e:any) {
    this.handle = e.value ? '.handle' : '';
  }

  onDragTemplateChanged(e:any) {
    this.dragTemplate = e.value ? 'drag' : '';
    this.cursorOffset = e.value ? { x: 10, y: 20 } : null;
  }
  files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

// onRemove(event:any) {
//   console.log(event);
//   this.files.splice(this.files.indexOf(event), 1);
// }

onListReorder(e:any) {
  const list = this.lists.splice(e.fromIndex, 1)[0];
  this.lists.splice(e.toIndex, 0, list);

  const status = this.statuses.splice(e.fromIndex, 1)[0];
  this.statuses.splice(e.toIndex, 0, status);
}

onTaskDragStart(e:any) {
  e.fromData.splice()
  e.itemData = e.fromData[e.fromIndex];
}

onTaskDrop(e:any) {
  console.log("eeeeeeee",e)
  e.fromData.splice(e.fromIndex, 1);
  e.toData.splice(e.toIndex, 0, e.itemData);
}
onTaskadd(e:any){
  console.log("eeeee",e)
  e.toData.splice(e.toIndex, 0, e.itemData);
}
onDragStart(e:any) {
  e.itemData = e.fromData[e.fromIndex];
}

onAdd(e:any) {
  e.toData.splice(e.toIndex, 0, e.itemData);
}

onRemove(e:any) {
  e.fromData.splice(e.fromIndex, 1);
}

onDragChange(e:any) {
  if (e.fromComponent === e.toComponent) {
    const fromNode = this.findNode(this.getTreeView(e.fromData), e.fromIndex);
    const toNode = this.findNode(this.getTreeView(e.toData), this.calculateToIndex(e));
    if (toNode !== null && this.isChildNode(fromNode, toNode)) {
      e.cancel = true;
    }
  }
}

onDragEnd(e:any) {
  console.log("eeeeefawzy",e)
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
}

getTreeView(driveName:any) {
  return this.treeviewDriveC.instance;
}

calculateToIndex(e:any) {
  if (e.fromComponent != e.toComponent || e.dropInsideItem) {
    return e.toIndex;
  }

  return e.fromIndex >= e.toIndex
    ? e.toIndex
    : e.toIndex + 1;
}

findNode(treeView:any, index:any) {
  const nodeElement = treeView.element().querySelectorAll('.dx-treeview-node')[index];
  if (nodeElement) {
    return this.findNodeById(treeView.getNodes(), nodeElement.getAttribute('data-item-id'));
  }
  return null;
}

findNodeById(nodes:any, id:any) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].itemData.id == id) {
      return nodes[i];
    }
    if (nodes[i].children) {
      const node:any = this.findNodeById(nodes[i].children, id);
      if (node != null) {
        return node;
      }
    }
  }
  return null;
}

moveNode(fromNode:any, toNode:any, fromItems:any, toItems:any, isDropInsideItem:any) {
  const fromIndex = fromItems.findIndex((item:any) => item.id == fromNode.itemData.id);
  fromItems.splice(fromIndex, 1);

  const toIndex = toNode === null || isDropInsideItem
    ? toItems.length
    : toItems.findIndex((item:any) => item.id == toNode.itemData.id);
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

moveChildren(node:any, fromDataSource:any, toDataSource:any) {
  if (!node.itemData.isDirectory) {
    return;
  }

  node.children.forEach((child:any) => {
    if (child.itemData.isDirectory) {
      this.moveChildren(child, fromDataSource, toDataSource);
    }

    const fromIndex = fromDataSource.findIndex((item:any) => item.id == child.itemData.id);
    fromDataSource.splice(fromIndex, 1);
    toDataSource.splice(toDataSource.length, 0, child.itemData);
  });
}

isChildNode(parentNode:any, childNode:any) {
  let parent = childNode.parent;
  while (parent !== null) {
    if (parent.itemData.id === parentNode.itemData.id) {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}

getTopVisibleNode(component:any) {
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
}


