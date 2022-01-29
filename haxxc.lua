local haxxnuifor = false

RegisterCommand("haxxpoints", function()
    local playerCoords = GetEntityCoords(PlayerPedId())

    SetDisplay(not haxxnuifor)
end)


function SetDisplay(bool)
    haxxnuifor = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

RegisterNUICallback("haxxcloseButton", function(data)
    SetNuiFocus(false, false)
    SetDisplay(false)
end)

Citizen.CreateThread(function()
    while haxxnuifor do
        Citizen.Wait(0)
        DisableControlAction(0, 1, haxxnuifor)
        DisableControlAction(0, 2, haxxnuifor)
        DisableControlAction(0, 142, haxxnuifor)
        DisableControlAction(0, 18, haxxnuifor)
        DisableControlAction(0, 322, haxxnuifor)
        DisableControlAction(0, 106, haxxnuifor)
    end
end)