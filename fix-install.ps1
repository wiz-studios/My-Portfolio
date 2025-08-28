# fix-install.ps1
# This script cleans and reinstalls npm dependencies for your project

# Move into your project folder (update this path if you move your project)
Set-Location CUserskipkuDesktopApplicationsMy-Portfolio-mainMy-Portfolio-main

Write-Host 🔄 Cleaning old dependencies...

# Remove node_modules if it exists
if (Test-Path node_modules) {
    Remove-Item -Recurse -Force node_modules
    Write-Host ✅ Removed node_modules
}

# Remove package-lock.json if it exists
if (Test-Path package-lock.json) {
    Remove-Item -Force package-lock.json
    Write-Host ✅ Removed package-lock.json
}

# Clear npm cache
npm cache clean --force
Write-Host 🧹 NPM cache cleaned

# Reset registry
npm config set registry httpsregistry.npmjs.org
Write-Host 🌍 NPM registry reset to default

# Reinstall dependencies
npm install --legacy-peer-deps
Write-Host 📦 Dependencies reinstalled successfully!
