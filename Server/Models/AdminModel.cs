using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class AdminModel
    {
        public int ID { get; set; }
        public string Account { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string AvatorUrl { get; set; }
        public string Mood { get; set; }
        public string Mail { get; set; }
    }
}
