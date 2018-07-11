import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onResize(event)
  {
    document.getElementById('full-screen-me').style.height = window.innerHeight +'px';
  }
  

}
