export const DBConfig = {
  name: 'pokemon-db',
  version: 1,
  objectStoresMeta: [
    {
      store: 'pokemon',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'nickName', keypath: 'nickName', options: { unique: true } }
      ]
    }
  ]
}
