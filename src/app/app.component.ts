import { Component, OnInit, Renderer2, ElementRef } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'
import { VERSION as VERSION_VX, TitleService } from '@knz/theme'
import { VERSION as VERSION_ZORRO, NzModalService } from 'ng-zorro-antd'

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-vx-version', VERSION_VX.full)
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full)
  }

  ngOnInit() {
    this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => {
      this.titleSrv.setTitle()
      this.modalSrv.closeAll()
    })
  }
}
