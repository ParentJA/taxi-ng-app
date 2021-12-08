# Notes

## Server

## Client

Why are tests failing for driver dashboard? I think it has something to do with the `otherUser()` function not returning the right data. I believe the test should mock the `AuthService.isRider()` function to return `false`. Alternatively, we might need to mock the component's `otherUser()` function to return the rider.

## Postgres

```
$ docker-compose exec taxi-database psql -U postgres
```

You should see something like the following in your terminal:

```
psql (14.1 (Debian 14.1-1.pgdg110+1))
Type "help" for help.

postgres=#
```

In the `psql` CLI, run the following commands one at a time.

```
CREATE USER taxi WITH SUPERUSER CREATEDB CREATEROLE PASSWORD 'taxi';
CREATE DATABASE taxi OWNER taxi;
```

Exit `psql`.

From your terminal, run the following:

```sh
$ docker cp taxi.sql <container_id>:/
$ docker-compose exec taxi-database psql -U taxi -d taxi -f taxi.sql
```