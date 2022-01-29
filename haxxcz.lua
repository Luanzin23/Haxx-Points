local PointsVisible = false


Citizen.CreateThread(function()
    while true do
		local sleepThread = 250
		
		if PointsVisible then
			sleepThread = 5

			local playerPed = PlayerPedId()


		Citizen.Wait(sleepThread)
	end
end)
