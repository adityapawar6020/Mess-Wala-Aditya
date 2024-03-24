import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MESS, MESSRATING } from "../utils/constants"

const MessDetails = () => {
  const [messData, setMessData] = useState([])       // rating ahe tevha messdatawala
  const [data, setData] = useState({                 // rating nai a tevha data wala use hoty mahanjech json wala

    choice : "" ,
    city: " ",
    email:  " dgdffghfhj",
    landmark:" " ,
    messId  : 0,
    messName:"",
    messPlan:"",
    messPlanPrice:0,
    messTime:" ",
    mobile:" ",
    password: " ",
    rating:0,
    state:" ",
    status:null,
    userName:""
   
  })
  const { id } = useParams()



  const fetchMess = async () => {
   const response= await axios.get(`${MESS}/${id}`);
   console.log(response)
   setData(
   {
    choice : response.data.choice ,
    city: response.data.city,
    email: response.data.email,
    landmark: response.data.landmark ,
    messId  : response.data.messId,
    messName:response.data.messName,
    messPlan:response.data.messPlan,
    messPlanPrice:response.data.messPlanPrice,
    messTime:response.data.messTime,
    mobile:response.data.mobile,
    password: response.data.password,
    rating:0,
    state:response.data.state,
    status:response.data.status,
    userName:response.data.UserName
   
   }
   )
  }

  const fetchData = async () => {
    await axios.get(`${MESSRATING}/${id}`).then((response) => {
      console.log(response.data)
      setMessData(response.data)
      if (response.data.length === 0) {
        fetchMess()
      }
      console.log(messData) //mesdata wala data
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
<>


    
     { messData.length==0?(<div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white w-1/2">
      <h1 className="text-3xl font-bold mb-4">{data.messName}</h1>
      <h3 className="text-[20px] mb-2">Time: {data.messTime}</h3>

      <h2 className="text-xl font-semibold mb-2">{data.email}</h2>

      <span className="text-[20px] mb-2">
          <h3 className="text-[20px] mb-2">{data.landmark}, {data.city}, {data.state}. </h3>
      </span>
      
      {data.messPlan !=" " ? (
        <span className="text-[20px] mb-2">{data.messPlan} : {data.messPlanPrice}</span>
      ) : (
        "Not Avialable"
      )}
      
      
    </div>


      ):
      (
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg text-white w-1/2">
      <h1 className="text-3xl font-bold mb-4">{messData[6]}</h1>
      <h3 className="text-[20px] mb-2">Time: {messData[9]}</h3>

      <h2 className="text-xl font-semibold mb-2">{messData[4]}</h2>

      <span className="text-[20px] mb-2">
          <h3 className="text-[20px] mb-2">{messData[5]}, {messData[3]}, {messData[13]}. </h3>
      </span>
      
      {messData[8] ? (
        <span className="text-[20px] mb-2">{messData[7]} : {messData[8]}</span>
      ) : (
        "Not Avialable"
      )}
      
      
    </div>
   )

      }

     </>
  )
}

export default MessDetails
