import { useEffect } from "react";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { useLocation } from "react-router-dom";

const useMatomoAnalytics = () => {
  const location = useLocation();
  const { trackEvent } = useMatomo();

  useEffect(() => {
    console.log("Location", location);
  });
};

export default useMatomoAnalytics;
