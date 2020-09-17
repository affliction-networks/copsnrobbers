using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Database
{
    public class Player
    {

        // Core Account Info

        public string steamid; // Steam id of the player
        public UserLevel level; // User's access level
        public int serverNumber; // Determines if they are currently connected to a server (-1 = Not connected, anything else = server id)

        // Stat Related Information
        public int kills; // Obviously their kills
        public int deaths; // Obvously their deaths
        public int copWins; // How many times they won a game as a cop
        public int robberWins; // How many times they won a game as a robber
        public int bossWins; // How many times they won a game as boss

        // Action Information
        public int warnings; // Count of user warnings
        public int bans; // Count of user perma bans
        public int tempbans; // Count of user temp bans
        public int kicks; // Count of user kicks

        // Identification Information
        public List<string> ips; // List of all ips that connected to this account
        public List<string> discords; // List of all discords connected to this account
        public List<string> licenses; // List of all licenses connected to this account

        public Player()
        {

        }
    }
}
