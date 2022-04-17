docker run --name sql_server_demo -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=SecurePassword123' -e 'MSSQL_PID=Enterprise' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest

docker run --name postgresdb -e HOST=localhost -e POSTGRES_USER=UserPawel -e POSTGRES_PASSWORD=PasswordPawel -d -p 5432:5432 postgres

docker exec -it ad3342dc2a49 bash

psql -h localhost -p 5432 -U postgres


db:
    image: mcr.microsoft.com/mssql/server:2019-latest
    container_name: mssql
    environment:
        ACCEPT_EULA: "Y"
        SA_PASSWORD: "SecurePassword123!"
        MSSQL_PID: Enterprise
    ports:
        - "1433:1433"