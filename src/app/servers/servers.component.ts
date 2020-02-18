import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => this.allowNewServer = true, 8000);
  }

  ngOnInit() {
  }

  onCreatedServer() {
    this.serverCreationStatus = 'Server was created: ' + this.serverName;
  }


  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
