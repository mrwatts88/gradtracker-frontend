import { transformForm, transformUpdatedForm } from '../helpers/transformForm';

describe('Transform Form', () => {

  describe('transformForm', () => {
    it('should return correct data structure', () => {
      const input = {
        formDefId: 1,
        approved: true,
        userId: 2,
        form: {
          1: 'matt',
          2: 'watts'
        }
      };

      const output = transformForm(input);

      expect(output).toEqual({
        formDefId: 1,
        userId: 2,
        fields: [{ data: 'matt', fieldDefId: 1 }, { data: 'watts', fieldDefId: 2 }]
      });
    });
  });

  describe('transformUpdatedForm', () => {
    it('should return correct data structure', () => {
      const input = {
        formDefId: 1,
        approved: true,
        userId: 2,
        form: {
          1: 'matt',
          2: 'watts'
        }
      };

      const output = transformUpdatedForm(input);

      expect(output).toEqual([{ data: 'matt', fieldDefId: 1 }, { data: 'watts', fieldDefId: 2 }]);
    });
  });
});
