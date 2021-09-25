# Create New App and Start Dev Server
 * npm install -g @angular/cli
 * ng new <app_name>
 * cd <app_name>
 * ng serve
 
# Limitations
  * intellij/linux/karma plugin's subsequent spec executions with karma-firefox-launcher are well under 1s
  * w3c selectors don't support querying elements by text, e.g. fixture.nativeElement.querySelector('span[class = ag-header-cell-text][textContent = Name]') 
  * Core Angular Testing Framework configuration is clumsy as compared to Spectator abstraction 
  * ng update requires a clean git repo, wtf??
  * npm install @ngneat/spectator --save-dev failed because has @angular/animations@11.2.14 but requires  @angular/animations@">= 12.0.0"
  * intellij/linux/karma debugging is available for chrome/chromium browser only, firefox doesn't work

# Links
  * [Karma](https://github.com/karma-runner/karma)
  * [Karma Chrome Launcher](https://github.com/karma-runner/karma-chrome-launcher)
  * [Jasmine](https://jasmine.github.io/2.0/introduction)
  * [Spectator](https://github.com/ngneat/spectator)
  * [Selectors](https://drafts.csswg.org/selectors)

# Tools
* update all dependencies (manual conflict resolution may still be required)
  ```
  npm i -g npm-check-updates
  ncu -u
  rm package-lock.json
  npm i
  ```
* show versions for a package
  ```
  npm view typescript versions
  ```
* install spectator
  ```
  npm i @ngneat/spectator --save-dev
  ```
* audit npm modules for vulnerabilities
  ```
  npm audit
  ```
* add material ui
  ```
  ng add @angular/material
  ```
* generate a component
  ```
  ng g c add-employee
  ```
* convert angular project from css to scss (angular.json)
```aidl
"schematics": {
    "@schematics/angular:component": {
        "style": "scss"
    }
 }
```


# What makes for a good technology
* Performance a.k.a speed of execution, tests included = can I use this technology now?
* Scope = in how many different environments can this technology be used?
* Simplicity a.k.a ease of use = 
     simple concepts; 
     comprehensive but comprehensible documentation;
* Integration with IDE
* How easily is it extensible?
* Adoption in Tech Community
* Open Source Licensing
* Availability and Licensing of tools and Integration Technologies

- complexity: how much does memorization do the technology require, e.g. createComponent signature
- simplicty: less memorization, more deduction
- complexity: confusion, spectator.component vs spectator.fixture.componentInstance
- spectator: can i query angular components from the DOM, e.g. a MatLabel?

- complexity
    - less people who understand the technology
      - lower adoption scalability
      - worse documentation
      - poor performance
      - more defects
      - longer release cycles
      - breaking changes

# Why Angular is a bad technology?
* Complexity
  * many concepts that don't make up for a coherent picture, i.e. why do i need detectChanges() if changes detection is enabled by default. sometimes i need detectChanges() sometimes i dont
* Poor documentation:
  * change detection mechanism, wtf is detectChanges() supposed to do? where is the official documentation?
* Many breaking changes from version to version, don't really care about users

 
