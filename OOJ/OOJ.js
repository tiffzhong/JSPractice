class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} logged out`);
    return this;
  }
  increment() {
    this.score += 1;
    console.log(`score: ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email); //looks for parent class for their constructor
    this.title = title; //unique to this class
  }
  deleteUser(user) {
    users = users.filter(u => u.username !== user.username);
  }
}

const userOne = new User("mario", "tiff@gmail");
const userTwo = new User("tiff", "tiff@yahoo");
const userThree = new Admin("tiffz", "tiff@hotmail", "pm");
console.log(userOne, userTwo);

// userOne.login();
// userOne.logout();
// userOne
//   .login()
//   .increment()
//   .increment()
//   .increment();
// console.log(userOne);

let users = [userOne, userTwo, userThree];

// userThree.deleteUser(userThree);

console.log(users);
