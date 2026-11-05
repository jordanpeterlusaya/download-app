(function () {
  const cfg = window.HAUL_DOWNLOAD || {};
  const releaseUrl = cfg.releaseApk || "";
  const expoUrl = cfg.expoApk || "";
  const pilotsRelease = cfg.pilotsReleaseApk || "";
  const pilotsExpo = cfg.pilotsExpoApk || "";
  const pilotsLocal = cfg.pilotsLocalApk || "downloads/haul-pilots.apk";

  let preferredUrl = releaseUrl || expoUrl;
  // Prefer GitHub Release when set; Expo artifact is the fallback.
  let preferredPilotsUrl = pilotsRelease || pilotsExpo || pilotsLocal;

  function setDownloadHrefs(url) {
    document.querySelectorAll("[data-download]").forEach((el) => {
      el.setAttribute("href", url);
      el.setAttribute("download", "haul-users.apk");
    });
  }

  function setPilotsHrefs(url) {
    document.querySelectorAll("[data-pilots-download]").forEach((el) => {
      el.setAttribute("href", url);
      el.setAttribute("download", "haul-pilots.apk");
    });
  }

  setDownloadHrefs(preferredUrl);
  setPilotsHrefs(preferredPilotsUrl);

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

  probeRelease();
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
