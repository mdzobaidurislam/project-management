const { default: axios } = require("axios");

module.exports={
    taskList:async (query)=>{
        
        try {
            const {data} = await axios.get(`${ process.env.API_URL}/api/task?pagination=false&${query}`);
            return data
        } catch (error) {
            return error.response.data
        }
    },
    taskAdd:async (addData)=>{
        
        try {
            const {data} = await axios.post(`${ process.env.API_URL}/api/task`,addData);
            return data
        } catch (error) {
            return error.response.data
        }
    },

}