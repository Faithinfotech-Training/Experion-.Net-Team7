using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class Trainee
    {
        public Trainee()
        {
            CoursePurchase = new HashSet<CoursePurchase>();
        }

        public int TraineeId { get; set; }
        public string TraineeName { get; set; }
        public decimal TraineeContact { get; set; }
        public string TraineeEmail { get; set; }
        public int? BatchId { get; set; }
        public int? UserId { get; set; }

        public virtual Batch Batch { get; set; }
        public virtual Users User { get; set; }
        public virtual ICollection<CoursePurchase> CoursePurchase { get; set; }
    }
}
