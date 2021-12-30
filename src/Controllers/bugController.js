import bugModel from '../Models/bugModel';

export function retrieveBugs() {
    let data = [];

    data.push(new bugModel({

        id: 12345,
        name: "Need a database for bug",
        steps: "Install Mongdb first",
        details: "Database to store bugs",
        version: "1.0",
        assinged: "Si Lam",
        creator: "Si Lam",
        priority: 1,
        time: "20:13:00"

    }));


    data.push(new bugModel({

        id: 12346,
        name: "Install aws amplify for GraphQL",
        steps: "Setup AWS Amplify first",
        details: "AWS Amplify for interacting with GraphQL",
        version: "1.0",
        assinged: "Si Lam",
        creator: "Si Lam",
        priority: 2,
        time: "21:13:00"

    }));


    let sorted = data.sort((a,b)=>{return a._id - b._id });
    
    return sorted;
   

}