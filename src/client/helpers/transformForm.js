export function transformForm(form) {
  const { form: fieldData, formDef, approved, userId } = form;

  const fields = Object.entries(fieldData).map(entry => {
    const fieldDefId = Number(entry[0]);
    const data = entry[1];
    return {
      data,
      fieldDefId,
    };
  });

  const formattedForm = {
    approved,
    fields,
    formDefId: formDef.id,
    userId,
  };

  return formattedForm;
}
