import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('PhotoURL');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);
    }
        return (
            <div>
                <Navbar></Navbar>

                <div>
                    <h2 className="text-3xl my-10 text-center">Please Register</h2>
                    <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="PhotoURL" name="PhotoURL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <p className="text-center mt-4">Already have an account?<Link className="text-blue-600 font-semibold" to="/login">Login</Link></p>
                </div>
            </div>
        );
    };

    export default Register;