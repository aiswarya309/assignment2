import React from "react";
import {useEffect} from "react"
import { useDispatch,useSelector} from 'react-redux';
import descriptionMiddle from '../../Redux/Description/descriptionMiddle'
import { rootState } from "../../Redux/Reducer";
import descriptionResucer from '../../Redux/Description/descriptionReducer'


function Details(){
	const dispatch =useDispatch()
	const about = useSelector((State:rootState)=>{
        return State.descriptionResucer.about
      })
	  console.log("desrptin.tsx about",about)
	  const data=about.result


	useEffect(()=>{
		dispatch<any>(descriptionMiddle())
	},[])
    return(
        <section className="common">
	<div className="section-two">
	{
				data && data.map((value:any,index:any)=>{
					return <div key={index}>
						<h2>{value.title}</h2>
						<p>{value.content}</p>
					</div>
				})
				
			}		
	{/* <h2>Details</h2>
	<p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut magna turpis. Proin non fringilla nisi. Suspendisse malesuada felis id nibh<br/>
	ullamcorper vulputate. Nam commodo dolor eu sem feugiat, id hendrerit nunc vestibulum. Quisque scelerisque elementum sem, id lobortis arcu pellentesque sit.<br/>
	lacinia lobortis aliquet. Quisque pharetra arcu eget tortor malesuada faucibus. Praesent tempor lobortis facilisis. Phasellus et mattis tellus. Duis consectetur augue<br/>
	 lacus, quis fringilla risus varius eget. Integer ut est sollicitudin, pulvinar est non, consectetur elit.
	 </p> */}
	</div>
</section>
    )
}

export default Details