using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Database
{
    public enum UserLevel
    {
        USER,
        DONOR,
        HELPER,
        MODERATOR,
        ADMIN,
        DEVELOPER,
        OWNER
    }
}
