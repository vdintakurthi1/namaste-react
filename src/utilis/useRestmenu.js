import { useEffect, useState } from "react";
import { Menu_Url } from "../utilis/constants";

const useRestmenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_Url + resId);

    const json = await data.json();

    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestmenu;
