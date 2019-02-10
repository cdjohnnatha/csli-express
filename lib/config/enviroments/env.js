function enviromentPath() {
  if (process.env.NODE_ENV === undefined ||
    (
      process.env.NODE_ENV !== 'development' &&
      process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test'
    )
  ) {
    return './config/enviroments/.development';
  }
  return `./config/enviroments/.${process.env.NODE_ENV}`;
}

module.exports = {
  enviromentPath,
};
