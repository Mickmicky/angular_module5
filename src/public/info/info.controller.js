<!DOCTYPE html>
<!-- saved from url=(0124)https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
  <link rel="dns-prefetch" href="https://github.githubassets.com/">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-YMmzFjPJlvm/Qhqug7ZE3UZYDXl4sfGs/xmLIlbN/cPFV/AU5/89DOLsHIwlpQFyji5oVuWE049paRcr+RF3cQ==" rel="stylesheet" href="./info.controller_files/frameworks-60c9b31633c996f9bf421aae83b644dd.css">
  
    <link crossorigin="anonymous" media="all" integrity="sha512-nE04eXFjy2BsjXb0ebP8VWbZyNeZ9IUeYYega6ljSbewyx2t5uTOhbSn5ckJiM6soO/6NbmY6P1wGm+1oKoybg==" rel="stylesheet" href="./info.controller_files/github-9c4d38797163cb606c8d76f479b3fc55.css">
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>Editing Single-Page-Web-Applications-with-AngularJS/info.controller.js at master · igogra/Single-Page-Web-Applications-with-AngularJS</title>
    <meta name="description" content="Solutions to module assignments for the  &quot;Single Page Web Applications with AngularJS&quot; Coursera MOOC taught by Johns Hopkins University - igogra/Single-Page-Web-Applications-with-AngularJS">
    <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  <meta name="apple-itunes-app" content="app-id=1477376905">

    <meta name="twitter:image:src" content="https://avatars3.githubusercontent.com/u/6216276?s=400&amp;v=4"><meta name="twitter:site" content="@github"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="igogra/Single-Page-Web-Applications-with-AngularJS"><meta name="twitter:description" content="Solutions to module assignments for the  &quot;Single Page Web Applications with AngularJS&quot; Coursera MOOC taught by Johns Hopkins University - igogra/Single-Page-Web-Applications-with-AngularJS">
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/6216276?s=400&amp;v=4"><meta property="og:site_name" content="GitHub"><meta property="og:type" content="object"><meta property="og:title" content="igogra/Single-Page-Web-Applications-with-AngularJS"><meta property="og:url" content="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS"><meta property="og:description" content="Solutions to module assignments for the  &quot;Single Page Web Applications with AngularJS&quot; Coursera MOOC taught by Johns Hopkins University - igogra/Single-Page-Web-Applications-with-AngularJS">

  <link rel="assets" href="https://github.githubassets.com/">
    <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/65824685/ws?session=eyJ2IjoiVjMiLCJ1Ijo2NTgyNDY4NSwicyI6NTM4MzgyMTkyLCJjIjozMzIxNzAyNDQwLCJ0IjoxNTk1MjI3NDMyfQ==--a3a0965ecd66eb6ef8c61d74ee592ca5ad026332503e67d09e25d9330b32459e" data-refresh-url="/_ws">
  <link rel="sudo-modal" href="https://github.com/sessions/sudo_modal">

  <meta name="request-id" content="462F:0FED:1C121E0:249F809:5F153D25" data-pjax-transient="true"><meta name="html-safe-nonce" content="926aa165ff6e6157090620b3db6a1eba43829008" data-pjax-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9pZ29ncmEvU2luZ2xlLVBhZ2UtV2ViLUFwcGxpY2F0aW9ucy13aXRoLUFuZ3VsYXJKUy9ibG9iL21hc3Rlci9Nb2R1bGU1L3NyYy9wdWJsaWMvaW5mby9pbmZvLmNvbnRyb2xsZXIuanMiLCJyZXF1ZXN0X2lkIjoiNDYyRjowRkVEOjFDMTIxRTA6MjQ5RjgwOTo1RjE1M0QyNSIsInZpc2l0b3JfaWQiOiI3OTQ5NzYxODg4Mzg3NDExMTU4IiwicmVnaW9uX2VkZ2UiOiJhcC1zb3V0aC0xIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-pjax-transient="true"><meta name="visitor-hmac" content="be60926099a0c2007a8a8490d33253e6c37d3bbed3961fc508b780a4ff3bcae6" data-pjax-transient="true">

    <meta name="hovercard-subject-tag" content="repository:76144096" data-pjax-transient="">


  <meta name="github-keyboard-shortcuts" content="repository,code-editor" data-pjax-transient="true">

  

  <meta name="selected-link" value="repo_source" data-pjax-transient="">

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com"><meta name="octolytics-app-id" content="github"><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event"><meta name="octolytics-dimension-ga_id" content="1036894893.1581591770" class="js-octo-ga-id"><meta name="octolytics-actor-id" content="65824685"><meta name="octolytics-actor-login" content="Mickmicky"><meta name="octolytics-actor-hash" content="41de1fe432c54ec721d59e4978249c4103996b94822746c63734c229886d495e">

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/edit" data-pjax-transient="true">

  




    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="9872454d4bf440ff64d60f9051c25afa">

<meta class="js-ga-set" name="dimension10" content="Responsive" data-pjax-transient="">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="Mickmicky">


      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="YzhmNjBmMWM1ODQyNzBmMGMwOGIzZDQwZmE3M2U3YjdiOTRiMjQ4MmZjOWQ5ZTBjYjY1YWFhOWRmMDM2YTViZHx7InJlbW90ZV9hZGRyZXNzIjoiMTA2LjIxMC4yMTYuMTE4IiwicmVxdWVzdF9pZCI6IjQ2MkY6MEZFRDoxQzEyMUUwOjI0OUY4MDk6NUYxNTNEMjUiLCJ0aW1lc3RhbXAiOjE1OTUyMjc0MzIsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS">

  <meta http-equiv="x-pjax-version" content="3b2903574a46b09375530a98aad2e096">
  

      <link href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/commits/master.atom" rel="alternate" title="Recent Commits to Single-Page-Web-Applications-with-AngularJS:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/igogra/Single-Page-Web-Applications-with-AngularJS git https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS.git">

  <meta name="octolytics-dimension-user_id" content="6216276"><meta name="octolytics-dimension-user_login" content="igogra"><meta name="octolytics-dimension-repository_id" content="76144096"><meta name="octolytics-dimension-repository_nwo" content="igogra/Single-Page-Web-Applications-with-AngularJS"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="76144096"><meta name="octolytics-dimension-repository_network_root_nwo" content="igogra/Single-Page-Web-Applications-with-AngularJS"><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false">




  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-edit-blob">
    

    <div class="position-relative js-header-wrapper ">
      <a href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
        <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
      </span>

      
      



          <header class="Header py-lg-0 js-details-container Details flex-wrap flex-lg-nowrap px-3" role="banner">
  <div class="Header-item d-none d-lg-flex">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item d-lg-none">
    <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
    </button>
  </div>

  <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search header-search-current js-header-search-current  flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to js-header-search-current-jump-to" role="combobox" aria-owns="jump-to-results" aria-label="Search or jump to" aria-haspopup="listbox" aria-expanded="false">
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="76144096" data-scoped-search-url="/igogra/Single-Page-Web-Applications-with-AngularJS/search" data-unscoped-search-url="/search" action="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text" class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable" data-hotkey="s,/" name="q" value="" placeholder="Search or jump to…" data-unscoped-placeholder="Search or jump to…" data-scoped-placeholder="Search or jump to…" autocapitalize="off" aria-autocomplete="list" aria-controls="jump-to-results" aria-label="Search or jump to…" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" spellcheck="false" autocomplete="off">
          <input type="hidden" value="1ER6yzdGJRrBVvyl+Rl1po7ekjA8YVG2jaEvBIv0OLYgq0wOs/4QVdR3PmFAVP5wGlUJT9p43lV0RL1LNjZqCA==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf">
          <input type="hidden" class="js-site-search-type-field" name="type">
            <img src="./info.controller_files/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="./info.controller_files/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


    <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link py-lg-3 d-block d-lg-none py-2 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="https://github.com/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="https://github.com/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="https://github.com/issues">
    Issues
