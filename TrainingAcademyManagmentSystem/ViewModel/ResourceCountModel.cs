using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrainingAcademyManagmentSystem.ViewModel
{
    public class ResourceCountModel
    {
        public int ResourceCount { get; set; }
        public int ResourceId { get; set; }

        public DateTime? EnquiryDate { get; set; }
        public string ResourceName { get; set; }
    }
}
