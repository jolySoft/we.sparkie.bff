import {ApolloServer, gql} from "apollo-server";

const typeDefs = gql`
  type Compilation {
    id: String
    compilationType: int
    createdBy: string
    tracks: [Track]
  }
  
  type Artist {
    id: string
    name: string
    bio: string
  }
  
  type Track {
    id: string
    digitalAsset: DigitalAsset
    artist: Artist
    compilation: Compilation
  }
  
  type DigitalAsset {
    id: string
    name: string
    bitDepth: int
    sampleRate: float
    location: string
    contentType: string
    genre: string
  }
  
  type Query {
    compilation(name: string): Compilation
  }
`;

const resolvers = {
    Query: {
        compilation: (parent, arg) => {}
           },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

