// useFetch
let url = process.env.BASE_URL;

// OPTIONS
const getOptions = (method, data = "") => {
    return {
        method: `${method}`, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
};

// UNIVERSAL FETCH
export const useFetch = async (method, data, category, id = "") => {
    const options = getOptions(method, data);
    let res = await fetch(`${url}/${category}/${id}`, options);
    let data = await res.json();     
    return data;
};