import { useState, useEffect } from "react";

const useOnlineStatue = () => {
  // Check user is online or offline
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener(
      "offline",
      () => {
        setOnlineStatus(false);
      },
      [],
    );

    window.addEventListener(
      "online",
      () => {
        setOnlineStatus(true);
      },
      [],
    );
  });
  return onlineStatus;
};

export default useOnlineStatue;
