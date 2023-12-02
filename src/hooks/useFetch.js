import { useEffect, useRef, useState } from "react"

export const useFetch = (url,_example) =>{

    const [data,setData] =useState(null)
    const [loading,setLoading] =useState(false)
     const example =useRef(_example)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error (response.statusText)
                }
                const result = await response.json()
                setLoading(false)
                setData(result)
                console.log('---')
            }
            catch (error){
                console.log(error.message)
            }
          
        }
        fetchData();
    },[url,example])


    return {data, loading}
}