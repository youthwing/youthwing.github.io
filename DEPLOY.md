# 部署指南

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run docs:build
```

## 部署到 GitHub Pages

### 方法一：手动部署

1. 构建项目
```bash
npm run docs:build
```

2. 进入构建输出目录
```bash
cd src/.vuepress/dist
```

3. 初始化 git 并推送到 gh-pages 分支
```bash
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:youthwing/youthwingVue.git master:gh-pages
```

4. 在 GitHub 仓库设置中启用 Pages，选择 gh-pages 分支

### 方法二：使用 GitHub Actions 自动部署

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run docs:build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: src/.vuepress/dist
```

推送代码后会自动构建并部署。

## 部署到其他平台

### Vercel

1. 导入 GitHub 仓库到 Vercel
2. 构建命令：`npm run docs:build`
3. 输出目录：`src/.vuepress/dist`

### Netlify

1. 连接 GitHub 仓库
2. 构建命令：`npm run docs:build`
3. 发布目录：`src/.vuepress/dist`

## 注意事项

- 如果部署在子路径，需要修改 `src/.vuepress/config.ts` 中的 `base` 配置
- 评论功能需要配置 Giscus，参考 [Giscus 官网](https://giscus.app/zh-CN)
