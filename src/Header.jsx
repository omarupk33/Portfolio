function Header(){
    return <div className="header">
       <div className="profile-section">
        <div className="pic">
            {/* Not rendering for some reason */}
            <img src="assets/image.png" width='20px' height='auto'  alt="pic" ></img>
        </div>
        <h3 className="name">
            Omar and Rayyan
        </h3>
       </div>   
       
       <div className="cv"><a href="#example">A link for CV</a>

       </div>

       <div className="about you">
        <a href="#example">A link for about you page</a>
       </div>

    </div>
}

export default Header