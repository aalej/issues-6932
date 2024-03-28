# Repro for issue 6932

When using the Firestore emulator on datastore-mode, namespace queries always return blank array

## Steps to reproduce

1. Run `npm i`
1. Run `gcloud emulators firestore start --database-mode=datastore-mode --host-port=127.0.0.1:8081`
1. On a separate terminal, run `export DATASTORE_EMULATOR_HOST=127.0.0.1:8081`
1. Run `npm run build`
1. Run `node .` or `node lib/index.js`
   - Console logs show an empty array

```
[]
```

## Notes

When connecting to production

1. Run `unset DATASTORE_EMULATOR_HOST`
1. Run `export GOOGLE_APPLICATION_CREDENTIALS=<path_to_service_account_key.json>`
1. Run `npm run build`
1. Run `node .` or `node lib/index.js`
1. Console logs show the namespaces on Datastore:

```
[ 'Tasks' ]
```
