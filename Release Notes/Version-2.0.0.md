## 2.0.0 (2024-04-08)

> Version 2.0.0 of "Should I Click This?" marks a transformative update, integrating both Phishing.db and Open Phish data into a unified search functionality for streamlined URL safety verification. This version simplifies the environmental configuration by consolidating variables for enhanced clarity and introduces new features including Dark Mode and GDPR consent for analytics. Additionally, version 2.0.0 debuts a refreshed visual identity with a new logo and color palette, and improves site navigation by introducing a dedicated about page.

### Upgrade Steps

* Remove the following environment variables

  * VITE_LINK_API_URL
  * VITE_DOMAIN_API_URL
  * VITE_LINK_SAFE_MESSAGE
  * VITE_LINK_UNSAFE_MESSAGE
  * VITE_DOMAIN_SAFE_MESSAGE
  * VITE_DOMAIN_UNSAFE_MESSAGE
* Add the following environment variables

  * VITE_API_URL
    * This should point to the `/api/consolidated` on the hosted [Should I click this?](https://github.com/vatdaell/should-i-click-this "Should I click this setup?") backend
  * VITE_URL_SAFE_MESSAGE
    * The safe message that appears when the url is not found after a search
  * VITE_URL_UNSAFE_MESSAGE
    * The unsafe message that appears when the url is found after a search
  * VITE_URL_ERROR_MESSAGE
    * Error message that appears when there is an issue with the backend response
  * VITE_GA_ID
    * Google analytics tracking id

### Breaking Changes

* Removed the following environment variables
  * VITE_LINK_API_URL
  * VITE_DOMAIN_API_URL
  * VITE_LINK_SAFE_MESSAGE
  * VITE_LINK_UNSAFE_MESSAGE
  * VITE_DOMAIN_SAFE_MESSAGE
  * VITE_DOMAIN_UNSAFE_MESSAGE
* Added the following environment variables
  * VITE_API_URL
  * VITE_URL_SAFE_MESSAGE
  * VITE_URL_UNSAFE_MESSAGE
  * VITE_URL_ERROR_MESSAGE
  * VITE_GA_ID

### New Features

* Consolidated Phishing.db link and domain and Open Phish data feed into one search bar
* Added Dark Mode
* GDPR consent for analytics tracking

### Other Changes

* Seperate about page to clear up main search page
* New logo added
* Colour changes to better represent the site
