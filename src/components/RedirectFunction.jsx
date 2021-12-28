import { useEffect } from "react"
import { navigate } from 'gatsby'




const RedirectFunction = ({ url }) => {
  useEffect(() => {
    navigate(`${url}`);
  }, []);
  return null;
}

export default RedirectFunction