import Service from '@ember/service';

export default class SessionService extends Service {
  isAuthenticated = false;
  currentUser = null;

  login(user) {
    this.isAuthenticated = true;
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  restore() {
    let user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser = JSON.parse(user);
      this.isAuthenticated = true;
    }
  }
}
