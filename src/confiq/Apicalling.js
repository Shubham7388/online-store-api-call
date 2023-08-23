const getApi=async (url,endpoint="")=>{
    let res=await fetch(`${url}/${endpoint}`);
    res=res.json();
    return res;
}    
export {getApi};