</a>

    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link py-lg-3 d-inline-block" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="https://github.com/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="https://github.com/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/Mickmicky">
      <img class="avatar avatar-user" src="./info.controller_files/65824685" width="20" height="20" alt="@Mickmicky">
      Mickmicky
</a>
    <!-- '"` --><!-- </textarea></xmp> --><form action="https://github.com/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="8yMZNXaMo+7I5iRItLvLBvRxPo7LJI3Q+UdU8UPGVWzLRve36TRpkE6bbriqwzfIPw2nMc7p7EzaVfRYpic2qg==">
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg>
        Sign out
      </button>
</form></nav>

  </div>

  <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
    
    <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-sw js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NjU4MjQ2ODUiLCJ0IjoxNTk1MjI3NDMyfQ==--e03827e8e530f88aa2179db74e585d2e1c5fbf59fac7fd329df01e82bc6731ee" href="https://github.com/notifications">
        <span class="js-indicator-modifier mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path></svg>
</a>
  </div>


  <div class="Header-item position-relative d-none d-lg-flex">
    <details class="details-overlay details-reset">
  <summary class="Header-link" aria-label="Create new…" data-ga-click="Header, create new, icon:add" aria-haspopup="menu" role="button">
    <svg class="octicon octicon-plus" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"></path></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2" role="menu">
    
<a role="menuitem" class="dropdown-item" href="https://github.com/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="https://github.com/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="https://github.com/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="igogra/Single-Page-Web-Applications-with-AngularJS">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax="">
      New issue
    </a>


  </details-menu>
</details>

  </div>

  <div class="Header-item position-relative mr-0 d-none d-lg-flex">
    
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/Mickmicky/feature_preview/indicator_check">

  <summary class="Header-link" aria-label="View profile and more" data-ga-click="Header, show menu, icon:avatar" aria-haspopup="menu" role="button">
    <img alt="@Mickmicky" width="20" height="20" src="./info.controller_files/65824685(1)" class="avatar avatar-user ">

      <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 10px;"></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2" style="width: 180px" role="menu">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="https://github.com/Mickmicky" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">Mickmicky</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context lh-condensed" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container rounded-1 px-2 py-1 mt-2 border" data-team-hovercards-enabled="">
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit " role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:6216276,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:65824685,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;}}" data-hydro-click-hmac="3b338b77b672f1784f6e241415b350b5e052db82d353958d6e1cabab3d16b044">
      <div class="d-flex flex-items-center flex-items-stretch">
        <div class="f6 lh-condensed user-status-header d-flex user-status-emoji-only-header circle">
          <div class="user-status-emoji-container flex-shrink-0 mr-2 d-flex flex-items-center flex-justify-center lh-condensed-ultra v-align-bottom">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
          </div>
        </div>
        <div class="
          
           user-status-message-wrapper f6 min-width-0" style="line-height: 20px;">
          <div class="css-truncate css-truncate-target width-fit text-gray-dark text-left">
              <span class="text-gray">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1" aria-modal="true">
      <!-- '"` --><!-- </textarea></xmp> --><form class="position-relative flex-auto js-user-status-form" action="https://github.com/users/status?circle=0&amp;compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put"><input type="hidden" name="authenticity_token" value="NIo7STJfSfo7PqNicFPSSjH7xlY9SwUBGc2w0voib4RyzXsBdeRZ/PWjD8ydwXDeYAVarhcr6mc/VoeICbHk5A==">
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog="">
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden=""></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon">
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input type="text" autocomplete="off" data-no-org-url="/autocomplete/user-suggestions" data-org-url="/suggestions?mention_suggester=1" data-maxlength="80" class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field" placeholder="What&#39;s happening?" name="message" value="" aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden="">
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png"><img class="emoji" alt="palm_tree" height="20" width="20" src="./info.controller_files/1f334.png"></g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png"><img class="emoji" alt="face_with_thermometer" height="20" width="20" src="./info.controller_files/1f912.png"></g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png"><img class="emoji" alt="house" height="20" width="20" src="./info.controller_files/1f3e0.png"></g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"><img class="emoji" alt="dart" height="20" width="20" src="./info.controller_files/1f3af.png"></g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2">
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-07-20T12:43:52+05:30">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-07-20T13:13:52+05:30">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-07-20T16:13:52+05:30">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-07-20T23:59:59+05:30">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-07-26T23:59:59+05:30">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled="" class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled="" class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>

    <a role="menuitem" class="dropdown-item" href="https://github.com/Mickmicky" data-ga-click="Header, go to profile, text:your profile" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;YOUR_PROFILE&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="1f1dc7cb41c6e4a168ce84a73cebecf6d95b18453f81da539fdbfac7d4fa477d">Your profile</a>

    <a role="menuitem" class="dropdown-item" href="https://github.com/Mickmicky?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="46d9d1f45c660558605ec6abf532af0cd9e946fb8df66ed02816842720d46804">Your repositories</a>


    <a role="menuitem" class="dropdown-item" href="https://github.com/Mickmicky?tab=projects" data-ga-click="Header, go to projects, text:your projects" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;YOUR_PROJECTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="712e224795160c10e24526ae193be36610364bea4f030c9df0d234690dc0bd87">Your projects</a>


    <a role="menuitem" class="dropdown-item" href="https://github.com/Mickmicky?tab=stars" data-ga-click="Header, go to starred repos, text:your stars" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;YOUR_STARS&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="8410b759d910c01aad5d65c96a0a544230cf1775f94b12901685fdb96be0554e">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;YOUR_GISTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="d16c1e365ff867674569e06ab5d329de1d9b907b046416ec5e0fb9c5fd5db9a7">Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      <a role="menuitem" class="dropdown-item" href="https://github.com/settings/billing" data-ga-click="Header, go to billing, text:upgrade" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;UPGRADE&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="ac83a926c0cf5dd707fd6cf350add9194c917f7c4bf2ed613f1843ecde4b7ff5">Upgrade</a>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button type="button" class="dropdown-item btn-link" role="menuitem" data-feature-preview-trigger-url="/users/Mickmicky/feature_previews" data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-feature-preview-close-hmac="09d1a8b56330b6bbab2756b95634e673c8a8a07f490ce131f55743d26a781d36" data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="8b34dd061d570dbd714be9349f9731030fe248dd48c79df8b35527f8b95c0d61">
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator"></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://help.github.com/" data-ga-click="Header, go to help, text:help" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;HELP&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="f645590a6d1ae35d6bbee82f8e70d47aacf6d16a612421b3f6df6d900eb87211">Help</a>
    <a role="menuitem" class="dropdown-item" href="https://github.com/settings/profile" data-ga-click="Header, go to settings, icon:settings" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;SETTINGS&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="54697d2848f1bf599c3a4bfdf5bf702eedade786ce85abb34df87b0a2a830e33">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --><form class="logout-form" action="https://github.com/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="sxyLI3GxIAk3BHJuQQhID6Nqi96gggRTWHWdbKRTLCqLeWWh7gnqd7F5OJ5fcLTBaBYSYaVPZc97Zz3FQbJP7A==">
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;target&quot;:&quot;SIGN_OUT&quot;,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="46df9524890e6ba46c158e6801f4b28dcb6fc8a0b362aac88ef7fba11feb6aea" role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_67ad" hidden="hidden" class="form-control"><input type="hidden" name="timestamp" value="1595227432213" class="form-control"><input type="hidden" name="timestamp_secret" value="09ab9db768decb5d920da2369f752b3e5610adebb84548bc5afa77306f023cd4" class="form-control">
</form>  </details-menu>
</details>

  </div>

