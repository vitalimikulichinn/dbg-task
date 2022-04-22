import { FormState } from "../components/edit-profile/edit-profile.helper";
import { User } from "../hooks/useGetUser";
import { localStorageFacade } from "../service/localStorageService";

export const setUserToLocalStorage = (
  user: FormState,
  title: string,
  age: string
) => {
  Object.keys(user).forEach((key) => {
    localStorageFacade.setItem(key, user[key]);
  });
  localStorageFacade.setAge(age);
  localStorageFacade.setTitle(title);
};

export const getUserFromStorage = () => {
  const age = localStorageFacade.getAge();
  const dob = localStorageFacade.getDob();
  const email = localStorageFacade.getEmail();
  const gender = localStorageFacade.getGender();
  const login = localStorageFacade.getLogin();
  const name = localStorageFacade.getName();
  const surname = localStorageFacade.getSurname();
  const title = localStorageFacade.getTitle();
  let user: User | undefined = undefined;

  if (age && dob && email && gender && login && name && surname && title) {
    user = {
      dob: {
        date: dob,
        age: Number(age),
      },
      email: email,
      name: {
        first: name,
        last: surname,
        title: title,
      },
      login: {
        username: login,
      },
      gender: gender,
    };
  }

  return user;
};
