import { AbstractSqlStorage } from "./abstract-sql-storage";
import { SQLiteStorage } from "./sqlite-storage";
import { WebSQLStorage } from "./websql-storage";
import { winRef } from "../window-ref/window-ref-service";
import { DatabaseFactory } from "./database-factory";

/**
 * Created by francesco on 17/11/2016.
 *
 */

export class MyDatabaseFactory implements DatabaseFactory {
  /**
   * Create a different db object depending on the execution platform
   * @param {Object} options - the object supports the following properties:
   *  {
   *    name: the name of the database (__ionicstorage by default)
   *    backupFlag: where to store the file; default is BACKUP_LOCAL which DOES NOT store to iCloud. Other options: BACKUP_LIBRARY, BACKUP_DOCUMENTS
   *    existingDatabase: whether to load this as an existing database (default is false)
   *  }
   * @returns {any} - db object
   */
  getDatabaseInstance(options): AbstractSqlStorage {
    if( winRef().sqlitePlugin ) {
      return new SQLiteStorage(options);
    } else {
      return new WebSQLStorage(options.name);
    }
  }
}
