# DUCKIESAYS REST API
#
## Synopsis

duckiesays.com, but for 924 S and 944 Porsche owners.

## Code Example

REST services of the form:

GET /api/vN/duckie/:sayId


## Motivation

Provides basic REST services API. 

## Installation

To create database and schema:
     db> ./create_db.sh

To populate test data
     db> psql -U postgres duckiedb < create_test_data.dmp


## API Reference

GET:

duckie


## Tests

Mocha test examples live in the test directory

## Contributors



## License

MIT
