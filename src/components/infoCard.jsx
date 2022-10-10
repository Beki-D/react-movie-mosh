const InfoCard = () => {
    return ( 
        <div className="col-sm-5 col-md-6">
            <div className="card" style={{width: "18rem"}} >
                <img src="Vidly-logo.png" className="card-img-top p-2 ms-3" alt="..." style={{width: "14rem", height: "14rem"}} />
                <div className="card-body">
                    <h4 className="card-title">Vidly</h4>
                    <h6 className="card-title">Enjoy exclusive Vidly original movies and TV shows.</h6>
                    <p className="card-text text-muted">Join Vidly now for <del>$4.99</del> <mark>USD 3.99</mark> per month.</p>
                    <a href="/" className="btn btn-info">Sign up!</a>
                </div>
            </div>
        </div>
     );
}
 
export default InfoCard;