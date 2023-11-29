const getListColumnsExcludeId = (objectItem) => {
  return Object.keys(objectItem).filter(
    (key) => key.toUpperCase() !== "id".toUpperCase()
  );
};

export default getListColumnsExcludeId;