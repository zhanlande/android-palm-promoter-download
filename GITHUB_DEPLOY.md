# GitHub Pages + Releases 部署说明

这个项目已经改成可以部署到 GitHub：

- `site/`：静态下载网站，会部署到 GitHub Pages。
- `.github/workflows/pages.yml`：自动把 `site/` 发布为网页。
- `.github/workflows/publish-apk-release.yml`：在 GitHub 服务器上下载二维码对应的 APK，并上传到 GitHub Release。

## 1. 创建 GitHub 仓库

建议仓库名：

```text
android-palm-promoter-download
```

仓库需要是 public，使用 GitHub 免费版时 GitHub Pages 最省事。

## 2. 推送代码

```bash
git init
git add .
git commit -m "Add GitHub Pages download site"
git branch -M main
git remote add origin https://github.com/<你的GitHub用户名>/android-palm-promoter-download.git
git push -u origin main
```

## 3. 开启 GitHub Pages

进入仓库：

```text
Settings -> Pages -> Source -> GitHub Actions
```

推送后，`Deploy GitHub Pages` 工作流会生成网页地址：

```text
https://<你的GitHub用户名>.github.io/android-palm-promoter-download/
```

## 4. 发布 APK 到 GitHub Release

进入仓库：

```text
Actions -> Publish APK Release -> Run workflow
```

默认参数已经填好当前二维码文件：

```text
版本：3.8.1
来源文件：Nile-3.8.1-847-release.apk
发布资产名：ANDROID-PALM-PROMOTER_latest.apk
```

发布完成后，固定直链是：

```text
https://github.com/<你的GitHub用户名>/android-palm-promoter-download/releases/latest/download/ANDROID-PALM-PROMOTER_latest.apk
```

以后发布新 APK 时，继续保持资产名为 `ANDROID-PALM-PROMOTER_latest.apk`，这个下载链接就不用改。
