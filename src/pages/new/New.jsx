import React from "react";
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
const New = () => {

    return (

        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>Add new User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://source.unsplash.com/FbN2z3bEaSs" alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadIcon className="icon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="john_doe"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Name and surname</label>
                                <input type="text" placeholder="John Doe"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="johndoe@gmail.com"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder="+91-1234567890"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Password</label>
                                <input type="password"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="Susnilewa, Dhanbad"/>
                            </div>
                            <div className="formInput">
                                <label htmlFor="">Country</label>
                                <input type="text" placeholder="India"/>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default New