import { Component } from '@angular/core';
import { NavbarComponent } from "../ui/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../ui/sidebar/sidebar.component";

@Component({
  selector: 'app-module-layout',
  imports: [NavbarComponent, RouterOutlet, SidebarComponent],
  templateUrl: './moduleLayout.component.html',
  styleUrl: './moduleLayout.component.css',
})
export class ModuleLayoutComponent { 
  
}
