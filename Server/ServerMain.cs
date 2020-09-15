using CitizenFX.Core;
using IniParser;
using IniParser.Model;
using Server.Configs;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static CitizenFX.Core.Native.API;

namespace Server
{
    public class ServerMain : BaseScript
    {
        public ServerMain()
        {
            Debug.WriteLine("Cops N` Robbers Framework by Hammer");
            Debug.WriteLine("Made for https://discord.gg/5QaG5tF");
            Debug.WriteLine("All Rights Reserved");
            if(!File.Exists("ServerConfig.ini"))
            {
                Debug.WriteLine("Settings file doesn't exist or is corrupted. Exiting!");
                return;
            }
            Debug.WriteLine("Loading settings....");
            var parser = new FileIniDataParser();
            IniData data = parser.ReadFile("ServerConfig.ini");

            // Load Database Config

            Debug.WriteLine("Loaded database configuration.");
            // End Load Database Config


        }
    }
}
