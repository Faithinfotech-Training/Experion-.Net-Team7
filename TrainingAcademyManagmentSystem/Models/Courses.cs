using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class Courses
    {
        public Courses()
        {
            Batch = new HashSet<Batch>();
            CourseEnquiry = new HashSet<CourseEnquiry>();
            CoursePurchase = new HashSet<CoursePurchase>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public bool IsPublic { get; set; }
        public bool IsAvailable { get; set; }
        public decimal CoursePrice { get; set; }
        public string CourseDescription { get; set; }
        public string CourseDuration { get; set; }

        public virtual ICollection<Batch> Batch { get; set; }
        public virtual ICollection<CourseEnquiry> CourseEnquiry { get; set; }
        public virtual ICollection<CoursePurchase> CoursePurchase { get; set; }
    }
}
