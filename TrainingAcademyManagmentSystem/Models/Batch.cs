using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class Batch
    {
        public Batch()
        {
            CoursePurchase = new HashSet<CoursePurchase>();
            Trainee = new HashSet<Trainee>();
        }

        public int BatchId { get; set; }
        public string BatchName { get; set; }
        public DateTime? BatchStartDate { get; set; }
        public int? CourseId { get; set; }
        public bool? IsActive { get; set; }

        public virtual Courses Course { get; set; }
        public virtual ICollection<CoursePurchase> CoursePurchase { get; set; }
        public virtual ICollection<Trainee> Trainee { get; set; }
    }
}
