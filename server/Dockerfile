FROM mcr.microsoft.com/dotnet/sdk AS build-env
WORKDIR /server
COPY server.csproj ./
RUN dotnet restore
COPY . ./
RUN dotnet publish -c Release -o out
FROM mcr.microsoft.com/dotnet/aspnet
WORKDIR /server
COPY --from=build-env /server/out .