</header>

          

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template"></template>
</div>


  

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>



  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container="">
      

  










  <div class="bg-gray-light pt-3 hide-full-screen mb-5">

    <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">

      <div class="flex-auto min-width-0 width-fit mr-3">
        <h1 class=" d-flex flex-wrap flex-items-center break-word f3 text-normal">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
  <span class="author ml-2 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/igogra/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/igogra">igogra</a>
  </span>
  <span class="mx-1 flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS">Single-Page-Web-Applications-with-AngularJS</a>
  </strong>
  
</h1>


      </div>

      <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">

  <li>
        <form data-remote="true" class="d-flex js-social-form js-social-container" action="https://github.com/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="cOEz3T0CMULm4ATtHYK6UvTEfIQ1JRWSSB1GgpUlxucrVjEmswVg9Bun+tjbgpcFVIrFkoWIYcx3HySG0lQnSQ==">      <input type="hidden" name="repository_id" value="76144096">

      <details class="details-reset details-overlay select-menu hx_rsm">
        <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:76144096,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="912b67bb0f258009883d3b25631f6be7cc05ccb85e8d3df53b432695dc59cb1a" data-ga-click="Repository, click Watch settings, action:blob#edit" aria-haspopup="menu" role="button">          <span data-menu-button="">
              <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>

              Watch
          </span>
          <span class="dropdown-caret"></span>
</summary>        <details-menu class="select-menu-modal position-absolute mt-5" style="z-index: 99;" role="menu">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg height="16" class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>

              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents="">
                  <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>

                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg height="16" class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>

              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents="">
                  <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>

                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg height="16" class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>

              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents="">
                  <svg height="16" class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>

                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg height="16" class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>

              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents="">
                  <svg height="16" class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.75a.75.75 0 00-1.238-.57L3.472 5H1.75A1.75 1.75 0 000 6.75v2.5C0 10.216.784 11 1.75 11h1.723l3.289 2.82A.75.75 0 008 13.25V2.75zM4.238 6.32L6.5 4.38v7.24L4.238 9.68a.75.75 0 00-.488-.18h-2a.25.25 0 01-.25-.25v-2.5a.25.25 0 01.25-.25h2a.75.75 0 00.488-.18zm7.042-1.1a.75.75 0 10-1.06 1.06L11.94 8l-1.72 1.72a.75.75 0 101.06 1.06L13 9.06l1.72 1.72a.75.75 0 101.06-1.06L14.06 8l1.72-1.72a.75.75 0 00-1.06-1.06L13 6.94l-1.72-1.72z"></path></svg>

                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/watchers" aria-label="1 user is watching this repository">
          1
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="vMC7xEpYmr81iXCiGOhGjgGfbstwdL4IKDqaAZsVC9ga4T6CcvjVhjyf/Cr3HyXmYo5pF+S6u5kJzrsnX7d2sA==">
      <input type="hidden" name="context" value="repository">
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Unstar igogra/Single-Page-Web-Applications-with-AngularJS" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:76144096,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="48e49d4efd4ef7c58681d473c2e21e501d60da518a56dd2efd6ae043916db717" data-ga-click="Repository, click unstar button, action:blob#edit; text:Unstar">        <svg height="16" class="octicon octicon-star-fill" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/stargazers" aria-label="2 users starred this repository">
           2
        </a>
</form>
    <form class="unstarred js-social-form" action="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Fhmv5hhLT88jd+JkhvcnnN+1fxsNrnbpx9q7j6TEeRH7pk/UY0TIN3oKe01D9s4NZjF1oFvxybLsaAjZvoLPdw==">
      <input type="hidden" name="context" value="repository">
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Star igogra/Single-Page-Web-Applications-with-AngularJS" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:76144096,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="ab11187f0abf8a477079c6ef692793a7b61cd8f5d3c4a4e06d142c8ef8d3b923" data-ga-click="Repository, click star button, action:blob#edit; text:Star">        <svg height="16" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>

        Star
</button>        <a class="social-count js-social-count" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/stargazers" aria-label="2 users starred this repository">
          2
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --><form class="btn-with-count" action="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="T/o0uvTAUGAHKmu1ugAaaMjBJyDU4sOmEEJVKkvOi14OiouiKMWvbj3gSlT7av3wDpDFMbFclIRpqIcdVhL8rA==">
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:76144096,&quot;originating_url&quot;:&quot;https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js&quot;,&quot;user_id&quot;:65824685}}" data-hydro-click-hmac="6449e15fef31fe7ccd02082fcb9bb80e7119991095a43db18348a1b940dcbaff" data-ga-click="Repository, show fork modal, action:blob#edit; text:Fork" type="submit" title="Fork your own copy of igogra/Single-Page-Web-Applications-with-AngularJS to your account" aria-label="Fork your own copy of igogra/Single-Page-Web-Applications-with-AngularJS to your account">              <svg class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
              Fork
</button></form>
    <a href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/network/members" class="social-count" aria-label="24 users forked this repository">
      24
    </a>
  </li>
</ul>

    </div>
    
