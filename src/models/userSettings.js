export default class UserSettings {
  constructor(email, oldPassword, newPassword, newPasswordCopy) {
    this.email = email;
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
    this.newPasswordCopy = newPasswordCopy;
  }
}
