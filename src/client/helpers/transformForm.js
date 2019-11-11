export function transformForm(form) {
  const { form: fieldData, formDefId, userId } = form;

  const fields = Object.entries(fieldData).map(entry => {
    const fieldDefId = Number(entry[0]);
    const data = entry[1];
    return {
      data,
      fieldDefId,
    };
  });

  const formattedForm = {
    fields,
    formDefId,
    userId,
  };

  return formattedForm;
}

export function transformUpdatedForm(form) {
  const { form: fieldData } = form;

  const fields = Object.entries(fieldData).map(entry => {
    const fieldDefId = Number(entry[0]);
    const data = entry[1];
    return {
      data,
      fieldDefId,
    };
  });

  return fields;
}
