// welcome.component.spec
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockUserService } from 'src/app/services/Mock/mock-user-service';
import { UserService } from 'src/app/services/user.service';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let comp: WelcomeComponent;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // provide the component-under-test and dependent service.
      providers: [
        WelcomeComponent,
        { provide: UserService, useClass: MockUserService }
      ],
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();

    // inject both the component and the dependent service.
    comp = TestBed.inject(WelcomeComponent);
    userService = TestBed.inject(UserService);

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have welcome message after construction', () => {
    expect(comp.welcome).toBe('');
  });
  
  it('should welcome logged in user after Angular calls ngOnInit', () => {
    comp.ngOnInit();
    expect(comp.welcome).toContain(userService.user.name);
  });
  
  it('should ask user to log in if not logged in after ngOnInit', () => {
    userService.isLoggedIn = false;
    comp.ngOnInit();
    expect(comp.welcome).not.toContain(userService.user.name);
    expect(comp.welcome).toContain('log in');
  });
});
