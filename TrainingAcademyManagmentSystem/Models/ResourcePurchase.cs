using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class ResourcePurchase
    {
        public int PurchaseId { get; set; }
        public int? ResourceId { get; set; }
        public int? LeadId { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public int? PeriodOfPurchase { get; set; }

        public virtual Lead Lead { get; set; }
        public virtual Resource Resource { get; set; }
    }
}
