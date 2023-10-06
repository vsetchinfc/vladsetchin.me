import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogComponent } from './blog.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [BlogComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vladsetchin.me'`, () => {
    const fixture = TestBed.createComponent(BlogComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('vladsetchin.me');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('vladsetchin.me app is running!');
  });
});