<nav class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5 bg-gray-light" aria-label="Repository" data-pjax="#js-repo-pjax-container">
  <ul class="UnderlineNav-body list-style-none ">
          <li class="d-flex">
        <a class="js-selected-navigation-item selected UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="code-tab" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /igogra/Single-Page-Web-Applications-with-AngularJS" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS">
              <svg height="16" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline" classes="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>

            <span data-content="Code">Code</span>
              <span class="Counter " title="Not available"></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="issues-tab" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-selected-links="repo_issues repo_labels repo_milestones /igogra/Single-Page-Web-Applications-with-AngularJS/issues" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/issues">
              <svg height="16" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline" classes="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>

            <span data-content="Issues">Issues</span>
              <span class="Counter " title="1">1</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="pull-requests-tab" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-selected-links="repo_pulls checks /igogra/Single-Page-Web-Applications-with-AngularJS/pulls" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/pulls">
              <svg height="16" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline" classes="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>

            <span data-content="Pull requests">Pull requests</span>
              <span class="Counter " title="0" hidden="hidden">0</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="actions-tab" data-hotkey="g w" data-ga-click="Repository, Navigation click, Actions tab" data-selected-links="repo_actions /igogra/Single-Page-Web-Applications-with-AngularJS/actions" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/actions">
              <svg height="16" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline" classes="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg>

            <span data-content="Actions">Actions</span>
              <span class="Counter " title="Not available"></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="projects-tab" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-selected-links="repo_projects new_repo_project repo_project /igogra/Single-Page-Web-Applications-with-AngularJS/projects" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/projects">
              <svg height="16" class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline" classes="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>

            <span data-content="Projects">Projects</span>
              <span class="Counter " title="0" hidden="hidden">0</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="wiki-tab" data-ga-click="Repository, Navigation click, Wikis tab" data-selected-links="repo_wiki /igogra/Single-Page-Web-Applications-with-AngularJS/wiki" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/wiki">
              <svg height="16" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline" classes="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>

            <span data-content="Wiki">Wiki</span>
              <span class="Counter " title="Not available"></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="security-tab" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-selected-links="security overview alerts policy token_scanning code_scanning /igogra/Single-Page-Web-Applications-with-AngularJS/security" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/security" style="visibility: hidden;">
              <svg height="16" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline" classes="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path></svg>

            <span data-content="Security">Security</span>
              <span class="js-security-tab-count Counter " data-url="/igogra/Single-Page-Web-Applications-with-AngularJS/security/overall-count" title="Not available"></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="insights-tab" data-ga-click="Repository, Navigation click, Insights tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /igogra/Single-Page-Web-Applications-with-AngularJS/pulse" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/pulse" style="visibility: hidden;">
              <svg height="16" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline" classes="UnderlineNav-octicon" display="none inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg>

            <span data-content="Insights">Insights</span>
              <span class="Counter " title="Not available"></span>
</a>      </li>

</ul>        <div class="position-absolute right-0 pr-3 pr-md-4 pr-lg-5 js-responsive-underlinenav-overflow" style="">
      <details class="details-overlay details-reset position-relative">
  <summary role="button" aria-haspopup="menu">
              <div class="UnderlineNav-item mr-0 border-0">
            <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            <span class="sr-only">More</span>
          </div>

</summary>            <details-menu class="dropdown-menu dropdown-menu-sw " role="menu">
  
            <ul>
                <li data-menu-item="code-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /igogra/Single-Page-Web-Applications-with-AngularJS" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS">
                    Code
</a>                </li>
                <li data-menu-item="issues-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /igogra/Single-Page-Web-Applications-with-AngularJS/issues" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/issues">
                    Issues
</a>                </li>
                <li data-menu-item="pull-requests-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /igogra/Single-Page-Web-Applications-with-AngularJS/pulls" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/pulls">
                    Pull requests
</a>                </li>
                <li data-menu-item="actions-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /igogra/Single-Page-Web-Applications-with-AngularJS/actions" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/actions">
                    Actions
</a>                </li>
                <li data-menu-item="projects-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /igogra/Single-Page-Web-Applications-with-AngularJS/projects" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/projects">
                    Projects
</a>                </li>
                <li data-menu-item="wiki-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /igogra/Single-Page-Web-Applications-with-AngularJS/wiki" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/wiki">
                    Wiki
</a>                </li>
                <li data-menu-item="security-tab">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /igogra/Single-Page-Web-Applications-with-AngularJS/security" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/security">
                    Security
</a>                </li>
                <li data-menu-item="insights-tab">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /igogra/Single-Page-Web-Applications-with-AngularJS/pulse" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/pulse">
                    Insights
</a>                </li>
            </ul>

</details-menu>
</details>    </div>

</nav>
  </div>

<div class="container-xl clearfix new-discussion-timeline  p-0">
  <div class="repository-content ">

    
    
  

    <div class="flash-messages ">
  <div class="flash mx-3">
    You’re making changes in a project you don’t have write access to.
    Submitting a change will write it to a new branch in your
      fork Mickmicky/Single-Page-Web-Applications-with-AngularJS,
    so you can send a pull request.
  </div>
</div>



    <div class="file-box ">
      <!-- '"` --><!-- </textarea></xmp> --><form class="d-none js-blob-preview-form" action="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/preview/master/Module5/src/public/info/info.controller.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="1sJk7h+IOORf4abYcRmJyQylAAxW+vzqXa99//b9nhdPUTxMJrYakHXXA10iF9Wr7PfwGFR6srt3pdqZXIsJ8g==">
        <input type="hidden" name="code">
        <input type="hidden" name="commit">
        <input type="hidden" name="blobname">
        <input type="hidden" name="willcreatebranch">
        <input type="hidden" name="checkConflict">
</form>
      <!-- '"` --><!-- </textarea></xmp> --><form class="js-blob-form" id="new_blob" data-github-confirm-unload="Your edits will be lost." action="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/tree-save/master/Module5/src/public/info/info.controller.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="ADYg5qzB9/OtCQFH9Lim3x1/vG/2VM1mKxjrcuBNYGa3E8YrKvRTSOxDIIQKXMbyyx/AeVGf9374URB8Ze3GKg==">
        




