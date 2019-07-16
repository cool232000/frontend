import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/core/service/root.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private rootService: RootService) { }

  ngOnInit() {
  }

}
