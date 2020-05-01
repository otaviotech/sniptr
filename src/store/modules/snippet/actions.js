import * as actionTypes from './actionTypes';
import SnippetRepository from '../../../repositories/snippet';

export const setLoading = (loading) => ({ type: actionTypes.SET_LOADING, loading });

export const setSnippets = (snippets) => ({ type: actionTypes.SET_SNIPPETS, snippets });

export const fetchSnippetsSuccess = (snippets) => (dispatch) => {
  dispatch(setSnippets(snippets));
};

export const fetchSnippetsError = (error) => ({
  type: actionTypes.FETCH_SNIPPETS_ERROR,
  error,
});

export const fetchSnippets = () => (dispatch) => {
  return SnippetRepository.getAll()
    .then((snippets) => { dispatch(fetchSnippetsSuccess(snippets)); })
    .catch((error) => { dispatch(fetchSnippetsError(error)); });
};

export const setUpdatedSnippet = (snippet) => ({
  type: actionTypes.SET_UPDATED_SNIPPET,
  snippet,
});

export const updateSnippetSuccess = (snippet) => (dispatch) => {
  dispatch(setUpdatedSnippet(snippet));

  return {
    type: actionTypes.UPDATE_SNIPPET_SUCCESS,
    snippet,
  };
};

export const updateSnippetError = (error) => ({
  type: actionTypes.UPDATE_SNIPPET_ERROR,
  error,
});

export const updateSnippet = (snippet) => (dispatch) => {
  return SnippetRepository.update(snippet)
    .then(() => dispatch(updateSnippetSuccess(snippet)))
    .catch((error) => dispatch(updateSnippetError(error)));
};

export const createSnippetSuccess = (snippet) => ({
  type: actionTypes.CREATE_SNIPPET_SUCCESS,
  snippet,
});

export const createSnippetError = (error) => ({
  type: actionTypes.CREATE_SNIPPET_ERROR,
  error,
});

export const createSnippet = (snippet) => (dispatch) => {
  return SnippetRepository.create(snippet)
    .then((createdSnippet) => dispatch(createSnippetSuccess(createdSnippet)))
    .catch((error) => dispatch(createSnippetError(error)));
};

export const deleteSnippetSuccess = (deletedSnippet) => ({
  type: actionTypes.DELETE_SNIPPET_SUCCESS,
  deletedSnippet,
});

export const deleteSnippetError = (error) => ({
  type: actionTypes.DELETE_SNIPPET_ERROR,
  error,
});

export const deleteSnippet = (snippetId) => (dispatch) => {
  return SnippetRepository.delete(snippetId)
    .then((deletedSnippet) => dispatch(deleteSnippetSuccess(deletedSnippet)))
    .catch((error) => dispatch(deleteSnippetError(error)));
};
