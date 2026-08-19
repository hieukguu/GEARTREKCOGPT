@echo off
setlocal
cd /d "%~dp0"
title GEARTREKCO Local Preview

set "BUNDLED_NODE=C:\Users\hieuk\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if exist "%BUNDLED_NODE%" (
  start "" http://localhost:4173
  "%BUNDLED_NODE%" node_modules\vite\bin\vite.js preview --host 127.0.0.1 --port 4173
  goto :end
)

where node >nul 2>nul
if %errorlevel% equ 0 (
  start "" http://localhost:4173
  node node_modules\vite\bin\vite.js preview --host 127.0.0.1 --port 4173
  goto :end
)

echo.
echo Khong tim thay Node.js de khoi dong website.
echo Vui long cai Node.js tai https://nodejs.org/
echo.
pause

:end
endlocal
