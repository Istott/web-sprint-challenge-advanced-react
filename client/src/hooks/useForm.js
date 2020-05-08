// write your custom hook here to control your checkout form
// import { useState } from "./useLocalStorage";
import { useState} from 'react'

export const useForm = (key, initialValue) => {
  // email value ✅
  // handlechanges should handle all inputs
  const [values, setValues] = useState(key, initialValue);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  // const handleBlur = e => {

  // }

  // const handleValidation

//   const clearForm = e => {
//     if (e) e.preventDefault();
//     setValues(initialValue);
//   };

  return [values, handleChanges];
};