<div class="breadcrumb d-flex flex-shrink-0 flex-items-center px-3 px-sm-6 px-lg-3">
    <span class="js-breadcrumb-container d-flex flex-items-center flex-wrap mr-sm-4 flex-auto">
      <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS"><span>Single-Page-Web-Applications-with-AngularJS</span></a></span></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/tree/master/Module5"><span>Module5</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/tree/master/Module5/src"><span>src</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/tree/master/Module5/src/public"><span>public</span></a></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/tree/master/Module5/src/public/info"><span>info</span></a></span><span class="separator">/</span>

      <input type="text" class="form-control js-blob-filename js-breadcrumb-nav mr-1 mt-1 mt-sm-0 col-12 width-sm-auto" name="filename" value="info.controller.js" placeholder="Name your file…" aria-label="Name your file…">
        <span><a href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/blob/master/Module5/src/public/info/info.controller.js" class="btn d-none d-md-inline-block">Cancel</a></span>
    </span>

    <div class="js-gitignore-template js-template-suggestion d-flex flex-shrink-0 flex-justify-end f5 flex-items-center hide-sm hide-md hide-lg  d-none" data-template-suggestion-pattern="^(.+\/)?\.gitignore$">
      <div class="mr-2">Want to use a <span class="text-mono f6">.gitignore</span> template?</div>
      <details class="details-reset details-overlay position-relative d-inline-block">
  <summary class="btn btn-sm select-menu-button" aria-haspopup="menu" role="button">
    <i>Choose .gitignore:</i>
    <span data-menu-button="">None</span>
  </summary>
  <details-menu class="select-menu-modal position-absolute right-0" style="z-index: 99;" role="menu">
    <div class="select-menu-header">
      <span class="select-menu-title">.gitignore</span>
    </div>

    <div class="select-menu-filters">
      <div class="select-menu-text-filter">
        <input type="text" id="context-ignore-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter ignores…" aria-label="Choose .gitignore type" autocomplete="off" autofocus="">
      </div>
    </div>

    <div class="select-menu-list">
      <div data-filterable-for="context-ignore-filter-field">
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Actionscript" value="Actionscript" data-template-url="https://github.com/site/gitignore/Actionscript">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Actionscript</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Ada" value="Ada" data-template-url="https://github.com/site/gitignore/Ada">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Ada</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Agda" value="Agda" data-template-url="https://github.com/site/gitignore/Agda">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Agda</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Android" value="Android" data-template-url="https://github.com/site/gitignore/Android">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Android</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_AppEngine" value="AppEngine" data-template-url="https://github.com/site/gitignore/AppEngine">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">AppEngine</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_AppceleratorTitanium" value="AppceleratorTitanium" data-template-url="https://github.com/site/gitignore/AppceleratorTitanium">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">AppceleratorTitanium</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_ArchLinuxPackages" value="ArchLinuxPackages" data-template-url="https://github.com/site/gitignore/ArchLinuxPackages">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">ArchLinuxPackages</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Autotools" value="Autotools" data-template-url="https://github.com/site/gitignore/Autotools">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Autotools</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_C" value="C" data-template-url="https://github.com/site/gitignore/C">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">C</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_C__" value="C++" data-template-url="https://github.com/site/gitignore/C++">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">C++</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_CFWheels" value="CFWheels" data-template-url="https://github.com/site/gitignore/CFWheels">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">CFWheels</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_CMake" value="CMake" data-template-url="https://github.com/site/gitignore/CMake">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">CMake</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_CUDA" value="CUDA" data-template-url="https://github.com/site/gitignore/CUDA">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">CUDA</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_CakePHP" value="CakePHP" data-template-url="https://github.com/site/gitignore/CakePHP">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">CakePHP</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_ChefCookbook" value="ChefCookbook" data-template-url="https://github.com/site/gitignore/ChefCookbook">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">ChefCookbook</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Clojure" value="Clojure" data-template-url="https://github.com/site/gitignore/Clojure">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Clojure</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_CodeIgniter" value="CodeIgniter" data-template-url="https://github.com/site/gitignore/CodeIgniter">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">CodeIgniter</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_CommonLisp" value="CommonLisp" data-template-url="https://github.com/site/gitignore/CommonLisp">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">CommonLisp</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Composer" value="Composer" data-template-url="https://github.com/site/gitignore/Composer">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Composer</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Concrete5" value="Concrete5" data-template-url="https://github.com/site/gitignore/Concrete5">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Concrete5</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Coq" value="Coq" data-template-url="https://github.com/site/gitignore/Coq">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Coq</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_CraftCMS" value="CraftCMS" data-template-url="https://github.com/site/gitignore/CraftCMS">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">CraftCMS</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_D" value="D" data-template-url="https://github.com/site/gitignore/D">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">D</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_DM" value="DM" data-template-url="https://github.com/site/gitignore/DM">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">DM</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Dart" value="Dart" data-template-url="https://github.com/site/gitignore/Dart">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Dart</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Delphi" value="Delphi" data-template-url="https://github.com/site/gitignore/Delphi">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Delphi</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Drupal" value="Drupal" data-template-url="https://github.com/site/gitignore/Drupal">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Drupal</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_EPiServer" value="EPiServer" data-template-url="https://github.com/site/gitignore/EPiServer">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">EPiServer</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Eagle" value="Eagle" data-template-url="https://github.com/site/gitignore/Eagle">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Eagle</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Elisp" value="Elisp" data-template-url="https://github.com/site/gitignore/Elisp">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Elisp</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Elixir" value="Elixir" data-template-url="https://github.com/site/gitignore/Elixir">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Elixir</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Elm" value="Elm" data-template-url="https://github.com/site/gitignore/Elm">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Elm</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Erlang" value="Erlang" data-template-url="https://github.com/site/gitignore/Erlang">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Erlang</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_ExpressionEngine" value="ExpressionEngine" data-template-url="https://github.com/site/gitignore/ExpressionEngine">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">ExpressionEngine</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_ExtJs" value="ExtJs" data-template-url="https://github.com/site/gitignore/ExtJs">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">ExtJs</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Fancy" value="Fancy" data-template-url="https://github.com/site/gitignore/Fancy">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Fancy</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Finale" value="Finale" data-template-url="https://github.com/site/gitignore/Finale">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Finale</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_ForceDotCom" value="ForceDotCom" data-template-url="https://github.com/site/gitignore/ForceDotCom">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">ForceDotCom</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Fortran" value="Fortran" data-template-url="https://github.com/site/gitignore/Fortran">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Fortran</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_FuelPHP" value="FuelPHP" data-template-url="https://github.com/site/gitignore/FuelPHP">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">FuelPHP</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_GWT" value="GWT" data-template-url="https://github.com/site/gitignore/GWT">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">GWT</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_GitBook" value="GitBook" data-template-url="https://github.com/site/gitignore/GitBook">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">GitBook</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Go" value="Go" data-template-url="https://github.com/site/gitignore/Go">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Go</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Godot" value="Godot" data-template-url="https://github.com/site/gitignore/Godot">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Godot</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Gradle" value="Gradle" data-template-url="https://github.com/site/gitignore/Gradle">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Gradle</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Grails" value="Grails" data-template-url="https://github.com/site/gitignore/Grails">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Grails</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Haskell" value="Haskell" data-template-url="https://github.com/site/gitignore/Haskell">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Haskell</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_IGORPro" value="IGORPro" data-template-url="https://github.com/site/gitignore/IGORPro">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">IGORPro</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Idris" value="Idris" data-template-url="https://github.com/site/gitignore/Idris">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Idris</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_JENKINS_HOME" value="JENKINS_HOME" data-template-url="https://github.com/site/gitignore/JENKINS_HOME">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">JENKINS_HOME</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Java" value="Java" data-template-url="https://github.com/site/gitignore/Java">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Java</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Jboss" value="Jboss" data-template-url="https://github.com/site/gitignore/Jboss">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Jboss</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Jekyll" value="Jekyll" data-template-url="https://github.com/site/gitignore/Jekyll">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Jekyll</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Joomla" value="Joomla" data-template-url="https://github.com/site/gitignore/Joomla">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Joomla</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Julia" value="Julia" data-template-url="https://github.com/site/gitignore/Julia">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Julia</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_KiCAD" value="KiCAD" data-template-url="https://github.com/site/gitignore/KiCAD">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">KiCAD</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Kohana" value="Kohana" data-template-url="https://github.com/site/gitignore/Kohana">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Kohana</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Kotlin" value="Kotlin" data-template-url="https://github.com/site/gitignore/Kotlin">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Kotlin</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_LabVIEW" value="LabVIEW" data-template-url="https://github.com/site/gitignore/LabVIEW">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">LabVIEW</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Laravel" value="Laravel" data-template-url="https://github.com/site/gitignore/Laravel">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Laravel</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Leiningen" value="Leiningen" data-template-url="https://github.com/site/gitignore/Leiningen">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Leiningen</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_LemonStand" value="LemonStand" data-template-url="https://github.com/site/gitignore/LemonStand">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">LemonStand</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Lilypond" value="Lilypond" data-template-url="https://github.com/site/gitignore/Lilypond">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Lilypond</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Lithium" value="Lithium" data-template-url="https://github.com/site/gitignore/Lithium">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Lithium</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Lua" value="Lua" data-template-url="https://github.com/site/gitignore/Lua">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Lua</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Magento" value="Magento" data-template-url="https://github.com/site/gitignore/Magento">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Magento</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Maven" value="Maven" data-template-url="https://github.com/site/gitignore/Maven">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Maven</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Mercury" value="Mercury" data-template-url="https://github.com/site/gitignore/Mercury">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Mercury</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_MetaProgrammingSystem" value="MetaProgrammingSystem" data-template-url="https://github.com/site/gitignore/MetaProgrammingSystem">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">MetaProgrammingSystem</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Nim" value="Nim" data-template-url="https://github.com/site/gitignore/Nim">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Nim</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Node" value="Node" data-template-url="https://github.com/site/gitignore/Node">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Node</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_OCaml" value="OCaml" data-template-url="https://github.com/site/gitignore/OCaml">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">OCaml</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Objective-C" value="Objective-C" data-template-url="https://github.com/site/gitignore/Objective-C">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Objective-C</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Opa" value="Opa" data-template-url="https://github.com/site/gitignore/Opa">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Opa</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_OracleForms" value="OracleForms" data-template-url="https://github.com/site/gitignore/OracleForms">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">OracleForms</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Packer" value="Packer" data-template-url="https://github.com/site/gitignore/Packer">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Packer</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Perl" value="Perl" data-template-url="https://github.com/site/gitignore/Perl">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Perl</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Perl6" value="Perl6" data-template-url="https://github.com/site/gitignore/Perl6">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Perl6</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Phalcon" value="Phalcon" data-template-url="https://github.com/site/gitignore/Phalcon">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Phalcon</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_PlayFramework" value="PlayFramework" data-template-url="https://github.com/site/gitignore/PlayFramework">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">PlayFramework</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Plone" value="Plone" data-template-url="https://github.com/site/gitignore/Plone">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Plone</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Prestashop" value="Prestashop" data-template-url="https://github.com/site/gitignore/Prestashop">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Prestashop</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Processing" value="Processing" data-template-url="https://github.com/site/gitignore/Processing">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Processing</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_PureScript" value="PureScript" data-template-url="https://github.com/site/gitignore/PureScript">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">PureScript</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Python" value="Python" data-template-url="https://github.com/site/gitignore/Python">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Python</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Qooxdoo" value="Qooxdoo" data-template-url="https://github.com/site/gitignore/Qooxdoo">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Qooxdoo</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Qt" value="Qt" data-template-url="https://github.com/site/gitignore/Qt">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Qt</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_R" value="R" data-template-url="https://github.com/site/gitignore/R">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">R</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_ROS" value="ROS" data-template-url="https://github.com/site/gitignore/ROS">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">ROS</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Rails" value="Rails" data-template-url="https://github.com/site/gitignore/Rails">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Rails</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_RhodesRhomobile" value="RhodesRhomobile" data-template-url="https://github.com/site/gitignore/RhodesRhomobile">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">RhodesRhomobile</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Ruby" value="Ruby" data-template-url="https://github.com/site/gitignore/Ruby">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Ruby</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Rust" value="Rust" data-template-url="https://github.com/site/gitignore/Rust">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Rust</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_SCons" value="SCons" data-template-url="https://github.com/site/gitignore/SCons">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">SCons</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Sass" value="Sass" data-template-url="https://github.com/site/gitignore/Sass">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Sass</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Scala" value="Scala" data-template-url="https://github.com/site/gitignore/Scala">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Scala</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Scheme" value="Scheme" data-template-url="https://github.com/site/gitignore/Scheme">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Scheme</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Scrivener" value="Scrivener" data-template-url="https://github.com/site/gitignore/Scrivener">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Scrivener</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Sdcc" value="Sdcc" data-template-url="https://github.com/site/gitignore/Sdcc">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Sdcc</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_SeamGen" value="SeamGen" data-template-url="https://github.com/site/gitignore/SeamGen">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">SeamGen</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_SketchUp" value="SketchUp" data-template-url="https://github.com/site/gitignore/SketchUp">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">SketchUp</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Smalltalk" value="Smalltalk" data-template-url="https://github.com/site/gitignore/Smalltalk">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Smalltalk</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_SugarCRM" value="SugarCRM" data-template-url="https://github.com/site/gitignore/SugarCRM">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">SugarCRM</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Swift" value="Swift" data-template-url="https://github.com/site/gitignore/Swift">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Swift</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Symfony" value="Symfony" data-template-url="https://github.com/site/gitignore/Symfony">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Symfony</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_SymphonyCMS" value="SymphonyCMS" data-template-url="https://github.com/site/gitignore/SymphonyCMS">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">SymphonyCMS</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_TeX" value="TeX" data-template-url="https://github.com/site/gitignore/TeX">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">TeX</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Terraform" value="Terraform" data-template-url="https://github.com/site/gitignore/Terraform">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Terraform</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Textpattern" value="Textpattern" data-template-url="https://github.com/site/gitignore/Textpattern">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Textpattern</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_TurboGears2" value="TurboGears2" data-template-url="https://github.com/site/gitignore/TurboGears2">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">TurboGears2</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Typo3" value="Typo3" data-template-url="https://github.com/site/gitignore/Typo3">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Typo3</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Umbraco" value="Umbraco" data-template-url="https://github.com/site/gitignore/Umbraco">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Umbraco</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Unity" value="Unity" data-template-url="https://github.com/site/gitignore/Unity">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Unity</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_UnrealEngine" value="UnrealEngine" data-template-url="https://github.com/site/gitignore/UnrealEngine">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">UnrealEngine</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_VVVV" value="VVVV" data-template-url="https://github.com/site/gitignore/VVVV">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">VVVV</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_VisualStudio" value="VisualStudio" data-template-url="https://github.com/site/gitignore/VisualStudio">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">VisualStudio</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Waf" value="Waf" data-template-url="https://github.com/site/gitignore/Waf">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Waf</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_WordPress" value="WordPress" data-template-url="https://github.com/site/gitignore/WordPress">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">WordPress</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Xojo" value="Xojo" data-template-url="https://github.com/site/gitignore/Xojo">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Xojo</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Yeoman" value="Yeoman" data-template-url="https://github.com/site/gitignore/Yeoman">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Yeoman</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Yii" value="Yii" data-template-url="https://github.com/site/gitignore/Yii">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Yii</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_ZendFramework" value="ZendFramework" data-template-url="https://github.com/site/gitignore/ZendFramework">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">ZendFramework</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_Zephir" value="Zephir" data-template-url="https://github.com/site/gitignore/Zephir">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">Zephir</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_gcov" value="gcov" data-template-url="https://github.com/site/gitignore/gcov">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">gcov</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_nanoc" value="nanoc" data-template-url="https://github.com/site/gitignore/nanoc">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">nanoc</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_opencart" value="opencart" data-template-url="https://github.com/site/gitignore/opencart">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">opencart</span>
          </label>
          <label tabindex="0" class="select-menu-item" role="menuitemradio">
            <input type="radio" name="gitignore" id="gitignore_stella" value="stella" data-template-url="https://github.com/site/gitignore/stella">
            <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            <span class="text-normal select-menu-item-text" data-menu-button-text="">stella</span>
          </label>
      </div>

      <div class="select-menu-no-results">Nothing to show</div>
    </div>
  </details-menu>
