export const localStorageFacade = {
  setName(data: string) {
    localStorage.setItem("name", data);
  },
  setSurname(data: string) {
    localStorage.setItem("surname", data);
  },
  setLogin(data: string) {
    localStorage.setItem("login", data);
  },
  setEmail(data: string) {
    localStorage.setItem("email", data);
  },
  setGender(data: string) {
    localStorage.setItem("gender", data);
  },
  setDob(data: string) {
    localStorage.setItem("dob", data);
  },
  setAge(data: string) {
    localStorage.setItem("age", data);
  },
  setTitle(data: string) {
    localStorage.setItem("title", data);
  },
  getName() {
    return localStorage.getItem("name");
  },
  getSurname() {
    return localStorage.getItem("surname");
  },
  getLogin() {
    return localStorage.getItem("login");
  },
  getEmail() {
    return localStorage.getItem("email");
  },
  getGender() {
    return localStorage.getItem("gender");
  },
  getDob() {
    return localStorage.getItem("dob");
  },
  getAge() {
    return localStorage.getItem("age");
  },
  getTitle() {
    return localStorage.getItem("title");
  },
  clear() {
    localStorage.clear();
  },
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },
};
