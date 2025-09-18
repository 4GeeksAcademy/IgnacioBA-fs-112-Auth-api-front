import React, {useEffect} from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
// import { getUserFavorites, validAuth } from "../services/userServices.js";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()



  useEffect(()=>{
	// getUserFavorites()
  },[])

	return (
		<div className="text-center mt-5">
			<h2>This is the home page</h2>
		</div>
	);
}; 