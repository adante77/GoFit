import Realm from "realm";



const Workout = {
    name: "Workout",
    properties: {
      id: "int",
      name: "string",
      status: "string?",
      owner_id: "string?"
    },
    primaryKey: "id"
}
console.log(Workout);

  const realm = 5

  export default realm;

