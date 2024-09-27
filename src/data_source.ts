import { DataSource } from 'typeorm'
import { User } from './entities/User' // Adjust the path to your UserEntity

export const AppDataSource = new DataSource({
  type: 'sqlite', // Set the type to SQLite
  database: 'database.sqlite', // SQLite database file
  entities: [User], // Entities, adjust paths as needed
  synchronize: true, // Sync the schema automatically in development
  logging: false, // Disable query logging (set to true if you want to debug)
})
