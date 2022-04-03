using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models.Entities
{
    public class Puzzle
    {
        public string seed { get; set; }

        public List<List<int>> puzzle { get; set; }
    }
}
