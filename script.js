(function () {
  const cfg = window.HAUL_DOWNLOAD || {};
  const playStoreUrl =
    cfg.playStoreUrl ||
    "https://play.google.com/store/apps/details?id=com.doordrop.mobile";
  const pilotsRelease = cfg.pilotsReleaseApk || "";
  const pilotsExpo = cfg.pilotsExpoApk || "";
  const pilotsLocal = cfg.pilotsLocalApk || "downloads/haul-pilots.apk";

  let preferredPilotsUrl = pilotsRelease || pilotsExpo || pilotsLocal;

  function setPlayStoreHrefs(url) {
    document.querySelectorAll("[data-play-store]").forEach((el) => {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
      el.removeAttribute("download");
    });
  }

  function setPilotsHrefs(url) {
    document.querySelectorAll("[data-pilots-download]").forEach((el) => {
      el.setAttribute("href", url);
      // Cross-origin: omit download attr so the browser follows GitHub's
      // Content-Disposition (.apk) instead of saving an HTML error body.
      el.removeAttribute("download");
    });
  }

  setPlayStoreHrefs(playStoreUrl);
  setPilotsHrefs(preferredPilotsUrl);

  async function probePilots() {
    if (!pilotsRelease) {
      setPilotsHrefs(pilotsExpo || pilotsLocal);
      return;
    }
    try {
      const res = await fetch(pilotsRelease, { method: "HEAD", redirect: "follow" });
      if (!res.ok) {
        preferredPilotsUrl = pilotsExpo || pilotsLocal;
        setPilotsHrefs(preferredPilotsUrl);
      }
    } catch {
      // Keep release URL; local path is a same-origin fallback when published under /downloads.
    }
  }

  probePilots();

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
