import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
const [user,setUser] = useState({});

useEffect(()=>{
    const userStorage = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(userStorage);
},[])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-create">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3 color-title bg-body-create" to="/">💸Good Budget💲</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fs-5 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto ">
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color bg-body-create" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color" aria-current="page" to="/my-transactions">My Transaction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color" aria-current="page" to="/add-transactions">Add Transaction</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color" aria-current="page" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-bold me-5 color" aria-current="page" to="/signup">SignUp</Link>
                            </li>

                        </ul>
                        <div className='logout fw-bold color'>
                            Hello🖐,{user.name || "User!"}
                            {user?.name ?
                            (<span className='logout-img'
                                onClick={()=>{localStorage.removeItem('user'); window.location.href='/login'}}> Logout </span>)
                                :
                                null}
                        </div>
            
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;