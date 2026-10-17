@echo off
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js yuklu degil. https://nodejs.org adresinden LTS surumunu kurun, sonra bu dosyayi tekrar calistirin.
  pause
  exit /b 1
)
call npm install
if errorlevel 1 (echo npm install basarisiz oldu & pause & exit /b 1)
call npm run dist
echo.
echo Hazir. dist klasorundeki SonsuzKosu.exe dosyasini calistirin.
pause
