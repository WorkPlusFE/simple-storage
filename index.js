class Storage {
  constructor(type) {
    this.storage = window[type];
  }

  add(key, value, parse) {
    this.storage.setItem(key, parse ? JSON.stringify(value) : value);
  }

  get(key, parse) {
    const value = this.storage.getItem(key);
    if (value === null) return false;
    if (value && parse) return JSON.parse(value);
    if (value) return value;
  }

  has(key) {
    const value = this.storage.getItem(key);
    if (value === null || value == undefined) {
      return false;
    }
    return true;
  }

  del(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

const types = ['localStorage', 'sessionStorage'];
const localStorage = new Storage(types[0]);
const sessionStorage = new Storage(types[1]);

export {
  localStorage,
  sessionStorage
};

