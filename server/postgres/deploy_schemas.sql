-- deploy fresh database tables
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'
\i '/docker-entrypoint-initdb.d/tables/product.sql'
\i '/docker-entrypoint-initdb.d/tables/canasta.sql'
\i '/docker-entrypoint-initdb.d/tables/order.sql'

\i '/docker-entrypoint-initdb.d/seed/seed.sql'