</details>

    </div>


    <input id="blob-edit-path" type="hidden" name="new_filename" class="js-new-filename-field" value="Module5/src/public/info/info.controller.js" data-default-value="Module5/src/public/info/info.controller.js">
    <div class="d-none">
      <span class="js-crumb-template js-path-segment"><a href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js" data-pjax="true"><span>REPLACEME</span></a></span>
      <span class="separator js-crumb-separator">/</span>
    </div>

</div>

  <div class="js-template-suggestion px-3 mt-3 hide-sm hide-md d-none" data-template-suggestion-pattern="^FUNDING\.yml$">
    <div class="flash">
      <p>
        <code>.github/FUNDING.yml</code> shows the community how to support this project.

        Please see our
        <a href="https://help.github.com/articles/displaying-a-sponsor-button-in-your-repository">repository funding links documentation</a>
        for more information on formatting and what is and isn't allowed in this file.
      </p>

        <p>
          Please note that funding links are currently <em>disabled</em> on this repository. Visit
          <a href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/settings">repository settings</a>
          to enable display of your funding links.
        </p>
    </div>
  </div>

<div class="js-template-suggestion px-3 mt-3 hide-sm hide-md d-none" data-template-suggestion-pattern="^(\.github\/ISSUE_TEMPLATE\/(?!config))">
  <div class="flash">
    <p>
      Looks like this file is an <b>issue template</b>. Need help? Check out the <a href="https://help.github.com/articles/about-issue-and-pull-request-templates">documentation.</a>
    </p>
  </div>
