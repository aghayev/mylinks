Next.JS MobileApp Capacitor Sample
===========

Instruction based on this [Youtube video](https://www.youtube.com/watch?v=S55BrlnLup8&t=552s)


Instruction
-------------

npm i @capacitor/core

npm i -D @capacitor/cli

npx cap init

npm i @capacitor/android @capacitor/ios

npm run build

npx cap add android

npx cap add ios

npx cap sync

### a fix for ios to complete pod install:
* clone [https://github.com/CocoaPods/Xcodeproj](https://github.com/CocoaPods/Xcodeproj)
* edit Gemfile.lock and xcodeproj.gemspec changing rexml version to 3.3.0
* run rake build
* run gem install rexml -v 3.3.0 (I did this with and without sudo)
* run gem install --local pkg/xcodeproj-1.24.0.gem (I did this with and without sudo)
* running again pod install in project folder and now completes normally


npx cap open android

npx cap open ios

after nextjs code changes
------------

npm run build
Todo: npm run static

npx cap sync

Todo: check params in nextjs.config.README
Todo: transfer nextjs-mydirectory:develop-capacitor



