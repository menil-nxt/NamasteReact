import { use, useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRastaurantMenu = (resID) => {
  const [resInfo, setReaInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API + resID + "&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await response.json();
    setReaInfo(json);
  };

  return resInfo;
};

export default useRastaurantMenu;
