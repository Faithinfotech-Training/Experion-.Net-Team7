﻿using System;
using System.Collections.Generic;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class PageVisit
    {
        public int PageId { get; set; }
        public string PageName { get; set; }
        public int? PageCount { get; set; }
    }
}
