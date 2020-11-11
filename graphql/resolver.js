const jongok = {
    name: "jongok",
    age: 18,
    gender: "male"
}
const resolvers =  {
    Query: {
        person: () => jongok
    }
};
export default resolvers;