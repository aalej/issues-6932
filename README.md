# Repro for issue

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