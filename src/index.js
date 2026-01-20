import { readInstagramFile } from "./services/fileService.js";

import { normalizeUsernames } from "./utils/normalize.js";

import { getNotFollowingBack, getYouDontFollowBack, getMutualFollowers } from "./services/instagramService.js";

import { exportToTxt } from "./utils/export.js";

const run = async () => {
  
  const following = normalizeUsernames(
    await readInstagramFile('./data/following.json')
  );

  const followers = normalizeUsernames(
    await readInstagramFile('./data/followers.json')
  );

  const notFollowingBack = getNotFollowingBack(following,followers);

  await exportToTxt('./output/not-following-back.txt', notFollowingBack)
}



run();
