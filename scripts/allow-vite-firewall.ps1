# Autorise le port Vite (5173) — à lancer en PowerShell ADMINISTRATEUR
# Clic droit PowerShell → Exécuter en tant qu’administrateur, puis :
#   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#   cd "...\alicia_coach\scripts"
#   .\allow-vite-firewall.ps1

$ruleName = "Alicia Coach Vite 5173"
$existing = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue
if ($existing) {
  Write-Host "Regle deja presente : $ruleName"
} else {
  New-NetFirewallRule -DisplayName $ruleName `
    -Direction Inbound `
    -Action Allow `
    -Protocol TCP `
    -LocalPort 5173 `
    -Profile Private, Domain
  Write-Host "Regle ajoutee pour TCP 5173 (reseaux Prive et Domaine)."
}

Write-Host ""
Write-Host "Verifie aussi : Wi-Fi en reseau Prive (Parametres > Reseau > Wi-Fi > Proprietes)."
Write-Host "Puis sur le tel : http://192.168.1.175:5173/ (IP affichee par npm run dev)."
