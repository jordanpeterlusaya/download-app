window.HAUL_DOWNLOAD = {
  // Prefer GitHub Release asset (stable). Created by .github/workflows/release-apk.yml
  releaseApk:
    "https://github.com/jordanpeterlusaya/download-app/releases/latest/download/haul-users.apk",
  // Stable Expo artifact redirect (fallback if release not ready yet)
  expoApk:
    "https://expo.dev/artifacts/eas/VnyTgoJlRas_rvl9h-MWu6aPg7LyZ75SwchIeOp-EeI.apk",
  buildPage:
    "https://expo.dev/accounts/lusayaapeters-team/projects/DoorDrop/builds/d5410e46-3b27-4843-8ca5-550552a4ad76",

  // HAUL Pilots (driver app) — standalone build 2026-11-05
  // Use the pilots tag (not /latest/, which is the customer v1.0.0 release and has no pilots APK).
  // Package: com.doordrive.app — signed with EAS credentials (differs from older debug/standalone keys).
  // Users with an older DoorDrive/HAUL Pilots install must uninstall first.
  pilotsReleaseApk:
    "https://github.com/jordanpeterlusaya/download-app/releases/download/pilots-v1.0.0/haul-pilots.apk",
  pilotsExpoApk:
    "https://expo.dev/artifacts/eas/eq1jnYIfIETUuHetWhx64-VUhkr5zWB25HpCP7YKa_g.apk",
  pilotsBuildPage:
    "https://expo.dev/accounts/lusayaapeters-team/projects/doordrive/builds/745aa87f-3247-4ae2-9918-93a15eb78186",
  pilotsLocalApk: "downloads/haul-pilots.apk",
};
