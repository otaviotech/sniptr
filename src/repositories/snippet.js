import FirebaseClient, { mapResponseWithFirebaseIds } from './firebaseClient';

const getAll = () => FirebaseClient.get('/snippets.json').then(mapResponseWithFirebaseIds);

const create = (snippet) => FirebaseClient.post('/snippets.json', snippet);

const deleteSnippet = (id) => FirebaseClient.delete(`/snippets/${id}.json`);

const update = (snippet) => FirebaseClient.put(`/snippets/${snippet.id}.json`, snippet);

const SnippetRepository = {
  getAll,
  create,
  delete: deleteSnippet,
  update,
};

export default SnippetRepository;
