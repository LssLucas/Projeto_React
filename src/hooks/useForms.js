import { useState } from 'react';

function useForm(valoresInicias) {
  const [values, setValues] = useState(valoresInicias);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handlerChange(infosDoEvento) {
    /* A função 'funcaoHandler' captura a mundaça de input */
    // const {getAttribute, value} = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }
  function clearForm() {
    setValues(valoresInicias);
  }
  return {
    values,
    handlerChange,
    clearForm,
  };
}

export default useForm;
