import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import store from "../store/store";

import {addToViewLater} from "../slicer/video-slicer";

export function UserDashBoard(){
    const [cookie, setCookie, removeCookie] = useCookies(['username']);
    const [videos, setVideos] = useState([{VideoId:0, Title:'', Url:'', Description:'', Likes:0, Dislikes:0, Views:'', Comments:[''], CategoryId:0}]);

    let navigate = useNavigate();

    let dispatch = useDispatch();

    function handleSignout(){
        removeCookie('username');
        navigate('/user-login');
    }

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5050/get-videos`)
        .then(response=>{
            setVideos(response.data);
        })
    },[])

    function handleSaveClick(video){
        alert('Video Saved..');
        dispatch(addToViewLater(video));
    }

    return(
        <div className="bg-light p-2 m-2">
            <h3 className="d-flex justify-content-between"><div><span>{cookie['username']}</span>  <span>Dashboard</span></div> <div><button onClick={handleSignout} className="btn btn-link">Signout</button></div></h3>
            <div className="row">
                <div className="col-2">
                    <div className="mb-3">
                        <label className="form-label fw-bold">Search Videos</label>
                        <div className="input-group">
                            <input type="text" className="form-control" />
                            <button className="bi bi-search btn btn-warning"></button>
                        </div>
                    </div>
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select className="form-select">
                                <option>Select Category</option>
                                <option>Java</option>
                                <option>React</option>
                                <option >Cloud</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <section className="mt-4 d-flex flex-wrap">
                        {
                            videos.map(video=>
                                <div className="card m-2 p-2" style={{width:'250px'}}>
                                    <div className="card-title" style={{height:'60px'}}>
                                        <h5>{video.Title}</h5>
                                    </div>
                                    <div className="card-body">
                                        <iframe src={video.Url} className="w-100" height="200"></iframe>
                                    </div>
                                    <div className="card-footer">
                                        <span className="bi bi-eye-fill">{video.Views}</span>
                                        <span className="bi mx-3 bi-hand-thumbs-up">{video.Likes}</span>
                                        <span className="bi bi-hand-thumbs-down">{video.Dislikes}</span>
                                        <button onClick={handleSaveClick} className="bi bi-download btn">Watch Later</button>

                                    </div>
                                </div>
                            )
                        }
                    </section>
                    
                </div>
            </div>
        </div>
    )
}