using CitizenFX.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using static CitizenFX.Core.Native.API;


namespace Client
{
    class ClientMain : BaseScript
    {
        public ClientMain()
        {
            EventHandlers.Add("playerSpawned", new Action<Vector3>(PlayerSpawned));
        }
        private void PlayerSpawned([FromSource] Vector3 spawn)
        {

        }
    }
}
