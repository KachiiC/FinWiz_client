export const removeNulls = (obj) => obj.filter((single) => !Object.values(single).some((val) => !val));

export const addRank = (obj) => obj.map((res: { rank: number }, index: number) => {
  res.rank = index + 1;
  return res;
});