import axios from "axios"

export const simpleGet = async (url) =>{
    try{
        const response = await axios.get(url);
        console.log("response",response);
        return {
            response:response,
            error:""
        }
    
    }catch(err){
        return {
            error:`se ha producido un error:${err}`,
            errData:err.response
        }
    }

}