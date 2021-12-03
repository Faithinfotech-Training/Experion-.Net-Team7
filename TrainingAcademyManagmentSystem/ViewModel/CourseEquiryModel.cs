using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrainingAcademyManagmentSystem.ViewModel
{
    public class CourseEquiryModel
    {
        public int LeadId { get; set; }
        public string LeadName { get; set; }
        public decimal LeadContact { get; set; }
        public string LeadEmail { get; set; }
        public string LeadStatus { get; set; }

        public string LeadQualification { get; set; }

        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public bool IsPublic { get; set; }
        public bool IsAvailable { get; set; }
        public decimal CoursePrice { get; set; }
        public string CourseDescription { get; set; }

        
        public int CourseEnquiryId { get; set; }
        public string Query { get; set; }
        public DateTime? EnquiryDate { get; set; }
       



       
       
      
    }
}
