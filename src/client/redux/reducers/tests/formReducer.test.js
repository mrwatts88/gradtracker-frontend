import formReducer from '../formReducer';
import * as actions from '../../actions/formActions';
import { UNAUTHENTICATE } from '../../actions/authActions';

describe('formReducer', () => {
  const submissions = [{ id: 1 }, { id: 2 }, { id: 3 }];

  it('should return correct state', () => {
    expect(formReducer(undefined, {})).toEqual({});

    expect(formReducer({}, { type: actions.POST_FORM })).toEqual({ postFormStatus: actions.POST_FORM });
    expect(formReducer({}, { type: actions.POST_FORM_SUCCESS })).toEqual({ postFormStatus: actions.POST_FORM_SUCCESS });
    expect(formReducer({}, { type: actions.POST_FORM_ERROR, payload: 'error' }))
      .toEqual({ postFormStatus: actions.POST_FORM_ERROR, errorMessage: 'error' });
    expect(formReducer({}, { type: actions.CLEAR_POST_FORM_STATUS }))
      .toEqual({ postFormStatus: null, errorMessage: null });

    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_USER }))
      .toEqual({ getAllFormsByUserStatus: actions.GET_ALL_FORMS_BY_USER });
    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_USER_SUCCESS }))
      .toEqual({ getAllFormsByUserStatus: actions.GET_ALL_FORMS_BY_USER_SUCCESS });
    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_USER_ERROR, payload: 'error' }))
      .toEqual({ getAllFormsByUserStatus: actions.GET_ALL_FORMS_BY_USER_ERROR, errorMessage: 'error' });
    expect(formReducer({}, { type: actions.CLEAR_GET_ALL_FORMS_BY_USER_STATUS }))
      .toEqual({ getAllFormsByUserStatus: null, errorMessage: null });

    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_FORM_DEF }))
      .toEqual({ getAllFormsByFormDefStatus: actions.GET_ALL_FORMS_BY_FORM_DEF });
    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_FORM_DEF_SUCCESS }))
      .toEqual({ getAllFormsByFormDefStatus: actions.GET_ALL_FORMS_BY_FORM_DEF_SUCCESS });
    expect(formReducer({}, { type: actions.GET_ALL_FORMS_BY_FORM_DEF_ERROR, payload: 'error' }))
      .toEqual({ getAllFormsByFormDefStatus: actions.GET_ALL_FORMS_BY_FORM_DEF_ERROR, errorMessage: 'error' });
    expect(formReducer({}, { type: actions.CLEAR_GET_ALL_FORMS_BY_FORM_DEF_STATUS }))
      .toEqual({ getAllFormsByFormDefStatus: null, errorMessage: null });

    expect(formReducer({}, { type: actions.PUT_FORM })).toEqual({ putFormStatus: actions.PUT_FORM });
    expect(formReducer({}, { type: actions.PUT_FORM_SUCCESS })).toEqual({ putFormStatus: actions.PUT_FORM_SUCCESS });
    expect(formReducer({ submissions }, { type: actions.PUT_FORM_SUCCESS, payload: { id: 2, test: true } }))
      .toEqual({ putFormStatus: actions.PUT_FORM_SUCCESS, submissions: [{ id: 1 }, { id: 2, test: true }, { id: 3 }] });
    expect(formReducer({ submissions }, { type: actions.PUT_FORM_SUCCESS, payload: { id: 4, test: true } }))
      .toEqual({ putFormStatus: actions.PUT_FORM_SUCCESS, submissions });
    expect(formReducer({}, { type: actions.PUT_FORM_ERROR, payload: 'error' }))
      .toEqual({ putFormStatus: actions.PUT_FORM_ERROR, errorMessage: 'error' });
    expect(formReducer({}, { type: actions.CLEAR_PUT_FORM_STATUS }))
      .toEqual({ putFormStatus: null, errorMessage: null });

    expect(formReducer({}, { type: UNAUTHENTICATE })).toEqual({});


    expect(formReducer({}, { type: actions.APPROVE_FORM }))
      .toEqual({ approveFormStatus: actions.APPROVE_FORM });
    expect(formReducer({ submissions }, { type: actions.APPROVE_FORM_SUCCESS, payload: { id: 2, test: true } }))
      .toEqual({ approveFormStatus: actions.APPROVE_FORM_SUCCESS, submissions: [{ id: 1 }, { id: 2, test: true }, { id: 3 }] });
    expect(formReducer({ submissions }, { type: actions.APPROVE_FORM_SUCCESS, payload: { id: 4, test: true } }))
      .toEqual({ approveFormStatus: actions.APPROVE_FORM_SUCCESS, submissions });
    expect(formReducer({}, { type: actions.APPROVE_FORM_ERROR, payload: 'error' }))
      .toEqual({ approveFormStatus: actions.APPROVE_FORM_ERROR, errorMessage: 'error' });
    expect(formReducer({}, { type: actions.CLEAR_APPROVE_FORM_STATUS }))
      .toEqual({ approveFormStatus: null, errorMessage: null });


  });
});
