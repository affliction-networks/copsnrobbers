using CitizenFX.Core;
using IniParser;
using IniParser.Model;
using ServiceStack.Redis;
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

        public int serverID = 0;

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

            string rawHosts = data["Database"]["hosts"];
            Configs.Database.hosts = rawHosts.Split(',');
            foreach(string addedhost in Configs.Database.hosts)
            {
                Debug.WriteLine("Added database host... " + addedhost);
            }

            Configs.Database.password = data["Database"]["password"];

            Debug.WriteLine("Database information loaded. Now establishing database connection variables...");
            Configs.Database.manager = new PooledRedisClientManager(Configs.Database.hosts, Configs.Database.hosts,
                new RedisClientManagerConfig
                {
                    MaxWritePoolSize = Configs.Database.hosts.Length,
                    MaxReadPoolSize = Configs.Database.hosts.Length,
                    AutoStart = false
                });
            Debug.WriteLine("Done setting up database connection variables.");
            try
            {
                serverID = int.Parse(data["Main"]["serverid"]);
            }catch(Exception ex)
            {
                Debug.WriteLine("Server ID specified in config invalid.");
                return;
            }

        }
    }
}
