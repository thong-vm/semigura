class LocalStorage {
  static get(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Error getting data from localStorage:", error);
      return null;
    }
  }

  static set(key, data) {
    try {
      localStorage.setItem(key, data);
    } catch (error) {
      console.error("Error setting data in localStorage:", error);
    }
  }

  static remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data from localStorage:", error);
    }
  }

  static clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing data from localStorage:", error);
    }
  }
}

export default LocalStorage;
