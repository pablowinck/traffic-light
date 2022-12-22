import React, { createContext, useContext, useEffect, useState } from "react";

export type LightType = "red" | "yellow" | "green";

type ContextProps = {
  light: LightType;
};

const LightContext = createContext({} as ContextProps);

export const useLightContext = () => useContext(LightContext);

const LightProvider = ({ children }: { children: React.ReactNode }) => {
  const [light, setLight] = useState<LightType>("green");

  const toggle = () => {
    const options: LightType[] = ["green", "yellow", "red"];
    setLight(
      options[
        options.indexOf(light) === options.length - 1
          ? 0
          : options.indexOf(light) + 1
      ]
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (light !== "yellow") {
        setTimeout(() => {
          toggle();
        }, 3000);
      } else {
        toggle();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [light]);

  return (
    <LightContext.Provider value={{ light }}>{children}</LightContext.Provider>
  );
};

export default LightProvider;
