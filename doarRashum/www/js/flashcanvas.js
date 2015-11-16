


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>signature-pad/flashcanvas.js at master · thomasjbradley/signature-pad</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="thomasjbradley/signature-pad" name="twitter:title" /><meta content="signature-pad - A jQuery plugin for assisting in the creation of an HTML5 canvas based signature pad. Records the drawn signature in JSON for later regeneration." name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/105192?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/105192?v=3&amp;s=400" property="og:image" /><meta content="thomasjbradley/signature-pad" property="og:title" /><meta content="https://github.com/thomasjbradley/signature-pad" property="og:url" /><meta content="signature-pad - A jQuery plugin for assisting in the creation of an HTML5 canvas based signature pad. Records the drawn signature in JSON for later regeneration." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTMyOTkwODk6YjBiMGYxNDJlYzg0MjI2MzMwNTJmM2I4NDE4OTNkOTg6OWVjYWQ2MDQ1NzU5MjQ5ZDMyNzJmZmNlYzg3NTIwMzFhYTcyNzE0NWIyOTI1OTIxMTJjNWE3NWE3YmZkYWJmZQ==--643c88bfc0ddb7f2f188c47951cc273b3079aa54">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="258E80CF:61BE:6D59B9F:55A5486C" name="octolytics-dimension-request_id" /><meta content="13299089" name="octolytics-actor-id" /><meta content="one1mobile" name="octolytics-actor-login" /><meta content="9860b57cf6fecd2115b64959420bd76274d377280f2275a01ad29a72fe2f0fdb" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta name="is-dotcom" content="true">
      <meta name="hostname" content="github.com">
    <meta name="user-login" content="one1mobile">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="14glIFlg2xUtXasdHv2OhsFldXIQy0P+PaXFrMESW3N3piX/45FHPewEWLnTvCHqoeHwFw3NsGjgD0nMf0ljxA==" name="csrf-token" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-8824a5ef57ac4ae0b5ca429778b9660b1c66d09deea2ff11681de18d86a4bbb1.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-f0d033a37796c27f6b5b24aa8dc21af9c206a51ed2fe782d660dc20267c17d2b.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="3f58d2288e653bc3998db56bf3ad89c7">

      
  <meta name="description" content="signature-pad - A jQuery plugin for assisting in the creation of an HTML5 canvas based signature pad. Records the drawn signature in JSON for later regeneration.">
  <meta name="go-import" content="github.com/thomasjbradley/signature-pad git https://github.com/thomasjbradley/signature-pad.git">

  <meta content="105192" name="octolytics-dimension-user_id" /><meta content="thomasjbradley" name="octolytics-dimension-user_login" /><meta content="469830" name="octolytics-dimension-repository_id" /><meta content="thomasjbradley/signature-pad" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="469830" name="octolytics-dimension-repository_network_root_id" /><meta content="thomasjbradley/signature-pad" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/thomasjbradley/signature-pad/commits/master.atom" rel="alternate" title="Recent Commits to signature-pad:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/thomasjbradley/signature-pad/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/thomasjbradley/signature-pad/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:one1mobile"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new..."
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="thomasjbradley/signature-pad">This repository</span>
  </div>
    <a class="dropdown-item" href="/thomasjbradley/signature-pad/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/one1mobile"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@one1mobile" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/13299089?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">one1mobile</strong>
        </div>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/one1mobile" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="04hbSBPIRsvWi7NM11oPpC/s9svuwx3nYudNoeHjLSV1f42phcyas6xbobaGSCEw8AbdQLDJsaQ37EAg5jlHAQ==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">

        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="szicsbFFSrCeV4cqzyegd5cXVXEQzh7oXEL/oGt7XOWLaU4w4fCprPmetEL+MiFr6ra1RZqOlIFTI9vVAxaTIw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="469830" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/thomasjbradley/signature-pad/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/thomasjbradley/signature-pad/watchers">
          36
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/thomasjbradley/signature-pad/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tQ47/+7puDcQOgL79p/TLJe8bjoer4b2e+bHfgzHpKRdnHgUIBfIPBhn7n87btGZTjaAJiOJsmFG5W+h2q2vNQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar thomasjbradley/signature-pad"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/thomasjbradley/signature-pad/stargazers">
          416
        </a>
</form>
    <form accept-charset="UTF-8" action="/thomasjbradley/signature-pad/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="+m33/3V1JBtPdQ9UDx8ae1BDltiDhf+TdlVY5etyXk20IpHuEPm/QVQyN9gM6qQ/PoUYUqjctwoiVEFScqcR/A==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star thomasjbradley/signature-pad"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/thomasjbradley/signature-pad/stargazers">
          416
        </a>
