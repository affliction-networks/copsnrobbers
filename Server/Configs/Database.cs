using ServiceStack.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Configs
{
    public static class Database
    {
        public static string[] hosts;
        public static string password;
        public static PooledRedisClientManager manager;
    }
}
