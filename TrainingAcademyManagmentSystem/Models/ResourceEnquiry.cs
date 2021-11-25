using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class ResourceEnquiry
    {
        public int ResourceEnquiryId { get; set; }
        public string Query { get; set; }
        public DateTime? EnquiryDate { get; set; }
        public int? ResourceId { get; set; }
        public int? LeadId { get; set; }

        public virtual Lead Lead { get; set; }
        public virtual Resource Resource { get; set; }
    }
}
