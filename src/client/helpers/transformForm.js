export function transformForm(form) {
  const { form: fieldData, id, formDefId, approved, userId } = form;

  const fields = Object.entries(fieldData).map(entry => {
    const fieldDefId = Number(entry[0]);
    const data = entry[1];
    return {
      data,
      fieldDefId,
    };
  });

  const formattedForm = {
    id: id || null,
    approved,
    fields,
    formDefId,
    userId,
  };

  return formattedForm;
}
