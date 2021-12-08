# Notes

## Django

Check photos. Try signing up and uploading a photo. Issue might be happening due to transferring media from Part 2 to Part 3.

## Bootstrap

Need to update all Bootstrap components. A lot has changed in Bootstrap v5.

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