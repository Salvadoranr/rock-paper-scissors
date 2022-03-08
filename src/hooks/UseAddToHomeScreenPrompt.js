import { useState, useCallback, useEffect, useMemo } from "react";

const isInWebApp =
  window.navigator.standalone ||
  window.matchMedia("(display-mode: standalone)").matches;

const UseAddToHomeScreenPrompt = () => {
  const [prompt, setPrompt] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [hasFinishedInstallation, setHasFinishedInstallation] =
    useState(isInWebApp);

  const promptToInstall = useCallback(
    function () {
      if (prompt) {
        prompt.prompt();
        prompt.userChoice.then(function (choiceResult) {
          if (choiceResult.outcome === "accepted") {
            setHasFinishedInstallation(true);
          }
        });
        return;
      }

      return Promise.reject(
        new Error(
          'Tried installing before browser sent "beforeinstallprompt" event'
        )
      );
    },
    [prompt]
  );

  useEffect(
    function () {
      if (prompt) {
        setIsReady(true);
      }
    },
    [prompt]
  );

  useEffect(function () {
    function ready(e) {
      e.preventDefault();
      setPrompt(e);
    }

    window.addEventListener("beforeinstallprompt", ready);

    return function () {
      window.removeEventListener("beforeinstallprompt", ready);
    };
  }, []);

  return useMemo(
    () => ({
      isReady,
      promptToInstall,
      hasFinishedInstallation
    }),
    [isReady, promptToInstall, hasFinishedInstallation]
  );
}
export default UseAddToHomeScreenPrompt