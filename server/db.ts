export {}
// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
console.log(dbPath);

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

// Create a table in the database
knex.schema
    // Make sure no table exists
    // before trying to create new
    .hasTable('trainers')
    .then((exists: any) => {
        if (!exists) {
            // If no table exists
            // create new, with "id", "name", "element",
            // "city" and "favorite" columns
            // and use "id" as a primary identification
            // and increment "id" with every new record (trainer)
            return knex.schema.createTable('trainers', (table: { increments: (arg0: string) => { (): any; new(): any; primary: { (): void; new(): any } }; integer: (arg0: string) => void; string: (arg0: string) => void })  => {
                table.increments('id').primary()
                table.integer('name')
                table.string('element')
                table.string('city')
                table.integer('favorite')
            })
                .then(() => {
                    // Log success message
                    console.log('Table \'Trainers\' created')
                })
                .catch((error: any) => {
                    console.error(`There was an error creating table: ${error}`)
                })
        }
    })
    .then(() => {
        // Log success message
        console.log('done')
    })
    .catch((error: any) => {
        console.error(`There was an error setting up the database: ${error}`)
    })

// Just for debugging purposes:
// Log all data in "pokemon_trainers" table
knex.select('*').from('trainers')
    .then((data: any) => console.log('data:', data))
    .catch((err: any) => console.log(err))

// Export the database
module.exports = knex