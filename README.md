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

# Why Angular is a bad technology?
* Complexity
  * many concepts that don't make up for a coherent picture, i.e. why do i need detectChanges() if changes detection is enabled by default. sometimes i need detectChanges() sometimes i dont
  * takes 20s to rebuild a simple app with a simple change
* Poor documentation:
  * change detection mechanism, wtf is detectChanges() supposed to do? where is the official documentation?
* Too many breaking changes from version to version. Do maintainers really care about the users?

 
