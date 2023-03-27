import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-english-irregular-verbs-page',
  templateUrl: './english-irregular-verbs-page.component.html',
  styleUrls: ['./english-irregular-verbs-page.component.css']
})
export class EnglishIrregularVerbsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formBuild: FormBuilder,
    private router: Router,  private http: HttpClient) {
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  onSubmit() {
    this.router.navigate(['confirmCheck']);
  }
}
