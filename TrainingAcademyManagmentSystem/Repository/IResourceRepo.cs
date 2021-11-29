using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public interface IResourceRepo
    {
       //
        Task<List<Resource>> GetResources();

        Task<Resource> AddResource(Resource resource);

        Task<Resource> DeleteResource(int id);

        Task<Resource> UpdateResource(Resource resource);

        Task<Resource> GetResourceById(int id);
    }
}
