export const normalizeUsername = (username) => {
  if (typeof username !== 'string') return null;

  return username
    .trim()
    .toLowerCase()
};

export const normalizeUsernames = (usernames = []) => {
  return usernames
    .map(normalizeUsername)
    .filter(Boolean);
};