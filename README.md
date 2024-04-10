<p align="center">
  <a href="https://baseline-protocol.org/">
    <img alt="" src="https://baseline-protocol-v2.netlify.app/logo-baseline-protocol.svg" width="60">
  </a>
</p>

<h1 align="center">
  Baseline Protocol
</h1>

<h3 align="center">
  baseline-protocol.org
</h3>

[![Netlify Status](https://api.netlify.com/api/v1/badges/9e9a7436-d524-4a5c-917c-9e9b7f64d4bd/deploy-status)](https://app.netlify.com/sites/baseline-protocol-v2/deploys)

[The website](https://www.baseline-protocol.org/) is built with [Hugo](https://gohugo.io/), an open-source static site generator, using a modified [Doks](https://getdoks.org/) theme. It is deployed on [Netlify](https://www.netlify.com/)'s Content Distribution Network.

<!--![Doks — Modern Documentation Theme](https://raw.githubusercontent.com/h-enk/doks/master/images/tn.png)-->

## Hugo Theme

As theme we have chosen [Doks](https://getdoks.org/). Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.

### Why this theme?

Nine main reasons why we chose Doks:

1. __Security aware__. Get A+ scores on [Mozilla Observatory](https://observatory.mozilla.org/analyze/doks.netlify.app) out of the box. Easily change the default Security Headers to suit your needs.

2. __Fast by default__. Get 100 scores on [Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=7731347bb8ce999eff7428a8e763b637) by default. Doks removes unused css, prefetches links, and lazy loads images.

3. __SEO-ready__. Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking.

4. __Development tools__. Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually.

5. __Bootstrap framework__. Build robust, flexible, and intuitive websites with Bootstrap 5. Easily customize your Doks site with the source Sass files.

6. __Netlify-ready__. Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers.

7. __Full text search__. Search your Doks site with FlexSearch. Easily customize index settings and search options to your liking.

8. __Page layouts__. Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs.

9. __Dark mode__. Switch to a low-light UI with the click of a button. Change colors with variables to match your branding.

## Requirements

Doks uses npm to centralize dependency management, making it [easy to update](https://getdoks.org/docs/help/how-to-update/) resources, build tooling, plugins, and build scripts.
It also leverages nvm (Node Version Manager) which allows you to quickly install and use different versions of node via the command line.

- Download and install [Node.js](https://nodejs.org/) (it includes npm) for your platform.
- Download and install [Node Version Manager](https://github.com/nvm-sh/nvm) for your platform.

## Contribute

You want to contribute to the Baseline website? Awesome! Get up and running in three steps:

### 1. Clone repo
```bash
git clone https://github.com/ethereum-oasis-op/baseline-website.git baseline-website && cd baseline-website
```

### 2. Switch to proper Node version and install dependencies

```bash
nvm use && npm install
```

### 3. Start development server

```bash
npm run start
```

