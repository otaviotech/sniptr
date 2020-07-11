import FirebaseClient, { mapResponseWithFirebaseIds, mapResponseWithFirebaseId } from './firebaseClient';

export const getAll = () => FirebaseClient.get('/snippets.json').then(mapResponseWithFirebaseIds);

export const get = (id) => FirebaseClient.get(`/snippets/${id}.json`).then(mapResponseWithFirebaseId(id));

export const create = (snippet) => FirebaseClient.post('/snippets.json', snippet).then(r => ({ ...snippet, id: r.data.name }));

export const deleteSnippet = (id) => FirebaseClient.delete(`/snippets/${id}.json`).then(() => ({ id }));

export const update = (snippet) => FirebaseClient.put(`/snippets/${snippet.id}.json`, snippet);

const SnippetRepository = {
  get,
  getAll,
  create,
  delete: deleteSnippet,
  update,
};

export default SnippetRepository;