</form>  </div>

  </li>

        <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of thomasjbradley/signature-pad to your account"
              aria-label="Fork your own copy of thomasjbradley/signature-pad to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/thomasjbradley/signature-pad/network" class="social-count">165</a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/thomasjbradley/signature-pad/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/thomasjbradley" class="url fn" itemprop="url" rel="author"><span itemprop="title">thomasjbradley</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/thomasjbradley/signature-pad" data-pjax="#js-repo-pjax-container">signature-pad</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/thomasjbradley/signature-pad/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/thomasjbradley/signature-pad" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /thomasjbradley/signature-pad">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/thomasjbradley/signature-pad/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /thomasjbradley/signature-pad/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/thomasjbradley/signature-pad/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /thomasjbradley/signature-pad/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/thomasjbradley/signature-pad/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /thomasjbradley/signature-pad/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/thomasjbradley/signature-pad/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /thomasjbradley/signature-pad/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/thomasjbradley/signature-pad.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:thomasjbradley/signature-pad.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/thomasjbradley/signature-pad" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="AkuZIdgSaZsUAohn7H+djMuwbT+wYY15CfYDBtVhDmJ4nkI5PZC0t2OgXTs2AyZMVqRrabvCnP49+XGz9YRj8A==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ICxzfRKom41TCj+rI+2fRusht4Q22OW4W+lO4ZvqTNtkh6aO5eULMOB8fCjruIZlnGBf2LF1TUgL2Z4E+pg9Kg==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="2yIe+ElHw+7+D4DKybk2kJNMjlHSvWkNHTidM/Mcm3BzuZvVbna0xwj1J9viJXpw55XfaMpPODzdTFW7g8G7/A==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>


  <a href="github-windows://openRepo/https://github.com/thomasjbradley/signature-pad" class="btn btn-sm sidebar-button" title="Save thomasjbradley/signature-pad to your computer and use it in GitHub Desktop." aria-label="Save thomasjbradley/signature-pad to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/thomasjbradley/signature-pad/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of thomasjbradley/signature-pad as a zip file"
                   title="Download the contents of thomasjbradley/signature-pad as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/thomasjbradley/signature-pad/blob/97073d766a9aed890f169dc6e8d7b624d8363109/assets/flashcanvas.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:62f0d2b373a45481b9cbfd8e096fa9cc -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/thomasjbradley/signature-pad/blob/master/assets/flashcanvas.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.5.2/assets/flashcanvas.js"
                 data-name="v2.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.5.2">v2.5.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.5.1/assets/flashcanvas.js"
                 data-name="v2.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.5.1">v2.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.5.0/assets/flashcanvas.js"
                 data-name="v2.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.5.0">v2.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.4.2/assets/flashcanvas.js"
                 data-name="v2.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.4.2">v2.4.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.4.1/assets/flashcanvas.js"
                 data-name="v2.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.4.1">v2.4.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.4.0/assets/flashcanvas.js"
                 data-name="v2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.4.0">v2.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.3.0/assets/flashcanvas.js"
                 data-name="v2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.3.0">v2.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.2.0/assets/flashcanvas.js"
                 data-name="v2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2.0">v2.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.1.1/assets/flashcanvas.js"
                 data-name="v2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.1">v2.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.1.0/assets/flashcanvas.js"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.0.4/assets/flashcanvas.js"
                 data-name="v2.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.4">v2.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.0.3/assets/flashcanvas.js"
                 data-name="v2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.3">v2.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.0.2/assets/flashcanvas.js"
                 data-name="v2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.2">v2.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.0.1/assets/flashcanvas.js"
                 data-name="v2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.1">v2.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v2.0.0/assets/flashcanvas.js"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.5.1/assets/flashcanvas.js"
                 data-name="v1.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.5.1">v1.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.5.0/assets/flashcanvas.js"
                 data-name="v1.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.5.0">v1.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.4.0/assets/flashcanvas.js"
                 data-name="v1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.4.0">v1.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.3.2/assets/flashcanvas.js"
                 data-name="v1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.2">v1.3.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.3.1/assets/flashcanvas.js"
                 data-name="v1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.1">v1.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.3.0/assets/flashcanvas.js"
                 data-name="v1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0">v1.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.2.2/assets/flashcanvas.js"
                 data-name="v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.2">v1.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.2.1/assets/flashcanvas.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.2.0/assets/flashcanvas.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.1.3/assets/flashcanvas.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.1.2/assets/flashcanvas.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.1.1/assets/flashcanvas.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.1.0/assets/flashcanvas.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/v1.0.1/assets/flashcanvas.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/thomasjbradley/signature-pad/tree/semver/assets/flashcanvas.js"
                 data-name="semver"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="semver">semver</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/thomasjbradley/signature-pad/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/thomasjbradley/signature-pad" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">signature-pad</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/thomasjbradley/signature-pad/tree/master/assets" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">assets</span></a></span><span class="separator">/</span><strong class="final-path">flashcanvas.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@thomasjbradley" class="avatar" height="24" src="https://avatars2.githubusercontent.com/u/105192?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/thomasjbradley" rel="author">thomasjbradley</a></span>
        <time datetime="2013-07-16T16:36:29Z" is="relative-time">Jul 16, 2013</time>
        <div class="commit-title">
            <a href="/thomasjbradley/signature-pad/commit/a2afaeb0a9407f2bf6ef52fe016dbaa4335fa68d" class="message" data-pjax="true" title="Updated: Changed the name of the build folder to assets to make more sense.">Updated: Changed the name of the build folder to assets to make more …</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@thomasjbradley" height="24" src="https://avatars2.githubusercontent.com/u/105192?v=3&amp;s=48" width="24" />
            <a href="/thomasjbradley">thomasjbradley</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/thomasjbradley/signature-pad/raw/master/assets/flashcanvas.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/thomasjbradley/signature-pad/blame/master/assets/flashcanvas.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/thomasjbradley/signature-pad/commits/master/assets/flashcanvas.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/thomasjbradley/signature-pad?branch=master&amp;filepath=assets%2Fflashcanvas.js"
           aria-label="Open this file in GitHub for Windows"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/thomasjbradley/signature-pad/edit/master/assets/flashcanvas.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Vftz8eOneFcHJBL0d2UJLRr80zcVMXN8V4hA1JanXw+Oqvmm7qZACGWZKrANnHuJi4eMLlabE2nXFCZAYa4FBw==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/thomasjbradley/signature-pad/delete/master/assets/flashcanvas.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="J1dt1awwROc5RyEagmDAlznfGrtGXTAFakF4XN7t9odWYOw1CCG15UpAULydKQhpdYtStZ13nH2lEupgzxMALQ==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete this file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        <span class="file-mode" title="File mode">executable file</span>
        <span class="file-info-divider"></span>
        29 lines (28 sloc)
        <span class="file-info-divider"></span>
      10.805 kB
    </div>
  </div>
  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="2">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * FlashCanvas</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2009      Tim Cameron Ryan</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2009-2011 FlashCanvas Project</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Released under the MIT/X License</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">window</span>.ActiveXObject<span class="pl-k">&amp;&amp;!</span><span class="pl-c1">window</span>.CanvasRenderingContext2D<span class="pl-k">&amp;&amp;</span><span class="pl-k">function</span>(<span class="pl-smi">h</span>,<span class="pl-smi">j</span>){<span class="pl-k">function</span> <span class="pl-en">D</span>(<span class="pl-smi">a</span>){<span class="pl-v">this</span>.<span class="pl-c1">code</span><span class="pl-k">=</span>a;<span class="pl-v">this</span>.message<span class="pl-k">=</span>T[a]}<span class="pl-k">function</span> <span class="pl-en">U</span>(<span class="pl-smi">a</span>){<span class="pl-v">this</span>.<span class="pl-c1">width</span><span class="pl-k">=</span>a}<span class="pl-k">function</span> <span class="pl-en">E</span>(<span class="pl-smi">a</span>){<span class="pl-v">this</span>.<span class="pl-c1">id</span><span class="pl-k">=</span>a.C<span class="pl-k">++</span>}<span class="pl-k">function</span> <span class="pl-en">t</span>(<span class="pl-smi">a</span>){<span class="pl-v">this</span>.G<span class="pl-k">=</span>a;<span class="pl-v">this</span>.<span class="pl-c1">id</span><span class="pl-k">=</span>a.C<span class="pl-k">++</span>}<span class="pl-k">function</span> <span class="pl-en">u</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-v">this</span>.canvas<span class="pl-k">=</span>a;<span class="pl-v">this</span>.B<span class="pl-k">=</span>b;<span class="pl-v">this</span>.d<span class="pl-k">=</span>a.<span class="pl-c1">uniqueID</span>;<span class="pl-v">this</span>.D();<span class="pl-v">this</span>.C<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-v">this</span>.t<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-v">this</span>;<span class="pl-c1">setInterval</span>(<span class="pl-k">function</span>(){n[c.d]<span class="pl-k">===</span><span class="pl-c1">0</span><span class="pl-k">&amp;&amp;</span>c.e()},<span class="pl-c1">30</span>)}<span class="pl-k">function</span> <span class="pl-en">A</span>(){<span class="pl-k">if</span>(j.<span class="pl-c1">readyState</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>complete<span class="pl-pds">&quot;</span></span>){j.<span class="pl-c1">detachEvent</span>(F,A);<span class="pl-k">for</span>(<span class="pl-k">var</span> a<span class="pl-k">=</span>j.<span class="pl-c1">getElementsByTagName</span>(r),b<span class="pl-k">=</span><span class="pl-c1">0</span>,c<span class="pl-k">=</span>a.<span class="pl-c1">length</span>;b<span class="pl-k">&lt;</span>c;<span class="pl-k">++</span>b)B.initElement(a[b])}}<span class="pl-k">function</span> <span class="pl-en">G</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">event</span>.srcElement,b<span class="pl-k">=</span>a.<span class="pl-c1">parentNode</span>;a.<span class="pl-c1">blur</span>();b.<span class="pl-c1">focus</span>()}<span class="pl-k">function</span> <span class="pl-en">H</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-c1">event</span>.propertyName;<span class="pl-k">if</span>(a<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>a<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-c1">event</span>.srcElement,c<span class="pl-k">=</span>b[a],d<span class="pl-k">=</span><span class="pl-c1">parseInt</span>(c,<span class="pl-c1">10</span>);<span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(d)<span class="pl-k">||</span>d<span class="pl-k">&lt;</span><span class="pl-c1">0</span>)d<span class="pl-k">=</span>a<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span><span class="pl-c1">300</span><span class="pl-k">:</span><span class="pl-c1">150</span>;<span class="pl-k">if</span>(c<span class="pl-k">===</span>d){b.<span class="pl-c1">style</span>[a]<span class="pl-k">=</span>d<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;b.getContext(<span class="pl-s"><span class="pl-pds">&quot;</span>2d<span class="pl-pds">&quot;</span></span>).I(b.<span class="pl-c1">width</span>,b.<span class="pl-c1">height</span>)}<span class="pl-k">else</span> b[a]<span class="pl-k">=</span>d}}<span class="pl-k">function</span> <span class="pl-en">I</span>(){h.<span class="pl-c1">detachEvent</span>(J,I);<span class="pl-k">for</span>(<span class="pl-k">var</span> a <span class="pl-k">in</span> s){<span class="pl-k">var</span> b<span class="pl-k">=</span>s[a],c<span class="pl-k">=</span>b.<span class="pl-c1">firstChild</span>,d;<span class="pl-k">for</span>(d <span class="pl-k">in</span> c)<span class="pl-k">if</span>(<span class="pl-k">typeof</span> c[d]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)c[d]<span class="pl-k">=</span>k;<span class="pl-k">for</span>(d <span class="pl-k">in</span> b)<span class="pl-k">if</span>(<span class="pl-k">typeof</span> b[d]<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)b[d]<span class="pl-k">=</span>k;c.<span class="pl-c1">detachEvent</span>(K,G);b.<span class="pl-c1">detachEvent</span>(L,H)}h[M]<span class="pl-k">=</span>k;h[N]<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">k;h[O]<span class="pl-k">=</span>k;h[C]<span class="pl-k">=</span>k;h[P]<span class="pl-k">=</span>k}<span class="pl-k">function</span> <span class="pl-en">V</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span>j.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>script<span class="pl-pds">&quot;</span></span>);a<span class="pl-k">=</span>a[a.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>];<span class="pl-k">return</span> j.documentMode<span class="pl-k">&gt;=</span><span class="pl-c1">8</span><span class="pl-k">?</span>a.src<span class="pl-k">:</span>a.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">4</span>)}<span class="pl-k">function</span> <span class="pl-en">v</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&amp;<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>&amp;amp;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span>&amp;lt;<span class="pl-pds">&quot;</span></span>)}<span class="pl-k">function</span> <span class="pl-en">W</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> a.<span class="pl-c1">toLowerCase</span>()}<span class="pl-k">function</span> <span class="pl-en">i</span>(<span class="pl-smi">a</span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">D</span>(a);}<span class="pl-k">function</span> <span class="pl-en">Q</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-c1">parseInt</span>(a.<span class="pl-c1">width</span>,<span class="pl-c1">10</span>),c<span class="pl-k">=</span><span class="pl-c1">parseInt</span>(a.<span class="pl-c1">height</span>,<span class="pl-c1">10</span>);<span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(b)<span class="pl-k">||</span>b<span class="pl-k">&lt;</span><span class="pl-c1">0</span>)b<span class="pl-k">=</span><span class="pl-c1">300</span>;<span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(c)<span class="pl-k">||</span>c<span class="pl-k">&lt;</span><span class="pl-c1">0</span>)c<span class="pl-k">=</span><span class="pl-c1">150</span>;a.<span class="pl-c1">width</span><span class="pl-k">=</span>b;a.<span class="pl-c1">height</span><span class="pl-k">=</span>c}<span class="pl-k">var</span> k<span class="pl-k">=</span><span class="pl-c1">null</span>,r<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>canvas<span class="pl-pds">&quot;</span></span>,M<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>CanvasRenderingContext2D<span class="pl-pds">&quot;</span></span>,N<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>CanvasGradient<span class="pl-pds">&quot;</span></span>,O<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>CanvasPattern<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">C<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>FlashCanvas<span class="pl-pds">&quot;</span></span>,P<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>G_vmlCanvasManager<span class="pl-pds">&quot;</span></span>,K<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>onfocus<span class="pl-pds">&quot;</span></span>,L<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>onpropertychange<span class="pl-pds">&quot;</span></span>,F<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>onreadystatechange<span class="pl-pds">&quot;</span></span>,J<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>onunload<span class="pl-pds">&quot;</span></span>,w<span class="pl-k">=</span>((h[C<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>Options<span class="pl-pds">&quot;</span></span>]<span class="pl-k">||</span>{}).swfPath<span class="pl-k">||</span>V().<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\/</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>))<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>flashcanvas.swf<span class="pl-pds">&quot;</span></span>,e<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">function</span>(a){<span class="pl-k">for</span>(<span class="pl-k">var</span> b<span class="pl-k">=</span><span class="pl-c1">0</span>,c<span class="pl-k">=</span>a.<span class="pl-c1">length</span>;b<span class="pl-k">&lt;</span>c;b<span class="pl-k">++</span>)<span class="pl-v">this</span>[a[b]]<span class="pl-k">=</span>b}([<span class="pl-s"><span class="pl-pds">&quot;</span>toDataURL<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>save<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>restore<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>scale<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>rotate<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>translate<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>transform<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>setTransform<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>globalAlpha<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>globalCompositeOperation<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>strokeStyle<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>fillStyle<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>createLinearGradient<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>createRadialGradient<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>createPattern<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>lineWidth<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>lineCap<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>lineJoin<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>miterLimit<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>shadowOffsetX<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>shadowOffsetY<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>shadowBlur<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>shadowColor<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>clearRect<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>fillRect<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>strokeRect<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>beginPath<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>closePath<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>moveTo<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>lineTo<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>quadraticCurveTo<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>bezierCurveTo<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>arcTo<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>rect<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>arc<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>stroke<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>clip<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>isPointInPath<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>font<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>textAlign<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>textBaseline<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>fillText<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>strokeText<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>measureText<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>drawImage<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>createImageData<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>getImageData<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>putImageData<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>addColorStop<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>direction<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>]),x<span class="pl-k">=</span>{},n<span class="pl-k">=</span>{},s<span class="pl-k">=</span>{},y<span class="pl-k">=</span>{};<span class="pl-c1">u</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>{<span class="pl-en">save</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.b();<span class="pl-v">this</span>.c();<span class="pl-v">this</span>.m();<span class="pl-v">this</span>.l();<span class="pl-v">this</span>.<span class="pl-c1">z</span>();<span class="pl-v">this</span>.w();</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.F.<span class="pl-c1">push</span>([<span class="pl-v">this</span>.f,<span class="pl-v">this</span>.g,<span class="pl-v">this</span>.A,<span class="pl-v">this</span>.u,<span class="pl-v">this</span>.j,<span class="pl-v">this</span>.h,<span class="pl-v">this</span>.i,<span class="pl-v">this</span>.k,<span class="pl-v">this</span>.p,<span class="pl-v">this</span>.q,<span class="pl-v">this</span>.n,<span class="pl-v">this</span>.o,<span class="pl-v">this</span>.v,<span class="pl-v">this</span>.r,<span class="pl-v">this</span>.s]);<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.save)},<span class="pl-en">restore</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.F;<span class="pl-k">if</span>(a.<span class="pl-c1">length</span>){a<span class="pl-k">=</span>a.<span class="pl-c1">pop</span>();<span class="pl-v">this</span>.globalAlpha<span class="pl-k">=</span>a[<span class="pl-c1">0</span>];<span class="pl-v">this</span>.globalCompositeOperation<span class="pl-k">=</span>a[<span class="pl-c1">1</span>];<span class="pl-v">this</span>.strokeStyle<span class="pl-k">=</span>a[<span class="pl-c1">2</span>];<span class="pl-v">this</span>.fillStyle<span class="pl-k">=</span>a[<span class="pl-c1">3</span>];<span class="pl-v">this</span>.lineWidth<span class="pl-k">=</span>a[<span class="pl-c1">4</span>];<span class="pl-v">this</span>.lineCap<span class="pl-k">=</span>a[<span class="pl-c1">5</span>];<span class="pl-v">this</span>.lineJoin<span class="pl-k">=</span>a[<span class="pl-c1">6</span>];<span class="pl-v">this</span>.miterLimit<span class="pl-k">=</span>a[<span class="pl-c1">7</span>];<span class="pl-v">this</span>.shadowOffsetX<span class="pl-k">=</span>a[<span class="pl-c1">8</span>];<span class="pl-v">this</span>.shadowOffsetY<span class="pl-k">=</span>a[<span class="pl-c1">9</span>];<span class="pl-v">this</span>.shadowBlur<span class="pl-k">=</span>a[<span class="pl-c1">10</span>];<span class="pl-v">this</span>.shadowColor<span class="pl-k">=</span>a[<span class="pl-c1">11</span>];<span class="pl-v">this</span>.font<span class="pl-k">=</span>a[<span class="pl-c1">12</span>];<span class="pl-v">this</span>.<span class="pl-c1">textAlign</span><span class="pl-k">=</span>a[<span class="pl-c1">13</span>];</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.textBaseline<span class="pl-k">=</span>a[<span class="pl-c1">14</span>]}<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.restore)},<span class="pl-en">scale</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.scale,a,b)},<span class="pl-en">rotate</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.rotate,a)},<span class="pl-en">translate</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.translate,a,b)},<span class="pl-en">transform</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">f</span>,<span class="pl-smi">g</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.transform,a,b,c,d,f,g)},<span class="pl-en">setTransform</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">f</span>,<span class="pl-smi">g</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.setTransform,a,b,c,d,f,g)},<span class="pl-en">b</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.a;<span class="pl-k">if</span>(<span class="pl-v">this</span>.f<span class="pl-k">!==</span><span class="pl-v">this</span>.globalAlpha){<span class="pl-v">this</span>.f<span class="pl-k">=</span><span class="pl-v">this</span>.globalAlpha;a.<span class="pl-c1">push</span>(e.globalAlpha,<span class="pl-v">this</span>.f)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.g<span class="pl-k">!==</span><span class="pl-v">this</span>.globalCompositeOperation){<span class="pl-v">this</span>.g<span class="pl-k">=</span><span class="pl-v">this</span>.globalCompositeOperation;</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">a.<span class="pl-c1">push</span>(e.globalCompositeOperation,<span class="pl-v">this</span>.g)}},<span class="pl-en">m</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-v">this</span>.A<span class="pl-k">!==</span><span class="pl-v">this</span>.strokeStyle){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.A<span class="pl-k">=</span><span class="pl-v">this</span>.strokeStyle;<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.strokeStyle,<span class="pl-k">typeof</span> a<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>a.<span class="pl-c1">id</span><span class="pl-k">:</span>a)}},<span class="pl-en">l</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-v">this</span>.u<span class="pl-k">!==</span><span class="pl-v">this</span>.fillStyle){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.u<span class="pl-k">=</span><span class="pl-v">this</span>.fillStyle;<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.fillStyle,<span class="pl-k">typeof</span> a<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>a.<span class="pl-c1">id</span><span class="pl-k">:</span>a)}},<span class="pl-en">createLinearGradient</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-c1">isFinite</span>(a)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(b)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(c)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(d)<span class="pl-k">||</span>i(<span class="pl-c1">9</span>);<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.createLinearGradient,a,b,c,d);<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">t</span>(<span class="pl-v">this</span>)},<span class="pl-en">createRadialGradient</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">f</span>,<span class="pl-smi">g</span>){<span class="pl-c1">isFinite</span>(a)<span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">isFinite</span>(b)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(c)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(d)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(f)<span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(g)<span class="pl-k">||</span>i(<span class="pl-c1">9</span>);<span class="pl-k">if</span>(c<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">||</span>g<span class="pl-k">&lt;</span><span class="pl-c1">0</span>)i(<span class="pl-c1">1</span>);<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.createRadialGradient,a,b,c,d,f,g);<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">t</span>(<span class="pl-v">this</span>)},<span class="pl-en">createPattern</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){a<span class="pl-k">||</span>i(<span class="pl-c1">17</span>);<span class="pl-k">var</span> c<span class="pl-k">=</span>a.<span class="pl-c1">tagName</span>,d,f<span class="pl-k">=</span><span class="pl-v">this</span>.d;<span class="pl-k">if</span>(c){c<span class="pl-k">=</span>c.<span class="pl-c1">toLowerCase</span>();<span class="pl-k">if</span>(c<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>)d<span class="pl-k">=</span>a.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">2</span>);<span class="pl-k">else</span> <span class="pl-k">if</span>(c<span class="pl-k">===</span>r<span class="pl-k">||</span>c<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>video<span class="pl-pds">&quot;</span></span>)<span class="pl-k">return</span>;<span class="pl-k">else</span> i(<span class="pl-c1">17</span>)}<span class="pl-k">else</span> <span class="pl-k">if</span>(a.src)d<span class="pl-k">=</span>a.src;<span class="pl-k">else</span> i(<span class="pl-c1">17</span>);b<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>repeat<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>b<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>no-repeat<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>b<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>repeat-x<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>b<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>repeat-y<span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>b<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">||</span>b<span class="pl-k">===</span>k<span class="pl-k">||</span>i(<span class="pl-c1">12</span>);<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.createPattern,v(d),b);<span class="pl-k">if</span>(x[f]){<span class="pl-v">this</span>.e();<span class="pl-k">++</span>n[f]}<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">E</span>(<span class="pl-v">this</span>)},</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-en">z</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.a;<span class="pl-k">if</span>(<span class="pl-v">this</span>.j<span class="pl-k">!==</span><span class="pl-v">this</span>.lineWidth){<span class="pl-v">this</span>.j<span class="pl-k">=</span><span class="pl-v">this</span>.lineWidth;a.<span class="pl-c1">push</span>(e.lineWidth,<span class="pl-v">this</span>.j)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.h<span class="pl-k">!==</span><span class="pl-v">this</span>.lineCap){<span class="pl-v">this</span>.h<span class="pl-k">=</span><span class="pl-v">this</span>.lineCap;a.<span class="pl-c1">push</span>(e.lineCap,<span class="pl-v">this</span>.h)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.i<span class="pl-k">!==</span><span class="pl-v">this</span>.lineJoin){<span class="pl-v">this</span>.i<span class="pl-k">=</span><span class="pl-v">this</span>.lineJoin;a.<span class="pl-c1">push</span>(e.lineJoin,<span class="pl-v">this</span>.i)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.k<span class="pl-k">!==</span><span class="pl-v">this</span>.miterLimit){<span class="pl-v">this</span>.k<span class="pl-k">=</span><span class="pl-v">this</span>.miterLimit;a.<span class="pl-c1">push</span>(e.miterLimit,<span class="pl-v">this</span>.k)}},<span class="pl-en">c</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.a;<span class="pl-k">if</span>(<span class="pl-v">this</span>.p<span class="pl-k">!==</span><span class="pl-v">this</span>.shadowOffsetX){<span class="pl-v">this</span>.p<span class="pl-k">=</span><span class="pl-v">this</span>.shadowOffsetX;a.<span class="pl-c1">push</span>(e.shadowOffsetX,<span class="pl-v">this</span>.p)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.q<span class="pl-k">!==</span><span class="pl-v">this</span>.shadowOffsetY){<span class="pl-v">this</span>.q<span class="pl-k">=</span><span class="pl-v">this</span>.shadowOffsetY;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">a.<span class="pl-c1">push</span>(e.shadowOffsetY,<span class="pl-v">this</span>.q)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.n<span class="pl-k">!==</span><span class="pl-v">this</span>.shadowBlur){<span class="pl-v">this</span>.n<span class="pl-k">=</span><span class="pl-v">this</span>.shadowBlur;a.<span class="pl-c1">push</span>(e.shadowBlur,<span class="pl-v">this</span>.n)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.o<span class="pl-k">!==</span><span class="pl-v">this</span>.shadowColor){<span class="pl-v">this</span>.o<span class="pl-k">=</span><span class="pl-v">this</span>.shadowColor;a.<span class="pl-c1">push</span>(e.shadowColor,<span class="pl-v">this</span>.o)}},<span class="pl-en">clearRect</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.clearRect,a,b,c,d)},<span class="pl-en">fillRect</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-v">this</span>.b();<span class="pl-v">this</span>.c();<span class="pl-v">this</span>.l();<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.fillRect,a,b,c,d)},<span class="pl-en">strokeRect</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-v">this</span>.b();<span class="pl-v">this</span>.c();<span class="pl-v">this</span>.m();<span class="pl-v">this</span>.<span class="pl-c1">z</span>();<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.strokeRect,a,b,c,d)},<span class="pl-en">beginPath</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.beginPath)},<span class="pl-en">closePath</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.closePath)},</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-en">moveTo</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.moveTo,a,b)},<span class="pl-en">lineTo</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.lineTo,a,b)},<span class="pl-en">quadraticCurveTo</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.quadraticCurveTo,a,b,c,d)},<span class="pl-en">bezierCurveTo</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">f</span>,<span class="pl-smi">g</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.bezierCurveTo,a,b,c,d,f,g)},<span class="pl-en">arcTo</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">f</span>){f<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(f)<span class="pl-k">&amp;&amp;</span>i(<span class="pl-c1">1</span>);<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.arcTo,a,b,c,d,f)},<span class="pl-en">rect</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.rect,a,b,c,d)},<span class="pl-en">arc</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">f</span>,<span class="pl-smi">g</span>){c<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">isFinite</span>(c)<span class="pl-k">&amp;&amp;</span>i(<span class="pl-c1">1</span>);<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.arc,a,b,c,d,f,g<span class="pl-k">?</span><span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-c1">0</span>)},<span class="pl-en">fill</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.b();<span class="pl-v">this</span>.c();</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.l();<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.fill)},<span class="pl-en">stroke</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.b();<span class="pl-v">this</span>.c();<span class="pl-v">this</span>.m();<span class="pl-v">this</span>.<span class="pl-c1">z</span>();<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.stroke)},<span class="pl-en">clip</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.<span class="pl-c1">clip</span>)},<span class="pl-en">w</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.a;<span class="pl-k">if</span>(<span class="pl-v">this</span>.v<span class="pl-k">!==</span><span class="pl-v">this</span>.font)<span class="pl-k">try</span>{<span class="pl-k">var</span> b<span class="pl-k">=</span>y[<span class="pl-v">this</span>.d];b.<span class="pl-c1">style</span>.font<span class="pl-k">=</span><span class="pl-v">this</span>.v<span class="pl-k">=</span><span class="pl-v">this</span>.font;<span class="pl-k">var</span> c<span class="pl-k">=</span>b.currentStyle;a.<span class="pl-c1">push</span>(e.font,[c.fontStyle,c.<span class="pl-c1">fontWeight</span>,b.offsetHeight,c.<span class="pl-c1">fontFamily</span>].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>))}<span class="pl-k">catch</span>(d){}<span class="pl-k">if</span>(<span class="pl-v">this</span>.r<span class="pl-k">!==</span><span class="pl-v">this</span>.<span class="pl-c1">textAlign</span>){<span class="pl-v">this</span>.r<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-c1">textAlign</span>;a.<span class="pl-c1">push</span>(e.<span class="pl-c1">textAlign</span>,<span class="pl-v">this</span>.r)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.s<span class="pl-k">!==</span><span class="pl-v">this</span>.textBaseline){<span class="pl-v">this</span>.s<span class="pl-k">=</span><span class="pl-v">this</span>.textBaseline;a.<span class="pl-c1">push</span>(e.textBaseline,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.s)}<span class="pl-k">if</span>(<span class="pl-v">this</span>.t<span class="pl-k">!==</span><span class="pl-v">this</span>.canvas.currentStyle.direction){<span class="pl-v">this</span>.t<span class="pl-k">=</span><span class="pl-v">this</span>.canvas.currentStyle.direction;a.<span class="pl-c1">push</span>(e.direction,<span class="pl-v">this</span>.t)}},<span class="pl-en">fillText</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-v">this</span>.b();<span class="pl-v">this</span>.l();<span class="pl-v">this</span>.c();<span class="pl-v">this</span>.w();<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.fillText,v(a),b,c,d<span class="pl-k">===void</span> <span class="pl-c1">0</span><span class="pl-k">?</span><span class="pl-c1">Infinity</span><span class="pl-k">:</span>d)},<span class="pl-en">strokeText</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>){<span class="pl-v">this</span>.b();<span class="pl-v">this</span>.m();<span class="pl-v">this</span>.c();<span class="pl-v">this</span>.w();<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.strokeText,v(a),b,c,d<span class="pl-k">===void</span> <span class="pl-c1">0</span><span class="pl-k">?</span><span class="pl-c1">Infinity</span><span class="pl-k">:</span>d)},<span class="pl-en">measureText</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> b<span class="pl-k">=</span>y[<span class="pl-v">this</span>.d];<span class="pl-k">try</span>{b.<span class="pl-c1">style</span>.font<span class="pl-k">=</span><span class="pl-v">this</span>.font}<span class="pl-k">catch</span>(c){}b.innerText<span class="pl-k">=</span>a.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[ <span class="pl-cce">\n\f\r</span>]</span><span class="pl-pds">/</span>g</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\t</span><span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">U</span>(b.offsetWidth)},</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-en">drawImage</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">d</span>,<span class="pl-smi">f</span>,<span class="pl-smi">g</span>,<span class="pl-smi">o</span>,<span class="pl-smi">l</span>,<span class="pl-smi">z</span>){a<span class="pl-k">||</span>i(<span class="pl-c1">17</span>);<span class="pl-k">var</span> p<span class="pl-k">=</span>a.<span class="pl-c1">tagName</span>,m,q<span class="pl-k">=</span>arguments.<span class="pl-c1">length</span>,R<span class="pl-k">=</span><span class="pl-v">this</span>.d;<span class="pl-k">if</span>(p){p<span class="pl-k">=</span>p.<span class="pl-c1">toLowerCase</span>();<span class="pl-k">if</span>(p<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>)m<span class="pl-k">=</span>a.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">2</span>);<span class="pl-k">else</span> <span class="pl-k">if</span>(p<span class="pl-k">===</span>r<span class="pl-k">||</span>p<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>video<span class="pl-pds">&quot;</span></span>)<span class="pl-k">return</span>;<span class="pl-k">else</span> i(<span class="pl-c1">17</span>)}<span class="pl-k">else</span> <span class="pl-k">if</span>(a.src)m<span class="pl-k">=</span>a.src;<span class="pl-k">else</span> i(<span class="pl-c1">17</span>);<span class="pl-v">this</span>.b();<span class="pl-v">this</span>.c();m<span class="pl-k">=</span>v(m);<span class="pl-k">if</span>(q<span class="pl-k">===</span><span class="pl-c1">3</span>)<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.drawImage,q,m,b,c);<span class="pl-k">else</span> <span class="pl-k">if</span>(q<span class="pl-k">===</span><span class="pl-c1">5</span>)<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.drawImage,q,m,b,c,d,f);<span class="pl-k">else</span> <span class="pl-k">if</span>(q<span class="pl-k">===</span><span class="pl-c1">9</span>){<span class="pl-k">if</span>(d<span class="pl-k">===</span><span class="pl-c1">0</span><span class="pl-k">||</span>f<span class="pl-k">===</span><span class="pl-c1">0</span>)i(<span class="pl-c1">1</span>);<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.drawImage,q,m,b,c,d,f,g,o,l,z)}<span class="pl-k">else</span> <span class="pl-k">return</span>;<span class="pl-k">if</span>(x[R]){<span class="pl-v">this</span>.e();<span class="pl-k">++</span>n[R]}},<span class="pl-en">D</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-v">this</span>.globalAlpha<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.f<span class="pl-k">=</span><span class="pl-c1">1</span>;<span class="pl-v">this</span>.globalCompositeOperation<span class="pl-k">=</span><span class="pl-v">this</span>.g<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>source-over<span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.fillStyle<span class="pl-k">=</span><span class="pl-v">this</span>.u<span class="pl-k">=</span><span class="pl-v">this</span>.strokeStyle<span class="pl-k">=</span><span class="pl-v">this</span>.A<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>#000000<span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.lineWidth<span class="pl-k">=</span><span class="pl-v">this</span>.j<span class="pl-k">=</span><span class="pl-c1">1</span>;<span class="pl-v">this</span>.lineCap<span class="pl-k">=</span><span class="pl-v">this</span>.h<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>butt<span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.lineJoin<span class="pl-k">=</span><span class="pl-v">this</span>.i<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>miter<span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.miterLimit<span class="pl-k">=</span><span class="pl-v">this</span>.k<span class="pl-k">=</span><span class="pl-c1">10</span>;<span class="pl-v">this</span>.shadowBlur<span class="pl-k">=</span><span class="pl-v">this</span>.n<span class="pl-k">=</span><span class="pl-v">this</span>.shadowOffsetY<span class="pl-k">=</span><span class="pl-v">this</span>.q<span class="pl-k">=</span><span class="pl-v">this</span>.shadowOffsetX<span class="pl-k">=</span><span class="pl-v">this</span>.p<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-v">this</span>.shadowColor<span class="pl-k">=</span><span class="pl-v">this</span>.o<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>rgba(0, 0, 0, 0.0)<span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.font<span class="pl-k">=</span><span class="pl-v">this</span>.v<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>10px sans-serif<span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.<span class="pl-c1">textAlign</span><span class="pl-k">=</span><span class="pl-v">this</span>.r<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>start<span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.textBaseline<span class="pl-k">=</span><span class="pl-v">this</span>.s<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>alphabetic<span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.a<span class="pl-k">=</span>[];<span class="pl-v">this</span>.F<span class="pl-k">=</span>[]},<span class="pl-en">H</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.a;<span class="pl-v">this</span>.a<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">[];<span class="pl-k">return</span> a},<span class="pl-en">e</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-v">this</span>.H();<span class="pl-k">if</span>(a.<span class="pl-c1">length</span><span class="pl-k">&gt;</span><span class="pl-c1">0</span>)<span class="pl-k">return</span> <span class="pl-c1">eval</span>(<span class="pl-v">this</span>.B.CallFunction(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;invoke name=&quot;executeCommand&quot; returntype=&quot;javascript&quot;&gt;&lt;arguments&gt;&lt;string&gt;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>a.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&amp;#0;<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/string&gt;&lt;/arguments&gt;&lt;/invoke&gt;<span class="pl-pds">&quot;</span></span>))},<span class="pl-en">I</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-v">this</span>.e();<span class="pl-v">this</span>.D();<span class="pl-k">if</span>(a<span class="pl-k">&gt;</span><span class="pl-c1">0</span>)<span class="pl-v">this</span>.B.<span class="pl-c1">width</span><span class="pl-k">=</span>a;<span class="pl-k">if</span>(b<span class="pl-k">&gt;</span><span class="pl-c1">0</span>)<span class="pl-v">this</span>.B.<span class="pl-c1">height</span><span class="pl-k">=</span>b;<span class="pl-v">this</span>.a.<span class="pl-c1">push</span>(e.resize,a,b)}};<span class="pl-c1">t</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>{<span class="pl-en">addColorStop</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){<span class="pl-k">if</span>(<span class="pl-c1">isNaN</span>(a)<span class="pl-k">||</span>a<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">||</span>a<span class="pl-k">&gt;</span><span class="pl-c1">1</span>)i(<span class="pl-c1">1</span>);<span class="pl-v">this</span>.G.a.<span class="pl-c1">push</span>(e.addColorStop,<span class="pl-v">this</span>.<span class="pl-c1">id</span>,a,b)}};<span class="pl-c1">D</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>Error();<span class="pl-k">var</span> T<span class="pl-k">=</span>{<span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>INDEX_SIZE_ERR<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">9</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>NOT_SUPPORTED_ERR<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">11</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>INVALID_STATE_ERR<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">12</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>SYNTAX_ERR<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">17</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>TYPE_MISMATCH_ERR<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">18</span><span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>SECURITY_ERR<span class="pl-pds">&quot;</span></span>},B<span class="pl-k">=</span>{<span class="pl-en">initElement</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(a.getContext)<span class="pl-k">return</span> a;<span class="pl-k">var</span> b<span class="pl-k">=</span>a.<span class="pl-c1">uniqueID</span>,c<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>external<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b;x[b]<span class="pl-k">=</span><span class="pl-c1">false</span>;n[b]<span class="pl-k">=</span><span class="pl-c1">1</span>;Q(a);a.innerHTML<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&#39;</span>&lt;object classid=&quot;clsid:d27cdb6e-ae6d-11cf-96b8-444553540000&quot; codebase=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>location.<span class="pl-c1">protocol</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0&quot; width=&quot;100%&quot; height=&quot;100%&quot; id=&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>c<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;param name=&quot;allowScriptAccess&quot; value=&quot;always&quot;&gt;&lt;param name=&quot;flashvars&quot; value=&quot;id=<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>c<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;param name=&quot;wmode&quot; value=&quot;transparent&quot;&gt;&lt;/object&gt;&lt;span style=&quot;margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap&quot;&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">s[b]<span class="pl-k">=</span>a;<span class="pl-k">var</span> d<span class="pl-k">=</span>a.<span class="pl-c1">firstChild</span>;y[b]<span class="pl-k">=</span>a.<span class="pl-c1">lastChild</span>;<span class="pl-k">var</span> f<span class="pl-k">=</span>j.<span class="pl-c1">body</span>.contains;<span class="pl-k">if</span>(f(a))d.movie<span class="pl-k">=</span>w;<span class="pl-k">else</span> <span class="pl-k">var</span> g<span class="pl-k">=</span><span class="pl-c1">setInterval</span>(<span class="pl-k">function</span>(){<span class="pl-k">if</span>(f(a)){<span class="pl-c1">clearInterval</span>(g);d.movie<span class="pl-k">=</span>w}},<span class="pl-c1">0</span>);<span class="pl-k">if</span>(j.compatMode<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>BackCompat<span class="pl-pds">&quot;</span></span><span class="pl-k">||!</span>h.<span class="pl-c1">XMLHttpRequest</span>)y[b].<span class="pl-c1">style</span>.overflow<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>;<span class="pl-k">var</span> o<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">u</span>(a,d);<span class="pl-c1">a</span>.<span class="pl-en">getContext</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">l</span>){<span class="pl-k">return</span> l<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>2d<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>o<span class="pl-k">:</span>k};<span class="pl-c1">a</span>.<span class="pl-en">toDataURL</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">l</span>,<span class="pl-smi">z</span>){(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>l).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">A-Z</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,W)<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>image/jpeg<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>o.a.<span class="pl-c1">push</span>(e.toDataURL,l,<span class="pl-k">typeof</span> z<span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>z<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span>o.a.<span class="pl-c1">push</span>(e.toDataURL,l);<span class="pl-k">return</span> o.e()};d.<span class="pl-c1">attachEvent</span>(K,G);<span class="pl-k">return</span> a},<span class="pl-en">saveImage</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){a.<span class="pl-c1">firstChild</span>.saveImage()},</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-en">setOptions</span><span class="pl-k">:</span><span class="pl-k">function</span>(){},<span class="pl-en">trigger</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){s[a].fireEvent(<span class="pl-s"><span class="pl-pds">&quot;</span>on<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b)},<span class="pl-en">unlock</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>){n[a]<span class="pl-k">&amp;&amp;--</span>n[a];<span class="pl-k">if</span>(b){<span class="pl-k">var</span> c<span class="pl-k">=</span>s[a],d<span class="pl-k">=</span>c.<span class="pl-c1">firstChild</span>,f,g;Q(c);f<span class="pl-k">=</span>c.<span class="pl-c1">width</span>;g<span class="pl-k">=</span>c.<span class="pl-c1">height</span>;c.<span class="pl-c1">style</span>.<span class="pl-c1">width</span><span class="pl-k">=</span>f<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;c.<span class="pl-c1">style</span>.<span class="pl-c1">height</span><span class="pl-k">=</span>g<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(f<span class="pl-k">&gt;</span><span class="pl-c1">0</span>)d.<span class="pl-c1">width</span><span class="pl-k">=</span>f;<span class="pl-k">if</span>(g<span class="pl-k">&gt;</span><span class="pl-c1">0</span>)d.<span class="pl-c1">height</span><span class="pl-k">=</span>g;d.<span class="pl-c1">resize</span>(f,g);c.<span class="pl-c1">attachEvent</span>(L,H);x[a]<span class="pl-k">=</span><span class="pl-c1">true</span>}}};j.<span class="pl-c1">createElement</span>(r);j.<span class="pl-c1">createStyleSheet</span>().cssText<span class="pl-k">=</span>r<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>{display:inline-block;overflow:hidden;width:300px;height:150px}<span class="pl-pds">&quot;</span></span>;j.<span class="pl-c1">readyState</span><span class="pl-k">===</span><span class="pl-s"><span class="pl-pds">&quot;</span>complete<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>A()<span class="pl-k">:</span>j.<span class="pl-c1">attachEvent</span>(F,A);h.<span class="pl-c1">attachEvent</span>(J,I);<span class="pl-k">if</span>(w.<span class="pl-c1">indexOf</span>(location.<span class="pl-c1">protocol</span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&quot;</span>//<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>location.<span class="pl-c1">host</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span>)<span class="pl-k">===</span><span class="pl-c1">0</span>){<span class="pl-k">var</span> S<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">ActiveXObject</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Microsoft.XMLHTTP<span class="pl-pds">&quot;</span></span>);S.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>,w,<span class="pl-c1">false</span>);S.<span class="pl-c1">send</span>(k)}h[M]<span class="pl-k">=</span>u;h[N]<span class="pl-k">=</span>t;h[O]<span class="pl-k">=</span>E;h[C]<span class="pl-k">=</span>B;h[P]<span class="pl-k">=</span>{<span class="pl-en">init</span><span class="pl-k">:</span><span class="pl-k">function</span>(){},<span class="pl-en">init_</span><span class="pl-k">:</span><span class="pl-k">function</span>(){},initElement<span class="pl-k">:</span>B.initElement};keep<span class="pl-k">=</span>u.measureText}(<span class="pl-c1">window</span>,<span class="pl-c1">document</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08596s from github-fe136-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-3241a40a58a82e21daef3dd3cdca01bde189158793c1b6f9193fff2b5293cd1d.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-d3ef45e52a74e2511c31a0051d5dfd10b60b12a8b8a738ead962c35e11dbcc1f.js"></script>
      
      
  </body>
</html>

