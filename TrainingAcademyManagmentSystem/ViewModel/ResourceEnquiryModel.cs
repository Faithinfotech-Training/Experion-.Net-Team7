using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrainingAcademyManagmentSystem.ViewModel
{
    public class ResourceEnquiryModel
    {
        public int LeadId { get; set; }
        public string LeadName { get; set; }
        public decimal LeadContact { get; set; }
        public string LeadEmail { get; set; }
        public string LeadStatus { get; set; }
        public int ResourceId { get; set; }
        public string ResourceName { get; set; }
        public bool IsAvailable { get; set; }
        public decimal ResourceCost { get; set; }
        public string ResourceDescription { get; set; }
        public int ResourceEnquiryId { get; set; }
        public string Query { get; set; }
        public DateTime? EnquiryDate { get; set; }

    }
}
