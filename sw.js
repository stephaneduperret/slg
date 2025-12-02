self.addEventListener("install", e => {
  console.log("Service worker installé");
});

self.addEventListener("activate", e => {
  console.log("Service worker activé");
});
