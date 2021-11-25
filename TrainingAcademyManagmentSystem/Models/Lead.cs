using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class Lead
    {
        public Lead()
        {
            CourseEnquiry = new HashSet<CourseEnquiry>();
            ResourceEnquiry = new HashSet<ResourceEnquiry>();
            ResourcePurchase = new HashSet<ResourcePurchase>();
        }

        public int LeadId { get; set; }
        public string LeadName { get; set; }
        public decimal LeadContact { get; set; }
        public string LeadEmail { get; set; }
        public string LeadStatus { get; set; }
        public string LeadQualification { get; set; }

        public virtual ICollection<CourseEnquiry> CourseEnquiry { get; set; }
        public virtual ICollection<ResourceEnquiry> ResourceEnquiry { get; set; }
        public virtual ICollection<ResourcePurchase> ResourcePurchase { get; set; }
    }
}
