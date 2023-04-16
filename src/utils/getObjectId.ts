const getObjectId = (url: string): string => {
  return url.split('/').slice(-2)[0];
};

export default getObjectId;
