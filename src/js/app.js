import { Window } from "./components/Window";

const start = async () => {
  if (navigator.serviceWorker) {
    window.addEventListener("load", async () => {
      try {
        if (navigator.serviceWorker) {
          await navigator.serviceWorker.register("/service-worker.js");
          console.log("sw registered");
        }
        // await registration.unregister();
      } catch (e) {
        console.log(e);
      }
    });
  }

  const newsWindow = new Window();
  newsWindow.bindToDOM(document.body);
  await newsWindow.getData();
};

start();
