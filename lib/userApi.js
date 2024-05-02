const { default: axios } = require("axios");

module.exports={
    userList:async ()=>{
        
        try {
            const {data} = await axios.get(`${process.env.API_URL}/api/user`);
            return data
        } catch (error) {
            return error.response.data
        }
    },
    

}