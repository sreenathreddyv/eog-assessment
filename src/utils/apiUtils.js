import axios from "axios";

export const graphqlAPIHandler = (path, query) =>{
    return axios
    .post(`${path}`,{
        headers:{
            "Content-type":"application/json"
        },
        query
    }).then(response=>{
        return response.data.data;

    }).catch(err=>{
        return err
    });
}