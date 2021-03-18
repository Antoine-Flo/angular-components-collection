import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  currentPage = 0;

  checkWindowIndex(i: number) {
    if(i - this.currentPage < 4 && i - this.currentPage >= 0) return true
    if(this.images.length - i < 5 && this.images.length - this.currentPage < 4) return true
    return false
  }

  images = [
    {
      title: 'Some photo',
      url: 'https://picsum.photos/id/1003/400',
    },
    {
      title: 'Another one',
      url: 'https://picsum.photos/id/1002/400',
    },
    {
      title: 'Beautiful',
      url: 'https://picsum.photos/id/10/400',
    },
    {
      title: 'I like that',
      url: 'https://picsum.photos/id/1000/400',
    },
    {
      title: 'Some photo',
      url: 'https://picsum.photos/id/1003/400',
    },
    {
      title: 'Another one',
      url: 'https://picsum.photos/id/1002/400',
    },
    {
      title: 'Beautiful',
      url: 'https://picsum.photos/id/10/400',
    },
    {
      title: 'I like that',
      url: 'https://picsum.photos/id/1000/400',
    },
    {
      title: 'Some photo',
      url: 'https://picsum.photos/id/1003/400',
    },
    {
      title: 'Another one',
      url: 'https://picsum.photos/id/1002/400',
    },
    {
      title: 'Beautiful',
      url: 'https://picsum.photos/id/10/400',
    },
    {
      title: 'I like that',
      url: 'https://picsum.photos/id/1000/400',
    },
  ];

}
