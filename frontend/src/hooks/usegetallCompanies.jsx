import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setallcompany, setloading } from '../redux/companyslice';
const usegetallCompanies=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getallcompanies= async ()=>{
            try{
                dispatch(setloading(true));
                const response=await fetch(`http://localhost:8000/api/company/getcompany`,{
                    method:'GET',
                    credentials:'include'
                })
                const data=await response.json();
                console.log("getallcompanies useffect wala",data.companies);
                dispatch(setallcompany(data.companies));
            }
            catch(error){
                console.log("Error while fetching allcompanies",error);
                dispatch(setloading(false));
            }
        }
        getallcompanies();
    },[dispatch])
}

export default usegetallCompanies;