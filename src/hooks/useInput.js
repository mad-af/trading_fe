import { useState } from 'react';

const useInput = (defaultValue = null) => {
  const [useValue, setValue] = useState(defaultValue);
  const onValueChangeHandler = (newValue) => {
    setValue(newValue.target.value);
  };

  return [useValue, onValueChangeHandler];
};

export default useInput;
