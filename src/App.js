import { useHistory } from "react-router-dom";
import { Switch, Route} from "react-router-dom";
import BasicForm from "./formValidateSchema";
import './App.css';



export default function App(){

  return(
    <div className="app">
        
   
           <Switch>
             <Route exact path="/">
              <Welcome/>
             </Route>
           <Route path ="/form">
             <BasicForm/>
           </Route>
           </Switch>
    </div>
  )
}

function Welcome(){
  const history = useHistory();
  return(
    <div className="conatiner mt-3">
        <h1 className="text-center"><span>FORMIK</span> VALIDATION </h1>
        <p className="text=muted text-center">(click on below button to Sign-up)</p>
      
         {/* sign-up page */}
         
         <div className="pic">
         <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjdNqQL-ch1VVYHv2yzmv9n_Dg4NY3bUUBiHSRbkG4AUo0uxkRzPEyz89fWM6gi7HHVc&usqp=CAU"/>
         </div>
         <div className="button" >
         <button onClick={()=> {
           history.push("/form")}} className="B" ><b>sign-up</b></button>
           </div>
           </div>
        
        
  )
}


