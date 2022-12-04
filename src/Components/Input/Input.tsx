import React, { FC, ChangeEvent } from "react";
import classNames from "classnames";

//@ts-ignore
import styles from "./Input.module.css";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  error?: string;
};

const Input: FC<InputProps> = ({ 
    value, 
    onChange, 
    placeholder, 
    disabled, 
    title,
    error,

}) => {
    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
        {title && <div className={styles.title}>{title}</div>}
        <input
        className={classNames(styles.input, { [styles.inputError]: error })} 
        value={value} 
        onChange={onChangeInput} 
        placeholder={placeholder}
        disabled={disabled}
        />
          {error && <div className={styles.textError}>{error}</div>}
    </div>
  );
};

export default Input;
