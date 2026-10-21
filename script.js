(function () {
  const cfg = window.HAUL_DOWNLOAD || {};
  const releaseUrl = cfg.releaseApk || "";
  const expoUrl = cfg.expoApk || "";

  let preferredUrl = releaseUrl || expoUrl;

  function setDownloadHrefs(url) {
    document.querySelectorAll("[data-download]").forEach((el) => {
      el.setAttribute("href", url);
      el.setAttribute("download", "haul-users.apk");
    });
  }

  setDownloadHrefs(preferredUrl);

  // If the Release asset is missing (404), fall back to Expo for the next click.
  async function probeRelease() {
    if (!releaseUrl || !expoUrl) return;
    try {
      const res = await fetch(releaseUrl, { method: "HEAD", redirect: "follow" });
      if (!res.ok) {
        preferredUrl = expoUrl;
        setDownloadHrefs(preferredUrl);
      }
    } catch {
      // CORS/network: keep Release URL; browser will still navigate on click.
    }
  }

  probeRelease();

  // Splash ↔ home crossfade
  const frames = Array.from(document.querySelectorAll(".screen-img"));
  if (frames.length >= 2 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let idx = 0;
    setInterval(() => {
      frames[idx].classList.remove("is-active");
      idx = (idx + 1) % frames.length;
      frames[idx].classList.add("is-active");
    }, 3200);
  }
})();
