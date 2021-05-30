const generateRandomId = () => {
  const randomString = Math.random().toString(36).substring(2);
  return randomString;
};

export { generateRandomId };
