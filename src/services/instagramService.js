

const toSet = (usernames = []) => new Set(usernames);

export const getNotFollowingBack = (following = [], followers = []) => {
  const followersSet = toSet(followers);

  return following.filter(username => !followersSet.has(username));
}

export const getYouDontFollowBack = (following = [], followers = []) => {
  const followingSet = toSet(following);
  return followers.filter(username => !followingSet.has(username));
}

export const getMutualFollowers = (following = [], followers = []) => {
  const followersSet = toSet(followers);

  return following.filter(username => followersSet.has(username));
};