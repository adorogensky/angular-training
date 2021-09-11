# Create New App and Start Dev Server
 * npm install -g @angular/cli
 * ng new <app_name>
 * cd <app_name>
 * ng serve
 
# Observations
  * Intellij/Linux Karma plugin's subsequent spec executions with Firefox launcher are well under 1s
  * What is wrong with fixture.nativeElement.querySelector('span[class = ag-header-cell-text][textContent = Name]') ? Returns elements with firefox-launcher all the time
  * ng update requires a clean git repo, wtf??
  * npm install @ngneat/spectator --save-dev fails because has @angular/animations@11.2.14 but requires  @angular/animations@">= 12.0.0"
  * intellij debugging is available in chrome browser only
  * w3c selectors don't support querying elements by its text
  * https://github.com/karma-runner/karma
  * https://github.com/karma-runner/karma-chrome-launcher
  * https://jasmine.github.io/2.0/introduction
  * https://github.com/ngneat/spectator
  * https://drafts.csswg.org/selectors/



npm i -g npm-check-updates
ncu -u
rm package-lock.json
npm i

npm view typescript versions
npm audit

npm i @ngneat/spectator --save-dev

