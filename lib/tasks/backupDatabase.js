require('dotenv').config({ path: enviromentPath() });
const { CronJob } = require('cron');
const moment = require('moment');
const path = require('path');
const { exec } = require('child_process');

const pass = process.env.DB_PASS;
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dumpFolder = path.join(__dirname, '../../', process.env.DUMP_FOLDER);
const fs = require('fs');
const { enviromentPath } = require('../config/enviroments/env');
const logger = require('../config/logger/signale');

const backupMinutes = process.env.BACKUP_MINUTES || '59';
const backupHours = process.env.BACKUP_HOURS || '*/23';
const dayOfWeek = process.env.BACKUP_DAY_OF_WEEK || '3';

const backupDatabase = new CronJob(`${backupMinutes} ${backupHours} * * * ${dayOfWeek}`, async () => {
  const readableData = moment().format('YYYY_MM_DD');
  if (fs.existsSync(dumpFolder)) {
    logger.debug('dumping');
    logger.debug(host);
    const pathDump = path.join(__dirname, '../../', `/db/dumps/${Date.now()}_${readableData}.sql`);
    const dumpQuery = `PGPASSWORD="${pass}" pg_dump -f ${pathDump} -h ${host} -p ${port} -U ${user} -d ${dbName}`;
    exec(dumpQuery, (error, stdout, stderr) => {
      logger.complete(stdout);
      if (error !== null) {
        logger.fatal(stderr);
      }
    });
  } else {
    fs.mkdirSync(dumpFolder);
  }
}, null, true, 'America/Sao_Paulo');

export default backupDatabase;


// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    |
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
