import React from "react"; 
import { useState } from "react"; // import useState

const isOdd = (num)=> { return num % 2;} 
const getBackGroundColor = (num)=>{
    let color = 'grey';
    if(isOdd (num)) color ='grey' //even
    else color ='white' //odd
 return color ;
}



const PhotoList = ({photos}) => {
    const [disable, setDisable] = React.useState(true);
    const [title, setName] = useState(""); // useState hook

    // handle change event
    const updateList = (e) => {

        e.preventDefault(); // prevent the default action
        setName(e.target.value); // set name to e.target.value (event)
    }

    return (
        <div className="container">
            <h2 className="mb-5">Photo Details</h2>
            <div className="card">
                <ul className="list-group">
                    {photos.slice(0, 10).map((photo) =>  (         
                        <li key={photo.id}style={{backgroundColor: getBackGroundColor(photo.id) }}  className="list-group-item">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control"  id="floatingInput" placeholder="Title Name.." onChange={() => setDisable(false)}/>
                                <label htmlFor="floatingInput">{photo.title}</label>
                            </div>
                            <div className="card col-md-4">
                                <h2>Image</h2>
                                <img src={photo.thumbnailUrl} className="card-img-top" alt="..."/> 
                            </div>
                            <div>{Date.now()}</div>
                            <div className="card-body"> 
                                <button className="btn btn-success" disabled={disable} onChange={updateList}>Confirm Update</button> &nbsp;
                                <button className="btn btn-primary float-right" disabled={disable}>Reset</button>
                            </div> 
                        </li> 
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PhotoList;