using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lume.Models
{
    public class SignLang
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Image { get; set; }
        public int UserProfileId { get; set; }
    }
}