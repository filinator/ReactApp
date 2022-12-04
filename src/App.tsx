import React, { useState } from "react";

//@ts-ignore
import styles from "./App.module.css";
import Button, { ButtonTypes } from "./Components/Button/Button";
import { CloseIcon, BurgerClosedIcon } from "./Assets/icons";
import TabList from "./Components/TabList";
import Input from "./Components/Input/Input"
import { title } from "process";

const App = () => {
  const [isOpened, setOpened] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsBlock}>
      <Button
        title={"Primary"}
        type={ButtonTypes.Primary}
        onClick={() => alert("primary")}
      ></Button>
      <Button
        title={"Sign In"}
        type={ButtonTypes.Secondary}
        onClick={() => alert("Sign In")}
      ></Button>
      <Button
        title={"Error"}
        type={ButtonTypes.Error}
        onClick={() => alert("error")}
      ></Button>
      <Button
        title={isOpened ? <BurgerClosedIcon /> : <CloseIcon />}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
        onClick={() => setOpened(!isOpened)}
      ></Button>
      </div>
      
      <div className={styles.TabsBlock}>
      <TabList />
      </div>
      <Input 
      value={inputValue} 
      onChange={onChange}
      placeholder={"Placeholder"}
      disabled={false}
      title={"Title"}
      // error={"Error text"}
    />
    </div>
  );
};

export default App;
