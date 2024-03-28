import { Datastore } from "@google-cloud/datastore";

const datastore = new Datastore({
  projectId: "some-testproject",
});

export async function getNamespaces() {
  const query = datastore.createQuery("__namespace__").select("__key__");
  const [entities] = await datastore.runQuery(query);
  const namespaces = entities.map((entity) => entity[datastore.KEY].name);
  return namespaces;
}

export async function addEntity(namespace: string, kind: string[], data: any) {
  const entityKey = datastore.key({
    path: kind,
    namespace,
  });
  const entity = {
    key: entityKey,
    data,
  };
  await datastore.save(entity);
}

async function main() {
  await addEntity("Tasks", ["Work Tasks"], {
    category: "Personal",
    done: false,
    priority: 4,
    description: "Learn Cloud Datastore",
  });

  const namespaces = await getNamespaces();
  console.log(namespaces);
}

main();
