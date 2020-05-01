import FirebaseClient, { mapResponseWithFirebaseIds, mapResponseWithFirebaseId } from './firebaseClient';

const getAll = () => FirebaseClient.get('/snippets.json').then(mapResponseWithFirebaseIds);

const get = (id) => FirebaseClient.get(`/snippets/${id}.json`).then(mapResponseWithFirebaseId(id));

const create = (snippet) => FirebaseClient.post('/snippets.json', snippet).then(r => ({ ...snippet, id: r.data.name }));

const deleteSnippet = (id) => FirebaseClient.delete(`/snippets/${id}.json`).then(() => ({ id }));

const update = (snippet) => FirebaseClient.put(`/snippets/${snippet.id}.json`, snippet);

const SnippetRepository = {
  get,
  getAll,
  create,
  delete: deleteSnippet,
  update,
};

export default SnippetRepository;
