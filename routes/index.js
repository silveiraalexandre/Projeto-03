(async () => {
  const database = require('./DB');
  await database.sync();
  })();