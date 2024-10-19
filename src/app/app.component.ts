import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './Header/header-component/header-component.component';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'Inventario--App';
  autor: string='Jonathan Ayona';
  @ViewChild('menu') menu: HeaderComponent;
  constructor(
    private router: Router
  ) {}
  

  
  ngOnInit(): void {
    this.router.events.pipe(filter((event: Event) => event instanceof NavigationEnd)).subscribe(()=> {
      this.menu.getLogged();
    });
  }



  
}
