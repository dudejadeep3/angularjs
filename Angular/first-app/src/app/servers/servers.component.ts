import { Component, OnInit } from '@angular/core';

@Component({
  /* selector: '[app-servers]', */
  /*  selector: '.app-servers', */
  selector: 'app-servers',
  /* template: `<app-server></app-server>
             <app-server></app-server>
             <app-server></app-server>` */
  templateUrl: './servers.component.html'
})

export class ServersComponent implements OnInit {
  allowNewSevers = false;
  serverCreationStatus = 'No Server was created';
  serverName='TestServer';
  serverCreated=false;
  servers=['TestServer','TestServer2']

  constructor() {
    setTimeout(()=>{
      this.allowNewSevers=true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server was created '+this.serverName;
  }

  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
