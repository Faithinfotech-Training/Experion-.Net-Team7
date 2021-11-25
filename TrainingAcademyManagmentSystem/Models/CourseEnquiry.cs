using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class CourseEnquiry
    {
        public int CourseEnquiryId { get; set; }
        public string Query { get; set; }
        public DateTime? EnquiryDate { get; set; }
        public int? CourseId { get; set; }
        public int? LeadId { get; set; }

        public virtual Courses Course { get; set; }
        public virtual Lead Lead { get; set; }
    }
}
