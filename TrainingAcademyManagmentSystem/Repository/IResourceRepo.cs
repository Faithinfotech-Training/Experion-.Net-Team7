﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public interface IResourceRepo
    {
        Task<Resource> GetResources();
    }
}