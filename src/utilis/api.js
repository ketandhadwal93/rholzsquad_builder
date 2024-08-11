import _superagent from 'superagent';
const SuperagentPromise = require('superagent-promise');
const superagent = SuperagentPromise(_superagent, global.Promise);

const API_ROOT = `http://rholzsquad.com:3009/builder/`;

const BUCKET_ROOT = `https://demoprojectsbucket.sgp1.digitaloceanspaces.com/shared2/`;
const DB_ROOT = `https://dreamgrant.s3.amazonaws.com/`;

const API_FILE_ROOT_MEDIUM = `${BUCKET_ROOT}image/medium/`;
const API_FILE_ROOT_ORIGINAL = `${BUCKET_ROOT}image/original/`;
const API_FILE_ROOT_SMALL = `${BUCKET_ROOT}image/small/`;
const API_FILE_ROOT_AUDIO = `${BUCKET_ROOT}audio/`;
const API_FILE_ROOT_VIDEO = `${BUCKET_ROOT}video/`;
const API_FILE_ROOT_DOCUMENTS = `${BUCKET_ROOT}documents/`;
const API_FILE_ROOT_DB_BACKUP = `${DB_ROOT}db_backups/`;

const encode = encodeURIComponent;
const responseBody = (res) => res.body;

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    debugger
    req.set('token', `${token}`);
  }
};

const requests = {
  del: (url) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  patch: (url, body) =>
    superagent.patch(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  file: (url, key, file) =>
    superagent.post(`${API_ROOT}${url}`).attach(key, file).use(tokenPlugin).then(responseBody)
};

const Auth = {
  login: (info) =>
    requests.post('login', info),
  loginAsUser: (info) =>
    requests.post('admin/users/login_as_user', info),
  logout: () =>
    requests.put('admin/logout', {}),
  changePassword: (info) =>
    requests.put('change-password', info),
  profile: () =>
    requests.get('profile'),
  edit: (info) =>
    requests.patch('profile', info),
};

const Common = {
  uploadFile: (key, file) =>
    requests.file('upload/file', key, file),
  uploadFileMultiple: (key, file) =>
    requests.file('Upload/do_spaces_file_upload_multiple', key, file),
  dbBackup: () =>
    requests.post('db-backup', {}),
};

const ContactUs = {
  listing: (q) =>
    requests.get(`quotes?${q}`),
  getById: (id) =>
    requests.get(`admin/contact/${id}`),
  delete: (_id) =>
    requests.del(`quotes/${_id}`),
  edit: (_id, info) =>
    requests.patch(`quotes/resolve/${_id}`, info),
  export: (start_date, end_date) =>
    requests.get(`admin/contact_export?start_date=${start_date}&end_date=${end_date}`),
};

const Content = {
  create: (info) =>
    requests.post('pages', info),
  getByID: (id) =>
    requests.get(`pages/${id}`),
  listing: (q) =>
    requests.get(`pages${q ? `?${q}` : ''}`),
  delete: (_id) =>
    requests.del(`pages/${_id}`),
  edit: (_id, info) =>
    requests.patch(`pages/${_id}`, info),
};

const SocialPage = {
  usercontentDetails: (page_url) =>
    requests.get(`user/page/detail?page_url=${page_url}`)
};

const Dashboard = {
  listing: (q) =>
    requests.get(`dashboard${q ? `?${q}` : ''}`)
};

const Property = {
  addProperty: (info) =>
    requests.post('property', info),
  listing: (q) =>
    requests.get(`property${q ? `?${q}` : ""}`),
  getById: (id) =>
    requests.get(`property/${id}`),
  block: (id, info) =>
    requests.put(`users/${id}/block`, info),
  deactivate: (id, info) =>
    requests.put(`admin/active/deactive/${id}`, info),
  delete: (id) =>
    requests.del(`admin/user/${id}`),
  import: (file) =>
    requests.file(`admin/user/import`, 'file', file),
  export: (start_date, end_date) =>
    requests.get(`users/export?start_date=${start_date}&end_date=${end_date}`),
};

const FILES = {
  audio: (filename) =>
    filename?.startsWith('http') ? filename : `${API_FILE_ROOT_AUDIO}${filename}`,
  video: (filename) =>
    filename?.startsWith('http') ? filename : `${API_FILE_ROOT_VIDEO}${filename}`,
  imageOriginal: (filename, alt) =>
    filename ? filename?.startsWith('http') ? filename : `${API_FILE_ROOT_ORIGINAL}${filename}` : alt,
  imageMedium: (filename, alt) =>
    filename ? filename?.startsWith('http') ? filename : `${API_FILE_ROOT_MEDIUM}${filename}` : alt,
  imageSmall: (filename, alt) =>
    filename ? filename?.startsWith('http') ? filename : `${API_FILE_ROOT_SMALL}${filename}` : alt,
};

const apiEndPoint = {
  Auth,
  API_ROOT,
  API_FILE_ROOT_DB_BACKUP,
  API_FILE_ROOT_SMALL,
  API_FILE_ROOT_MEDIUM,
  API_FILE_ROOT_ORIGINAL,
  API_FILE_ROOT_VIDEO,
  API_FILE_ROOT_DOCUMENTS,
  Common,
  ContactUs,
  Content,
  Dashboard,
  FILES,
  SocialPage,
  Property,
  encode,
  setToken: (_token) => {
    token = _token;
  }
};

export default apiEndPoint;