</div>

<div class="js-template-suggestion px-3 mt-3 hide-sm hide-md d-none" data-template-suggestion-pattern="^(\.github\/ISSUE_TEMPLATE\/config)">
  <div class="flash">
    <p>
      Looks like this file is an <b>issue template config</b>. Need help? Check out the <a href="https://help.github.com/articles/configuring-issue-templates-for-your-repository">documentation.</a>
    </p>
  </div>
</div>



  
<div class="file js-code-editor container-preview show-code   mx-lg-3" data-github-confirm-unload="false">
  <div class="file-header mb-2 d-flex flex-items-center pr-0">

      <div class="tabnav-tabs js-file-editor-nav d-flex flex-auto d-md-block">
        <button type="button" class="btn-link code px-3 px-sm-6 px-lg-3 flex-1 flex-md-auto selected tabnav-tab js-blob-edit-code js-blob-edit-tab" aria-current="true" data-tab="show-code">
          <svg class="octicon octicon-code" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
          Edit file
        </button>
        <button type="button" class="flex-1 flex-md-auto btn-link preview tabnav-tab js-blob-edit-preview js-blob-edit-tab" data-tab="preview">
          <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
          Preview changes
        </button>
      </div>

      <div class="file-actions d-none d-md-flex px-3 pr-md-6 px-lg-2">
        <select id="indent-mode" class="form-select select-sm js-code-indent-mode" aria-label="Indent mode">
          <optgroup label="Indent mode">
            <option selected="selected" value="space">Spaces</option>
<option value="tab">Tabs</option>
          </optgroup>
        </select>

        <select id="indent-size" class="form-select select-sm js-code-indent-width" aria-label="Indent size">
          <optgroup label="Indent size">
            <option value="2">2</option>
<option selected="selected" value="4">4</option>
<option value="8">8</option>
          </optgroup>
        </select>

        <select id="line-wrap-mode" class="form-select select-sm js-code-wrap-mode" aria-label="Line wrap mode">
          <optgroup label="Line wrap mode">
            <option selected="selected" value="off">No wrap</option>
<option value="on">Soft wrap</option>
          </optgroup>
        </select>
      </div>
  </div>

  <input type="hidden" name="content_changed" class="js-blob-contents-changed" value="false" data-default-value="">

  <div class="commit-create  position-relative ">
    <textarea class="form-control file-editor-textarea js-blob-contents js-code-textarea " rows="35" name="value" data-filename="info.controller.js" data-codemirror-mode="text/javascript" data-allow-unchanged="" placeholder="Enter file contents here" aria-label="Enter file contents here" spellcheck="false" autofocus="" style="display: none;">(function() {
    'use strict';

    var infoController = function(MenuService, ApiPath) {
        var vm = this;
        vm.apiPath = ApiPath;

        vm.signedUp = false;

        vm.user = MenuService.getUser();
        console.log('User is', vm.user);
        if (angular.equals(vm.user, {})) {
            vm.signedUp = false;
        } else {
            vm.signedUp = true;
        }
    };

    infoController.$inject = ['MenuService', 'ApiPath'];
    angular.module('public').controller('InfoController', infoController);
})();</textarea>
  <div class="CodeMirror cm-s-github-light" style="height: 629px;"><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 54px; margin-bottom: -22px; border-right-width: 8px; min-height: 375px; min-width: 495.207px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style=""></div><div class="CodeMirror-code" role="presentation" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="true" tabindex="0" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">(<span class="cm-keyword">function</span>() {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-string">'use strict'</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-keyword">var</span> <span class="cm-def">infoController</span> <span class="cm-operator">=</span> <span class="cm-keyword">function</span>(<span class="cm-def">MenuService</span>, <span class="cm-def">ApiPath</span>) {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-keyword">var</span> <span class="cm-def">vm</span> <span class="cm-operator">=</span> <span class="cm-keyword">this</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable-2">vm</span>.<span class="cm-property">apiPath</span> <span class="cm-operator">=</span> <span class="cm-variable-2">ApiPath</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable-2">vm</span>.<span class="cm-property">signedUp</span> <span class="cm-operator">=</span> <span class="cm-atom">false</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable-2">vm</span>.<span class="cm-property">user</span> <span class="cm-operator">=</span> <span class="cm-variable-2">MenuService</span>.<span class="cm-property">getUser</span>();</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-string">'User is'</span>, <span class="cm-variable-2">vm</span>.<span class="cm-property">user</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">        <span class="cm-keyword">if</span> (<span class="cm-variable">angular</span>.<span class="cm-property">equals</span>(<span class="cm-variable-2">vm</span>.<span class="cm-property">user</span>, {})) {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">            <span class="cm-variable-2">vm</span>.<span class="cm-property">signedUp</span> <span class="cm-operator">=</span> <span class="cm-atom">false</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">        } <span class="cm-keyword">else</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">15</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">            <span class="cm-variable-2">vm</span>.<span class="cm-property">signedUp</span> <span class="cm-operator">=</span> <span class="cm-atom">true</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">16</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">        }</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">17</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">    };</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">18</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">19</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-variable-2">infoController</span>.<span class="cm-property">$inject</span> <span class="cm-operator">=</span> [<span class="cm-string">'MenuService'</span>, <span class="cm-string">'ApiPath'</span>];</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">20</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">    <span class="cm-variable">angular</span>.<span class="cm-property">module</span>(<span class="cm-string">'public'</span>).<span class="cm-property">controller</span>(<span class="cm-string">'InfoController'</span>, <span class="cm-variable-2">infoController</span>);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" contenteditable="false" style="left: -53.9844px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">21</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">})();</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 8px; width: 1px; border-bottom: 0px solid transparent; top: 375px;"></div><div class="CodeMirror-gutters" style="height: 383px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 54px;"></div></div></div></div></div>


  <div class="loading-preview-msg"><p class="preview-msg text-gray">Loading preview…</p></div>
  <div class="no-changes-preview-msg"><p class="preview-msg text-gray">No changes to display.</p></div>
  <div class="error-preview-msg"><p class="preview-msg text-gray">Unable to load this preview, sorry.</p></div>
  <div class="js-commit-preview commit-preview   ">
  </div>
