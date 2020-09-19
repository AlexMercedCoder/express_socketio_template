## USING THIS TEMPLATE:

- Make sure to run npm install

- Environmental variables defined in env.yaml, so create a env.yaml that looks like this...

```yaml
development:
  PORT: 4000
  SECRET: "production"

production:
  PORT: 3000
  SECRET: "development"
```

- auth.js has most of the auth middleware logic built out, just create a verify user function based on your particular database setup.

- cors whitelist defined in config/cors.js, when in a non-production environment it will allow all traffic, in production it will work off the whitelist.

## Commands

`npm run dev` run dev server look for env.yaml for environmental variables

`npm run start` run in production more, not look for env.yaml

## Files

- **server/server.js** Where the server object is created

- **server/middleware.js** Where express middleware is registered

- **routers/routes.js** Where standard routes are defined

- **routers/socket.js** Where you can define socket listeners and emits

- **server.js** where the server listener is invoked

- **public/socket/index.html** An html file with some basic socket code for testing

MAKE SURE TO JOIN THE SLACK AND DISCORD COMMUNITIES AT DEVNURSERY.COM
