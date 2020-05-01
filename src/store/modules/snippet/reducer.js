import * as actionTypes from './actionTypes';

const initialState = {
  loading: false,
  snippets: [],
  fetchSnippetsError: undefined,
  createSnippetError: undefined,
  updateSnippetError: undefined,
};

const reduceFunctions = {
  [actionTypes.SET_LOADING]: (state, action) => ({
    ...state,
    loading: action.loading,
  }),

  [actionTypes.SET_SNIPPETS]: (state, action) => ({
    ...state,
    snippets: action.snippets,
  }),

  [actionTypes.SET_UPDATED_SNIPPET]: (state, action) => {
    const updatedSnippets = state.snippets.map((oldSnippet) => {
      return oldSnippet.id === action.snippet.id
        ? action.snippet
        : oldSnippet;
    });

    return {
      ...state,
      snippets: updatedSnippets,
    };
  },

  [actionTypes.FETCH_SNIPPETS_ERROR]: (state, action) => {
    return {
      ...state,
      fetchSnippetsError: action.error,
    };
  },

  [actionTypes.CREATE_SNIPPET_ERROR]: (state, action) => {
    return {
      ...state,
      createSnippetError: action.error,
    };
  },

  [actionTypes.CREATE_SNIPPET_SUCCESS]: (state, action) => {
    return {
      ...state,
      createSnippetSuccess: action.snippet,
    };
  },

  [actionTypes.UPDATE_SNIPPET_ERROR]: (state, action) => {
    return {
      ...state,
      updateSnippetError: action.error,
    };
  },

  [actionTypes.UPDATE_SNIPPET_SUCCESS]: (state, action) => {
    return {
      ...state,
      updateSnippetSuccess: action.snippet,
    };
  },

  [actionTypes.DELETE_SNIPPET_ERROR]: (state, action) => {
    return {
      ...state,
      deleteSnippetError: action.error,
    };
  },

  [actionTypes.DELETE_SNIPPET_SUCCESS]: (state, action) => {
    return {
      ...state,
      deleteSnippetSuccess: action.deletedSnippet,
    };
  },
};

const reducer = (state = initialState, action) => {
  const reduceFn = reduceFunctions[action.type];
  return reduceFn ? reduceFn(state, action) : state;
};

export default reducer;
