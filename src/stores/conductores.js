import {defineStore} from "pinia"
import axios from "axios"

export const usePersonStore = defineStore("person",()=>{
    let data= ""

    const registrarPersona = async(info)=>{
        try {
            let datos = await axios.post("http://localhost:4506/api/personas",info)
            return datos
        } catch (error) {
            console.log(error);
        }
    }

    return{
        registrarPersona
    }
})