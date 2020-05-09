import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  toast: Array<any> = [];
  constructor(private toastService: ToastService) { }

  ngOnInit() {

   this.toastService.toastChanged.subscribe((data: any) => {
    console.log('data--->', data);
    this.toast.push(data);
   });
  }
}
