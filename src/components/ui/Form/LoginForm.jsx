export const LoginForm = () => {
    
    return (
        <form action='#' className="mt-3">
            <div className="mb-3">
                <img src="../../../public/logohorizon.png" style={{ width : 200, height : 60 }}/>
            </div>
            <div className="mb-3">
                <h3 className="fw-bold text-primary">Portal Dokter</h3>
                <p>Kelola informasi kesehatan dengan aman, Silahkan masuk untuk melanjutkan</p>
            </div>

            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" placeholder="Enter your password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" >Remember Me</label>
            </div>

            <button type="submit" className="btn btn-primary text-light w-100">Login</button>


            <p className="text-center mt-2"> or </p>

        
            <div className="mb-3 d-flex flex-column gap-3">
                <button className="btn btn-outline-primary">Sign in with Google </button>
                <button className="btn btn-outline-primary">Sign in with Facebook</button>
            </div>

        </form>
    )
}