export const LoginForm = () => {
    
    return (
        <form action='#' className="mt-4">
            <div className="mb-3">
                <h3 className="fw-bold">Portal Dokter</h3>
                <p>Kelola informasi kesehatan dengan aman, Silahkan masuk untuk melanjutkan</p>
            </div>
            <div className="mb-3 d-flex flex-column gap-3">
                <button className="btn btn-primary text-light">Sign in with Google </button>
                <button className="btn btn-primary text-light">Sign in with Facebook</button>
            </div>
            <p className="text-center"> or </p>

            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" >Remember Me</label>
            </div>
            <button type="submit mt-2" className="btn btn-primary text-light">Submit</button>
        </form>
    )
}