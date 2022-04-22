import React, { useCallback, useMemo, useReducer } from "react";
import styles from "../../../styles/Person.module.scss";
import { User } from "../../hooks/useGetUser";
import { Button } from "../shared/button/button.component";
import { InputForm } from "../shared/input/form-input.component";
import { INPUTS_CONFIG } from "../../constants";
import { FormState, reducer } from "./edit-profile.helper";
import { dobFormat } from "../person-info/person-info.helper";

interface EditProfileProps {
  user?: User;
  onSubmit: (user: FormState) => void;
}

export const EditProfileModal: React.FC<EditProfileProps> = React.memo(({
  user,
  onSubmit,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    name: user?.name.first ?? "",
    surname: user?.name.last ?? "",
    login: user?.login.username ?? "",
    email: user?.email ?? "",
    gender: user?.gender ?? "",
    dob: dobFormat(user?.dob.date) ?? "",
  });

  const formData = useMemo(
    () =>
      Object.keys(state).map((key, index) => ({
        label: INPUTS_CONFIG[index],
        name: key,
        value: state[key],
      })),
    [state]
  );

  const saveHandler = useCallback(() => {
    onSubmit(state);
  }, [onSubmit, state]);

  return (
    <div className={styles.editProfile}>
      <p className={styles.modalTitle}>Edit profile</p>
      {formData.map(({ label, name, value }) => (
        <InputForm
          name={name}
          value={value}
          onChange={dispatch}
          key={name}
          label={label}
        />
      ))}
      <Button
        text="Save"
        filled
        className={styles.confirmButton}
        onClick={saveHandler}
      />
    </div>
  );
});

EditProfileModal.displayName = "EditProfileModal";
