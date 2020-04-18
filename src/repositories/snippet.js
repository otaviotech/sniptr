import FirebaseClient from './firebaseClient.js';

function mapFirebaseIds (collection) {
  return Object
    .keys(collection)
    .map((key)=> ({
      ...collection[key],
      id: key,
    }));
}

const getAll = () => FirebaseClient.get('/snippets.json').then(res => mapFirebaseIds(res.data));

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
