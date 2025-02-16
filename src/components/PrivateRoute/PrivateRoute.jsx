import { useContext } from "react";
import PropTypes from 'prop-types'
import { AuthContext } from "../Authprovider/Authprovider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
     
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }


    if(user){
        return children;
    }
    else{
        <Navigate tp="/login"></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};
PrivateRoute.propTypes = {
    children:PropTypes.object
}

export default PrivateRoute;