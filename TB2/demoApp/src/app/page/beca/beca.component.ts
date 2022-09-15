import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beca',
  templateUrl: './beca.component.html',
  styleUrls: ['./beca.component.css']
})
export class BecaComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
