<div align="center">

  # 💀 Kuromu's Console

  **夜乃くろむ** — 雾蓝骨白的哥特可爱 × 终端美学 Astro 个人站

  [![Astro](https://img.shields.io/badge/Astro-5.18-909ec8?logo=astro)](https://astro.build)
  [![Tailwind](https://img.shields.io/badge/Tailwind-v4-06b6d4?logo=tailwindcss)](https://tailwindcss.com)
  [![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-f38020?logo=cloudflare)](https://pages.cloudflare.com)
  [![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

  🌐 **[fubuki.asia](https://fubuki.asia)** · 仓库 [RIMECHU/fubukis-station](https://github.com/RIMECHU/fubukis-station)

  <br>
  <img width="800" src="public/_preview.png" alt="Kuromu's Console preview" style="border-radius: 12px; border: 1px solid #30363d;">
</div>

---

## 品牌色

| Token | Hex | 用途 |
|-------|-----|------|
| Mist Blue | `#909ec8` | 主色、边框、辉光 |
| Lilac | `#c9a0dc` | 点缀、悬停、月相腮红 |
| Bone White | `#e8eef8` | 标题与高光文字 |
| Ink | `#0a0e1a` | 夜空底色 |

展示字体：**Grenze Gotisch**（哥特标题）+ Space Grotesk / JetBrains Mono

---

## 特性

<table>
  <tr>
    <td>🌙 <b>夜乃くろむ主题</b></td>
    <td>默认 Spectre 雾蓝夜色，星空星云 + 雾蓝/淡紫光晕</td>
  </tr>
  <tr>
    <td>💀 <b>入场动画</b></td>
    <td>哥特字标逐字显现、交叉骨与小骷髅落场（Grenze Gotisch）</td>
  </tr>
  <tr>
    <td>🖥️ <b>终端 Chrome</b></td>
    <td>月相感三骷髅顶栏（替代红黄绿圆点）、雾蓝描边与虚线强调</td>
  </tr>
  <tr>
    <td>🎬 <b>主页 Cover</b></td>
    <td>视频终端 + 本地封面、whoami 并排等高、文章列表终端化</td>
  </tr>
  <tr>
    <td>🧭 <b>导航栏</b></td>
    <td>毛玻璃夜色底、哥特 Brand、装饰十字架分隔、滚动自动显隐</td>
  </tr>
  <tr>
    <td>🎨 <b>60+ 主题</b></td>
    <td>Shiki 主题系统，可切换明暗风格</td>
  </tr>
  <tr>
    <td>🌐 <b>双语</b></td>
    <td>中文 / English，文件名后缀识别语言版本</td>
  </tr>
  <tr>
    <td>🎵 <b>音乐播放器</b></td>
    <td>淡入播放 TK from 凛として時雨，支持音量调节</td>
  </tr>
  <tr>
    <td>💬 <b>Giscus</b></td>
    <td>GitHub Discussions 评论</td>
  </tr>
  <tr>
    <td>⚡ <b>SPA 导航</b></td>
    <td>View Transitions / ClientRouter 无刷新切换</td>
  </tr>
</table>

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | [Astro 5](https://astro.build) |
| 样式 | [Tailwind CSS v4](https://tailwindcss.com) |
| 字体 | Grenze Gotisch · Space Grotesk · JetBrains Mono |
| 图标 | [Astro Icon](https://github.com/natemoo-re/astro-icon) + Phosphor |
| 内容 | MDX + Markdown（Shiki 高亮） |
| 部署 | [Cloudflare Pages](https://pages.cloudflare.com)（Git `main` 自动构建） |
| 评论 | [Giscus](https://giscus.app) |

## 本地开发

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 构建生产版本
yarn build

# 预览构建结果
yarn preview

# 生成主题颜色
yarn generate:themes

# 可选：本地 wrangler 部署
yarn deploy
```

> Node.js `>= 22.12` · 包管理器 Yarn 4

## 写博客

在 `src/content/blog/` 下创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章摘要"
pubDate: 2026-06-11
tags: [日常, 技术]
heroImage: "../../assets/blog-placeholder-1.jpg"
---

正文内容...
```

多语言：`my-post.md`（默认） + `my-post.en.md`（英文）

## 目录速览

```
src/
  components/   # Header、TermSkulls、OpeningAnimation、LatestPosts…
  pages/        # 主页、博客、关于、友链
  styles/       # global.css 字体与 token
  config/       # themes、profile
public/
  fonts/        # Grenze Gotisch 等
  video/        # 主页封面 poster.jpg
  mascot/       # 可选立绘资源
```

## License

MIT © [RIMECHU](https://github.com/RIMECHU)

---

<div align="center">
  <sub>夜乃くろむ · Made with bone & mist · <a href="https://fubuki.asia">fubuki.asia</a></sub>
</div>
