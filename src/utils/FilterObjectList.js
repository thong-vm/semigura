/**
 * Fitler an list of objects based on the provided filter object.
 * check for keys matching; check for value of each keys matching (case-insensitive)
 * @param {initialList} The initial object list.
 * @param {filterObject} The object to filter the array.
 * @return {filteredList} The filtered array of initial list.
 */
const FilterObjectList = (initialList, filterObject) => {
  const isFilterEmpty = Object.values(filterObject).every(
    (value) => value === "" || value === null
  );

  if (isFilterEmpty) {
    return initialList;
  }

  const filteredList = initialList.filter((item) => {
    // Check if all provided keys and their corresponding values match
    return Object.entries(filterObject).every(([key, value]) => {
      // If the key is not present in the object, consider it a mismatch
      if (!item.hasOwnProperty(key)) {
        return false;
      }
      return String(item[key])
        .toLowerCase()
        .includes(String(value).toLowerCase());
    });
  });
  return filteredList;
};
export default FilterObjectList;
