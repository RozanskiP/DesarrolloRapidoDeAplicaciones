using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models.Models
{
    public class LoginResponseDTO
    {
        public int uuid { get; set; }

        public string Login { get; set; }

        public string Email { get; set; }
    }
}
