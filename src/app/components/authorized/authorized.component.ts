import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrl: './authorized.component.css'
})
export class AuthorizedComponent implements OnInit {

  code = '';

  constructor(
    private activatedRoute: ActivatedRoute, private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( data => {
      this.code = data['code'];
      this.router.navigate(['/authorized']);
    });

  }

  
}