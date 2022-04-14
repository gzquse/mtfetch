const fetch = require('node-fetch')

module.exports.get = async url => {
    const res = await fetch(url)
    return await res.json();
};

//post
module.exports.post = async (url,data) => {
    const res = await fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await res.json();
};

//put
module.exports.put = async (url,data) => {
    const res = await fetch(url,{
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return 'update success';
};

//delete
module.exports.delete = async (url,data) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
    return await res.json();
};