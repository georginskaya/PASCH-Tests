@echo off
echo Starte Cypress-Test >> log.txt
cd "C:\Users\GIO006200\Desktop\Testing_cypress"
"C:\Users\GIO006200\Desktop\Testing_cypress\node_modules\.bin\cypress" run --spec "C:\Users\GIO006200\Desktop\Testing_cypress\cypress\integration\cmsNewPage.spec.js" >> log.txt
echo Cypress-Test abgeschlossen >> log.txt



