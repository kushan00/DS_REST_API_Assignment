import React from 'react'
import { Link , useNavigate } from "react-router-dom";
import image from "../images/hom2.jpg";
import Map from './Map';

export default function Home() {

	const navigate = useNavigate();

  const handleSubmit= ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  }

  const handleSignUp= ()=>{
    navigate("/register");
  }

  return (
    <div>
      <center>
      <div style={{marginTop:"30px"}}>
          <center><h1 style={{color:"purple"}}>Welcome to Hotel Room Resevation System</h1></center> 
        </div>
        <br/>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="/Home">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">

                   {/* System Admin pages */}
                   <a style={{display:localStorage.getItem("userRole") == "systemAdmin" ?"flex":"none"}} className="nav-link active" aria-current="page" href="/AllRooms">All Rooms</a>
                   <a style={{display:localStorage.getItem("userRole") == "systemAdmin" ?"flex":"none"}} className="nav-link active" href="/AllResevations" aria-current="page">All Resevations</a>
                   <a style={{display:localStorage.getItem("userRole") == "systemAdmin" ?"flex":"none"}} className="nav-link active" href="/AllCustomers" aria-current="page">All Customers</a>    
                   <a style={{display:localStorage.getItem("userRole") == "systemAdmin" ?"flex":"none"}} className="nav-link active" href="/AllHotelAdmin" aria-current="page">All Hotel Admins</a> 

                  {/* Hotel admin Pages */}
                  <a style={{display:localStorage.getItem("userRole") == "hotelAdmin" ?"flex":"none"}} className="nav-link active" href="/AllCustomers" aria-current="page">All Customers</a>  
                  <a style={{display:localStorage.getItem("userRole") == "hotelAdmin" ?"flex":"none"}} className="nav-link active" href="/AllRooms" aria-current="page">All Rooms</a>  
                  <a style={{display:localStorage.getItem("userRole") == "hotelAdmin" ?"flex":"none"}} className="nav-link active" href="/AllResevations" aria-current="page">All Resevations</a>   
                  
                  {/* Customer Pages */}
                  <a style={{display:localStorage.getItem("userRole") == "customer" ?"flex":"none"}} className="nav-link active" href="/BookRoom" aria-current="page">Rooms</a>  
                  <a style={{display:localStorage.getItem("userRole") == "customer" ?"flex":"none"}} className="nav-link active" href="/CutomerProfile" aria-current="page">My Profile</a>  

                 </div>
                </div>
             </div>
             <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{float:"right" , marginRight:"10px"}}>
                      {!localStorage.getItem("userRole")?"Login":"Logout"}
             </button>
             <button onClick={handleSignUp} className="btn btn-primary" type="submit" style={{float:"right" , marginRight:"10px", width:"100px" , display:localStorage.getItem('userRole')?"none":"flex"}}>
                      Sign Up
             </button>
          </nav>
        </center>
        <div>
          <br/>
          <p style={{marginLeft:"20px",fontFamily:"Times New Roman" , fontSize:"20px"}}>
          Featuring free WiFi throughout the property, My Bed Vatican Museum is located in Rome, 
          164 feet from Vatican Museums. The closest metro station is 656 feet away. Each room has a flat-screen TV.

          </p>
          <center><img src={image} style={{width:"80%"}}/></center>
          
        </div>
        <br/>
        <br/>
        <div>
          <center><h1 style={{color:"purple"}}>Find Us On Google map</h1></center>
          <center><Map/></center>
        </div>
    </div>
  )
}
