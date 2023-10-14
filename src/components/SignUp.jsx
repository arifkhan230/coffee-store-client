import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        // signUp with email password
        createUser(email,password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error.massage)
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left my-10">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;