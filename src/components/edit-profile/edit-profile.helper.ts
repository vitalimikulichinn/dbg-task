export enum Actions {
  CHANGE = "CHANGE",
}

export interface FormState extends Record<string, string> {
  name: string;
  surname: string;
  login: string;
  email: string;
  gender: string;
  dob: string;
}

export interface Action {
  type: Actions;
  payload: {
    type: string;
    value: string;
  };
}

export const reducer = (state: FormState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.CHANGE:
      return {
        ...state,
        [payload.type]: payload.value,
      };
    default:
      return state;
  }
};
