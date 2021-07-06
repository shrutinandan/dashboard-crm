import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isNavbarCollapsed = true;
  public isCollapsedNotification = false;
  public menuItemList: any;
  public modulesList: any;

  constructor() {}

  ngOnInit() {
    this.menuItemList = [
      {
        id: 'menuItem1',
        category: 'Inspiration',
        submenu: [
          {
            id: 'submenuItem1',
            name: 'Explore Design Work',
            value: 'Trending designs to inspire you',
          },
          {
            id: 'submenuItem2',
            name: 'New & Noteworthy',
            value: 'Up-and-coming designers',
          },
          {
            id: 'submenuItem3',
            name: 'Explore Design ',
          },
        ],
      },
      {
        id: 'menuItem2',
        category: 'Find Work ',
        submenu: [
          {
            id: 'menuItem2',
            name: 'Explore Design ',
          },
          {
            id: 'menuItem3',
            name: 'Explore Design ',
          },
          {
            id: 'menuItem4',
            name: 'Explore Design ',
          },
        ],
      },
      {
        id: 'menuItem3',
        category: 'Learn Design ',
        submenu: [
          {
            id: 'menuItem2',
            name: 'Explore Design ',
          },
          {
            id: 'menuItem3',
            name: 'Explore Design ',
          },
          {
            id: 'menuItem4',
            name: 'Explore Design ',
          },
        ],
      },
      {
        id: 'menuItem4',
        category: 'Go Pro ',
        submenu: [
          {
            id: 'menuItem2',
            name: 'Explore Design ',
          },
          {
            id: 'menuItem3',
            name: 'Explore Design ',
          },
          {
            id: 'menuItem4',
            name: 'Explore Design ',
          },
        ],
      },
      {
        id: 'menuItem5',
        category: 'Hire Designers',
        submenu: [
          {
            id: 'menuItem2',
            name: 'Explore Design ',
          },
          {
            id: 'menuItem3',
            name: 'Explore Design ',
          },
          {
            id: 'menuItem4',
            name: 'Explore Design ',
          },
        ],
      },
    ];

    this.modulesList = [
      {
        label: 'User',
        children: [
          {
            label: 'User 1',
            children: [
              {
                label: 'User 5',
              },
              {
                label: 'User 6',
              },
              {
                label: 'User 7',
              },
            ],
          },
          {
            label: 'User 2',
            children: [
              {
                label: 'User 8',
              },
              {
                label: 'User 9',
              },
              {
                label: 'User 10',
              },
            ],
          },
          {
            label: 'User 3',
          },
          {
            label: 'User 4',
          },
        ],
      },
      {
        label: 'Management',
        children: [
          {
            label: 'Management 1',
            children: [
              {
                label: 'Management 2',
              },
              {
                label: 'Management 3',
              },
              {
                label: 'Management 4',
              },
            ],
          },
        ],
      },
      {
        label: 'Admin',
        children: [
          {
            label: 'Admin 1',
          },
          {
            label: 'Admin 2',
          },
          {
            label: 'Admin 3',
          },
          {
            label: 'Admin 4',
          },
        ],
      },
    ];
  }
}
