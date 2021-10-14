import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reports:any[] = [];
  file?: File;
  displayedColumns: string[] = ['transactionRef', 'description'];
  errorMessage?: String


  constructor(private homeService: HomeService) { }

  ngOnInit() {}

   selectFile(event: any): void {
    this.file = event.target.files[0];
  }

  validateFile() {
    const selectedFile = this.file;
    if(selectedFile) {
      this.homeService.validateFile(selectedFile).subscribe(
        (data: any) => {
          this.errorMessage = undefined;
         this.reports = data.reports
        },
        (err: any) => {
          this.reports = [];
          if(err.status == 400) {
            this.errorMessage = err.error.errorDescription;
          } else {
            this.errorMessage = "Sorry something went wrong. Please try again later";
          }
        }
      );
    }
  }
}


