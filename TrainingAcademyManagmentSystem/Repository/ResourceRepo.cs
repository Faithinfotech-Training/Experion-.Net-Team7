using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;
using Microsoft.EntityFrameworkCore;
namespace TrainingAcademyManagmentSystem.Repository
{
    public class ResourceRepo : IResourceRepo
    {

        TrainingManagmentSystemContext db;

        public ResourceRepo(TrainingManagmentSystemContext _db)
        {
            db = _db;
        }

        #region get resources
        public async Task<List<Resource>> GetResources()
        {
            if (db != null)
            {
                return await db.Resource.ToListAsync();
            }
            return null;
        }
        #endregion

        #region add resource
        public async Task<Resource> AddResource(Resource resource)
        {
            {
                //--- member function to add resource ---//
                if (db != null)
                {
                    await db.Resource.AddAsync(resource);
                    await db.SaveChangesAsync();
                    return resource;
                }
                return null;

            }


        }
        #endregion

        #region delete resource
        public async Task<Resource> DeleteResource(int id)
        {
            if (db != null)
            {
                Resource dbres = await db.Resource.FirstOrDefaultAsync(em => em.ResourceId == id);
                dbres.IsAvailable = false;
                db.Resource.Update(dbres);
                await db.SaveChangesAsync();

                return dbres;
            }
            return null;


        }
        #endregion

        #region update resource
        public async Task<Resource> UpdateResource(Resource resource)
        {
            if (db != null)
            {
                db.Resource.Update(resource);
                await db.SaveChangesAsync();
                return resource;
            }
            return null;
        }
        #endregion

        #region get resource by id
        public async Task<Resource> GetResourceById(int id)
        {
            
            var resource = await db.Resource.FirstOrDefaultAsync(em => em.ResourceId == id);
            if(resource!=null)
            {
                return resource;
            }   
            
            return null;
        }
        #endregion
    }
}
