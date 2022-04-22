import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../src/components/shared/button/button.component";
import { Loader } from "../../src/components/loader/loader.component";
import { MainContainer } from "../../src/components/shared/main-container/main-container.component";
import { PersonCard } from "../../src/components/person-card/person-card.component";
import { getUser, useGetUser, User } from "../../src/hooks/useGetUser";
import { RefreshIcon } from "../../src/icons/refreshIcon";
import styles from "../../styles/Person.module.scss";
import { PersonInfo } from "../../src/components/person-info/person-info.component";
import { ModalContainer } from "../../src/components/shared/modal/modal-container.component";
import { Modal } from "../../src/components/shared/modal/modal";
import { useModal } from "../../src/hooks/useModal";
import { EditProfileModal } from "../../src/components/edit-profile/edit-profile.component";
import { FormState } from "../../src/components/edit-profile/edit-profile.helper";
import { localStorageFacade } from "../../src/service/localStorageService";
import { GetStaticProps } from "next";
import { getUserFromStorage, setUserToLocalStorage } from "../../src/utils/person.helper";

interface PersonProps {
  user: User;
}

const Person: React.FC<PersonProps> = React.memo(({ user }) => {
  const { getNewUser, user: newUser, loading } = useGetUser();
  const [currentUser, setCurrentUser] = useState<User>();
  const { isOpen, modalOpenHandler, modalCloseHandler } = useModal();
  const [initLoading, setInitLoading] = useState<boolean>(true);

  useEffect(() => {
    setCurrentUser(newUser);
  }, [newUser]);

  useEffect(() => {
    const memorizedUser = getUserFromStorage();
    if (memorizedUser) {
      setCurrentUser(memorizedUser);
    } else {
      setCurrentUser(user);
    }
    setInitLoading(false);
  }, [user]);

  const handleSubmit = useCallback(
    (user: FormState) => {
      const age = new Date().getFullYear() - Number(user.dob.split(".")[2]);
      setCurrentUser((prev) => {
        setUserToLocalStorage(user, prev?.name.title ?? "", age.toString());
        return {
          name: {
            first: user.name,
            last: user.surname,
            title: prev?.name.title ?? "",
          },
          dob: {
            date: user.dob,
            age: age,
          },
          email: user.email,
          login: {
            username: user.login,
          },
          gender: user.gender,
        };
      });
      modalCloseHandler();
    },
    [modalCloseHandler]
  );

  const handleRefresh = () => {
    getNewUser();
    localStorageFacade.clear();
  };

  return (
    <MainContainer>
      <div className={styles.personContainer}>
        {initLoading || loading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.personWrapper}>
              <PersonCard
                name={
                  currentUser
                    ? `${currentUser.name.first} ${currentUser.name.last}`
                    : ""
                }
                login={currentUser ? currentUser.login.username : ""}
                modalOpen={modalOpenHandler}
              />
              <PersonInfo
                age={currentUser?.dob.age}
                gender={currentUser?.gender}
                name={`${currentUser?.name.title} ${currentUser?.name.first} ${currentUser?.name.last}`}
                email={currentUser?.email}
                dob={currentUser?.dob.date}
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button
                text="Refresh"
                filled
                icon={() => <RefreshIcon />}
                onClick={handleRefresh}
              />
            </div>
          </>
        )}
        {isOpen && (
          <Modal>
            <ModalContainer onClose={modalCloseHandler}>
              <EditProfileModal user={currentUser} onSubmit={handleSubmit} />
            </ModalContainer>
          </Modal>
        )}
      </div>
    </MainContainer>
  );
});

export const getStaticProps: GetStaticProps = async (context) => {
  const user = await getUser();
  return {
    props: {
      user
    }
  }
}

Person.displayName = "Person";

export default Person;
