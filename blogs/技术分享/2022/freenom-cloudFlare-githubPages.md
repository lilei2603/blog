---
title: 利用Freenom + CloudFlare + Github Pages搭建个人博客
date: 2022-06-14
tags:
 - GitHub Pages
categories:
 -  技术分享
sticky: 1
---

::: tip

- [Freenom](https://www.freenom.com/)：是世界上第一个也是唯一的免费域名提供商。

- [CloudFlare](https://www.cloudflare.com/)：以向客户提供网站安全管理、性能优化及相关的技术支持为主要业务。

- [GitHub Pages](https://github.com/)：是 Github 提供的一种免费的静态网页托管服务。

:::

<!-- more -->

## 前言

拥有一个自己的博客, 是每个程序员的梦想。个人博客的搭建方式也是各种各样，如果你只是想单纯做一个博客，和世界分享你的观点和视角，那么我推荐使用 [GitHub Pages](https://github.com/)，接下来开始进入主题，利用[Freenom](https://www.freenom.com/) + [CloudFlare](https://www.cloudflare.com/) + [GitHub Pages](https://github.com/)（“白嫖使我快乐”三件套）开始搭建个性化域名的个人博客网站。

## Github申请

1. 前往[GitHub](https://github.com/)官网，快速申请我们的账号。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-1.png)

2. 完成账号注册后，[GitHub](https://github.com/)会对我们的账号进行检测，检测完成点击下方的“Join a free plan”按钮。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-2.png)

3. 这里会让我们选择或填写个人的相关信息，我们可以不选择填写，直接下方的“Complete setup”按钮。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-3.png)

4. 最后一步，[GitHub](https://github.com/)会给我们注册的邮箱里发送验证邮件，我们前往邮箱进行验证即可。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-4.png)

5. 到此，我们的[GitHub](https://github.com/)账号已经注册完成，我们点击“Create a repository”按钮，创建我们的仓库。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-5.png)

6. 创建仓库这里我们需要重点注意，因为我们需要创建[GitHub](https://github.com/)提供的免费静态网页站点，为节省不必要的时间，仓库名必须是“Giuhub用户名.github.io”，其他信息可不填写，点击下方的“Create repository”。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-6.png)

7. 接下来，我们为我们的博客网站创建一个首页，点击“creating a new file”。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-7.png)

8. 我们创建一个“index.html”，这里我们随便编写一下首页代码，后续我们可通过相关的博客框架进行开发。

   ```html
   <html>
       <head>
           <title>My Blog</title>
       </head>
       <body>
           <h1>This is my blog</h1>
       </body>
   </html>
   ```

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-8.png)

9. 首页创建完成后，我们点击“Settings”按钮，查看我们的GitHub Pages是否正常启用。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-9.png)

10. 在打开的设置页面，我们拖到下方的“GitHub Pages”选项，如图所示即表明我们的GitHub Pages已经可以正常访问

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-10.png)

11. 点击我们的GitHub Pages访问地址，成功打开之前编辑的首页内容。

![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-11.png)到此，我们的GitHub Pages就已经注册完毕，如果我们想使用自己的个性化域名，而不想使用[GitHub](https://github.com/)提供给我们的地址访问我们的网站呢？别急，精彩继续！

## Freenom域名申请

1. 前往[Freenom](https://www.freenom.com/)官网，在首页输入你想要的域名，点击右侧的“检查可用性”。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-1.png)

2. 目前[Freenom](https://www.freenom.com/)支持4种（.tk、.ml、.ga、.cf）免费域名的申请，选中自己喜欢的域名，点击右侧的“现在获取”，右上方出现“1购物车中的域”时，点击“完成”。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-2.png)

3. 在右侧选择域名的有效期，[Freenom](https://www.freenom.com/)可支持最长12个月的免费使用期限，我们那必须选择12个月咯（“白嫖”使我快乐）。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-3.png)

4. 接下来[Freenom](https://www.freenom.com/)需要我们登录账号，我们可以在左侧使用自己的邮箱进行注册，也可选择右侧的Google、Facebook账号登录注册。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-4.png)

5. 在完成邮箱验证后，我们需要填写我们的账号信息，这里我们可以在[M国身份大全](http://www.shenfendaquan.com/)网站中查找身份信息，并填写到[Freenom](https://www.freenom.com/)详细信心栏中，需要注意：电话号码需要删除“-”，否则会报错。在信息填写完并确认无误后，勾选下方“同意条款和条件”，并点击右侧的“Complete Order”按钮。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-5.png)

6. 当显示订单信息后，我们申请的个性化域名就可以免费使用了。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-6.png)

## CloudFlare域名解析

1. 前往[CloudFlare](https://www.cloudflare.com/)官网注册账号

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-1.png)

2. 完成账号的申请及邮箱的验证。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-2.png)

3. 回到首页，我们点击“Add Site”按钮，添加站点。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-3.png)

4. 这里我们选择免费的服务即可，点击下方的“confirm plan”。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-4.png)

5. 这里我们需要对我们之前申请的GitHub Pages的域名及IP进行解析！其中blogdemo.tk的内容部分为我们在终端上ping我们的GitHub Pages的IP地址，如：`ping blogdemo.github.io`。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-5.png)

6. 接下来[CloudFlare](https://www.cloudflare.com/)会提供给我们两个“Nameserver”，我们需要到我们的域名提供商那里进行“Nameservers”的修改。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-6.png)

7. 我们返回[Freenom](https://www.freenom.com/)，登录我们申请域名的账号，点击上方的“Services”菜单中的“My Domains”选项，下方会显示我们已注册的域名信息。此时，我们点击右侧的“Manage Domain”按钮，管理我们的域名。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-7.png)

8. 我们点击“Management Tools”，选择“Nameservers”选项。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-8.png)

9. 这里我们选择“Use custom nameservers (enter below)”选项，并输入第6步中[CloudFlare](https://www.cloudflare.com/)提供给我们的两个“Nameserver”，填写完成后，点击下方的“Change Nameservers”。

   ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/freenom-9.png)

10. 此时我们回到[CloudFlare](https://www.cloudflare.com/)，点击下方的“Done, check nameservers”，或者“Re-check now”按钮进行“Nameservers”的验证。

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-7.png)

11. 验证成功后，我们回到首页，看到我们的站点状态已经生效。

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-8.png)

12. 接下来，我们配置HTTPS，我们点击我们的站点，选择上方的“SSL/TLS”按钮，加密模式我们选择“完全”。

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-9.png)

13. 切换的“边缘证书”选项，开启下方的“始终使用HTTPS”选项。

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-10.png)

14. 切换到“页面规则”选项，创建一个页面规则，填写信息如下图所示。

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-11.png)

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/cloudflare-12.png)

## GitHub域名绑定

1. 我们回到[GitHub](https://github.com/)，在“Custom domain”中输入我的个性化域名，点击“save”保存，并开启下方的“Enforce HTTPS”，[GitHub](https://github.com/)将开始对域名进行绑定，此过程耗费时间较长，我们可以喝杯茶，吃个点心，安心等待即可。

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-12.png)

2. 待[GitHub](https://github.com/)绑定域名完成后，我们在浏览器中输入我们的个性化域名地址，如果能成功打开首页内容，那么恭喜你，此刻开始，你已经入坑博客主了，开启你的博客生涯吧！

    ![img](https://lilei2603.github.io/images/freenom-cloudFlare-githubPages/github-13.png)

## 结尾

到此，我们的博客已经完成初始化，此处应该应该有掌声！接下来我们可以使用[VuePress](https://vuepress.vuejs.org/)、[Hexo](https://hexo.io/zh-cn/)等框架来快速完成博客的搭建了。

::: danger
本文作者：Lei

<!-- 本文链接：<https://lilei2603.github.io/blogs/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/2020/freenom-cloudFlare-githubPages.html> -->

版权声明：本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可协议。非商业转载及引用请注明出处（作者、原文链接），商业转载请联系作者获得授权。
:::
