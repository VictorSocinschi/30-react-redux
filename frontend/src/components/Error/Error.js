import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice";

const Error = () => {
  const errorMesage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMesage) {
      toast.info(errorMesage);
      dispatch(clearError());
    }
  }, [errorMesage, dispatch]);
  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
