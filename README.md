# ANDROID-PALM-PROMOTER 下载站

这个项目使用 GitHub 免费能力完成两件事：

- GitHub Pages 托管下载网页，不需要本地电脑一直开着。
- GitHub Releases 托管 APK，提供固定的最新版直接下载链接。

参考的免费服务清单是 `ripienaar/free-for-dev`，本项目选择其中最适合这个场景的 GitHub Pages + GitHub Releases。

## 当前 APK

- 应用：`ANDROID-PALM-PROMOTER`
- 渠道：`nile-rn-dev`
- 版本：`3.8.1`
- 原始文件：`Nile-3.8.1-847-release.apk`
- GitHub Release 固定资产名：`ANDROID-PALM-PROMOTER_latest.apk`
- SHA-256：`673429a1f72dc9a22e33f0ed083e4090d636cb8f297c048a78b031af6beca6ab`

固定下载链接格式：

```text
https://github.com/<你的GitHub用户名>/<仓库名>/releases/latest/download/ANDROID-PALM-PROMOTER_latest.apk
```

只要以后发布 Release 时继续使用 `ANDROID-PALM-PROMOTER_latest.apk` 这个资产名，这个链接就永远指向最新版。

## 文件结构

- `site/`：GitHub Pages 静态网站
- `site/release.json`：当前版本信息
- `.github/workflows/pages.yml`：部署网页到 GitHub Pages
- `.github/workflows/publish-apk-release.yml`：从二维码链接下载 APK 并发布到 GitHub Release
- `GITHUB_DEPLOY.md`：完整部署步骤

## 部署

按 [GITHUB_DEPLOY.md](./GITHUB_DEPLOY.md) 操作。

## 本地预览网页

```bash
cd site
python3 -m http.server 8080
```

打开：

```text
http://localhost:8080/
```

本地预览时下载按钮会使用二维码里的原始 APK 地址；部署到 GitHub Pages 后会自动切换成 GitHub Release 直链。
