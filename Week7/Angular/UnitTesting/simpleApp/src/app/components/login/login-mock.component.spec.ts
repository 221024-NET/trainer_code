// login-mock.component.spec.ts
import { LoginComponent } from './login.component';

class MockAuthService {   // (1)
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('MockLoginComponent', () => {
  let component: LoginComponent;
  let service: MockAuthService;

  beforeEach(async () => {  // (2)
    service = new MockAuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    // service = null;
    // component = null;
  });

  it('needsLogin returns true when the user has not been authenticated', () => {
    service.authenticated = false;  // (3)
    expect(component.needsLogin()).toBeTruthy();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    service.authenticated = true;   // (3)
    expect(component.needsLogin()).toBeFalsy();
  });
});
