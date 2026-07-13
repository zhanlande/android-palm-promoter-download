(async function init() {
  const response = await fetch("./release.json", { cache: "no-store" });
  const release = await response.json();

  const pageInfo = getGitHubPagesInfo();
  const downloadUrl = pageInfo
    ? `https://github.com/${pageInfo.owner}/${pageInfo.repo}/releases/latest/download/${release.assetName}`
    : release.sourceUrl;

  const title = `${release.appName} ${release.channel}`;
  document.title = `${release.appName} ${release.version} 下载`;
  setText("appName", release.appName);
  setText("subtitle", `${release.channel} · ${release.sourceFileName}`);
  setText("version", `${release.version} (${release.build})`);
  setText("size", formatBytes(release.sizeBytes));
  setText("channel", release.channel);
  setText("sha256", release.sha256);
  setText("downloadUrl", downloadUrl);

  const button = document.getElementById("downloadButton");
  button.href = downloadUrl;
  button.removeAttribute("aria-disabled");
  button.setAttribute("download", "");
  button.setAttribute("title", title);

  const copyButton = document.getElementById("copyButton");
  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(downloadUrl);
    copyButton.textContent = "已复制";
    setTimeout(() => {
      copyButton.textContent = "复制下载链接";
    }, 1400);
  });
})();

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let index = 0;
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index += 1;
  }
  return `${index === 0 ? size : size.toFixed(1)} ${units[index]}`;
}

function getGitHubPagesInfo() {
  const host = window.location.hostname;
  if (!host.endsWith(".github.io")) return null;

  const owner = host.slice(0, -".github.io".length);
  const firstPath = window.location.pathname.split("/").filter(Boolean)[0];
  const repo = firstPath || `${owner}.github.io`;

  return { owner, repo };
}
