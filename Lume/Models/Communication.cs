using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Lume.Models
{
    public class Communication
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public string Image { get; set; }
        public int UserProfileId { get; set; }
    }
}