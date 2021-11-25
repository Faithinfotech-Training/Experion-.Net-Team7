using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class CoursePurchase
    {
        public int AdmissionId { get; set; }
        public int? CourseId { get; set; }
        public int? TraineeId { get; set; }
        public int? BatchId { get; set; }
        public DateTime? PurchaseDate { get; set; }

        public virtual Batch Batch { get; set; }
        public virtual Courses Course { get; set; }
        public virtual Trainee Trainee { get; set; }
    }
}