</div>




  <div class="d-flex flex-column d-md-block col-lg-11 offset-lg-1 pr-lg-3 js-file-commit-form">





  <span class="commit-form-avatar hide-sm hide-md ">
    <a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/users/Mickmicky/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Mickmicky"><img class="float-left rounded-1 avatar-user" src="./info.controller_files/65824685(2)" width="48" height="48" alt="@Mickmicky"></a>
  </span>

  <div class="commit-form position-relative  mb-2 p-3 border-0 border-lg-top border-lg-right border-lg-left border-lg-bottom rounded-1">
    <h3>Propose changes</h3>

    <div class="text-orange js-too-long-error d-none">
      <svg height="16" class="octicon octicon-light-bulb" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"></path></svg>

      <strong>ProTip!</strong> Great commit summaries contain fewer than 50 characters. Place extra information in the extended description.
    </div>

    <label for="commit-summary-input" class="sr-only">
      Commit summary
    </label>
    <input id="commit-summary-input" type="text" class="form-control input-block input-contrast js-new-blob-commit-summary" placeholder="Update info.controller.js" name="message" value="" autocomplete="off">
    <input type="hidden" class="js-commit-message-fallback" name="placeholder_message" value="Update info.controller.js" data-default-value="Update info.controller.js">

    <label for="commit-description-textarea" class="sr-only">
      Optional extended description
    </label>

    <div class="position-relative">
      <text-expander keys=": @ #" data-issue-url="/suggestions?issue_suggester=1&amp;repository=Single-Page-Web-Applications-with-AngularJS&amp;user_id=igogra" data-mention-url="/suggestions?mention_suggester=1&amp;repository=Single-Page-Web-Applications-with-AngularJS&amp;user_id=igogra" data-emoji-url="/autocomplete/emoji">
        <textarea id="commit-description-textarea" name="description" class="form-control input-block input-contrast comment-form-textarea js-quick-submit" placeholder="Add an optional extended description…"></textarea>
      </text-expander>
    </div>


    

  </div>

  <input type="hidden" name="commit" class="js-commit-oid" value="e1311cc4ed060111f5058a79990c4c5e575c41d3" data-default-value="e1311cc4ed060111f5058a79990c4c5e575c41d3">
    <input type="hidden" name="quick_pull" value="igogra:master">
  <input type="hidden" name="pr" value="">

  <button type="submit" class="btn btn-primary js-blob-submit flex-auto mx-3 ml-md-3 mr-md-0 ml-lg-0 mb-3 mb-md-0" id="submit-file" data-edit-text="Commit changes" data-pull-text="Propose changes" disabled="">
    Propose changes
  </button>

    <a class="btn btn-danger flex-auto text-center mx-3 mx-md-0" href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/blob/master/Module5/src/public/info/info.controller.js">Cancel</a>

    

  </div>


</form>    </div>
  


  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-xl width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">© 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com/">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com/">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com/" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com/" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog/" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script src="./info.controller_files/javascript.js.download" crossorigin="anonymous"></script><script crossorigin="anonymous" async="async" integrity="sha512-bn/3rKJzBl2H64K38R8KaVcT26vKK7BJQC59lwYc+9fjlHzmy0fwh+hzBtsgTdhIi13dxjzNKWhdSN8WTM9qUw==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-6e7ff7ac.js"></script>
    <script crossorigin="anonymous" integrity="sha512-66iSSZrIoQctMJb6USLgAUBxXV82p3JQTUWGIwN/klsywNeBXy59fW5kqtQPbKTQJYtAdHbsiAJzOoY7zgj/Uw==" type="application/javascript" src="./info.controller_files/environment-bootstrap-eba89249.js.download"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-DOd7qGW6QV+ebX8GXvsADOaVYxoAPfrr1hnvYJ7EZwX3OxWqPdFvyLdjbV3zwA4eW3H3EmjggGjStE5UE285vA==" type="application/javascript" src="./info.controller_files/vendor-0ce77ba8.js.download"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-co+zOTSpzxx6JoM35lmjAiwoxIHgfLg05wD7HYFQeDAahWFam5U/aYNFG4PEy1aJvL6IcJDcp3qcglZJXcG/hg==" type="application/javascript" src="./info.controller_files/frameworks-728fb339.js.download"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-+lymvNF/kkbWyNxJVHK+0ianQbVggsfZ3inLiuzugkLG9qX/qXLs/vaGgvClMudhnKA1tJkXWJgnGhN+LH+fyw==" type="application/javascript" src="./info.controller_files/github-bootstrap-fa5ca6bc.js.download"></script>
    
      <script crossorigin="anonymous" async="async" integrity="sha512-R96MM8s0Y6IohqxZNKDeymadVcVg1KjV6E71KYykaisTYDPGpONjop8kGyNY5DSOJEsFp3737xpcjEo1a333WQ==" type="application/javascript" data-module-id="./Sortable.js" data-src="https://github.githubassets.com/assets/Sortable-47de8c33.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-4GcSWGoe36+BoWho4gtJcByZe8j43w+lt2/PDe3rmBxRVSgD29YipDwuIywe8fvOd2b2CszBqaPGxSznUtE3Xg==" type="application/javascript" data-module-id="./drag-drop.js" data-src="https://github.githubassets.com/assets/drag-drop-e0671258.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-2k8dDHk0yt52uKvOvgc9cwOXOeJhxBfVP5kPS2BrCdytDmtEIJ2yone26vFENAyk1a2aFQ7KDgEevRQafuAf8A==" type="application/javascript" data-module-id="./gist-vendor.js" data-src="https://github.githubassets.com/assets/gist-vendor-da4f1d0c.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-Bc7fK3x3D97t//yKXJFTcKAZWc+DoBkyOGeSrGKN6K1s+A5rkUmH7M+HuvXOQEd+5pBqcB/LKYTbItFp7J4mjg==" type="application/javascript" data-module-id="./randomColor.js" data-src="https://github.githubassets.com/assets/randomColor-05cedf2b.js"></script>
          <script crossorigin="anonymous" async="async" integrity="sha512-7kRIct+2cxV1O2as0xrZ7v4e2wPV3SlBQndlJfpHne45ilktR6uZOFTkgSgeyp/SoqXprVMkXseOBmomWSmugg==" type="application/javascript" src="./info.controller_files/editor-ee444872.js.download"></script>

    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden="">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a href="https://github.com/igogra/Single-Page-Web-Applications-with-AngularJS/edit/master/Module5/src/public/info/info.controller.js">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog"></template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>


  


<div aria-live="polite" class="sr-only"></div></body></html>