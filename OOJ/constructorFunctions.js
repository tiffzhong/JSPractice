//prototype inheritance model

function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function() {
  console.log(`${this.username} logged in`);
  return this;
};
User.prototype.logout = function() {
  console.log(`${this.username} logged out`);
  return this;
};
function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function() {
  //delete user
};
const userOne = new User("tiff", "tiff@gmail");
const userTwo = new User("jess", "jess@gmail");
const userThree = new Admin("vince", "vince@gmail", "brother");

console.log(userOne, userTwo);
console.log(userThree);
