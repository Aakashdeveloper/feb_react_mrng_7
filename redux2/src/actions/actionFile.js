const base_url = "http://localhost:8900";

export function latestNews(){
    const output = fetch(`${base_url}/articles?_end=3`,{method:'GET'})
    .then((data) =>  data.json())

    return{
        type:'LATEST_NEWS',
        payload:output
    }
}