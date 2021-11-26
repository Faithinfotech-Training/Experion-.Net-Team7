using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TrainingAcademyManagmentSystem.Models
{
    public partial class TrainingManagmentSystemContext : DbContext
    {
        public TrainingManagmentSystemContext()
        {
        }

        public TrainingManagmentSystemContext(DbContextOptions<TrainingManagmentSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Batch> Batch { get; set; }
        public virtual DbSet<CourseEnquiry> CourseEnquiry { get; set; }
        public virtual DbSet<CoursePurchase> CoursePurchase { get; set; }
        public virtual DbSet<Courses> Courses { get; set; }
        public virtual DbSet<Lead> Lead { get; set; }
        public virtual DbSet<PageVisit> PageVisit { get; set; }
        public virtual DbSet<Resource> Resource { get; set; }
        public virtual DbSet<ResourceEnquiry> ResourceEnquiry { get; set; }
        public virtual DbSet<ResourcePurchase> ResourcePurchase { get; set; }
        public virtual DbSet<Role> Role { get; set; }
        public virtual DbSet<Trainee> Trainee { get; set; }
        public virtual DbSet<Users> Users { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer("Data Source=JUNAIDKV\\SQLEXPRESS;Initial Catalog=TrainingManagmentSystem;Integrated Security=True");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Batch>(entity =>
            {
                entity.ToTable("batch");

                entity.Property(e => e.BatchId).HasColumnName("batchId");

                entity.Property(e => e.BatchName)
                    .IsRequired()
                    .HasColumnName("batchName")
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.Property(e => e.BatchStartDate)
                    .HasColumnName("batchStartDate")
                    .HasColumnType("date");

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.Batch)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__batch__courseId__31EC6D26");
            });

            modelBuilder.Entity<CourseEnquiry>(entity =>
            {
                entity.ToTable("courseEnquiry");

                entity.Property(e => e.CourseEnquiryId).HasColumnName("courseEnquiryId");

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.EnquiryDate)
                    .HasColumnName("enquiryDate")
                    .HasColumnType("date");

                entity.Property(e => e.LeadId).HasColumnName("leadId");

                entity.Property(e => e.Query)
                    .HasColumnName("query")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CourseEnquiry)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__courseEnq__cours__46E78A0C");

                entity.HasOne(d => d.Lead)
                    .WithMany(p => p.CourseEnquiry)
                    .HasForeignKey(d => d.LeadId)
                    .HasConstraintName("FK__courseEnq__leadI__47DBAE45");
            });

            modelBuilder.Entity<CoursePurchase>(entity =>
            {
                entity.HasKey(e => e.AdmissionId)
                    .HasName("PK__coursePu__705A8259233DF203");

                entity.ToTable("coursePurchase");

                entity.Property(e => e.AdmissionId).HasColumnName("admissionId");

                entity.Property(e => e.BatchId).HasColumnName("batchId");

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.PurchaseDate)
                    .HasColumnName("purchaseDate")
                    .HasColumnType("date");

                entity.Property(e => e.TraineeId).HasColumnName("traineeId");

                entity.HasOne(d => d.Batch)
                    .WithMany(p => p.CoursePurchase)
                    .HasForeignKey(d => d.BatchId)
                    .HasConstraintName("FK__coursePur__batch__3C69FB99");

                entity.HasOne(d => d.Course)
                    .WithMany(p => p.CoursePurchase)
                    .HasForeignKey(d => d.CourseId)
                    .HasConstraintName("FK__coursePur__cours__3A81B327");

                entity.HasOne(d => d.Trainee)
                    .WithMany(p => p.CoursePurchase)
                    .HasForeignKey(d => d.TraineeId)
                    .HasConstraintName("FK__coursePur__train__3B75D760");
            });

            modelBuilder.Entity<Courses>(entity =>
            {
                entity.HasKey(e => e.CourseId)
                    .HasName("PK__courses__2AA84FD1359F5517");

                entity.ToTable("courses");

                entity.HasIndex(e => e.CourseName)
                    .HasName("UQ__courses__BEEA9EECA620047B")
                    .IsUnique();

                entity.Property(e => e.CourseId).HasColumnName("courseId");

                entity.Property(e => e.CourseDescription)
                    .HasColumnName("courseDescription")
                    .IsUnicode(false);

                entity.Property(e => e.CourseName)
                    .IsRequired()
                    .HasColumnName("courseName")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.CoursePrice)
                    .HasColumnName("coursePrice")
                    .HasColumnType("money");

                entity.Property(e => e.IsAvailable).HasColumnName("isAvailable");

                entity.Property(e => e.IsPublic).HasColumnName("isPublic");
            });

            modelBuilder.Entity<Lead>(entity =>
            {
                entity.ToTable("lead");

                entity.Property(e => e.LeadId).HasColumnName("leadId");

                entity.Property(e => e.LeadContact)
                    .HasColumnName("leadContact")
                    .HasColumnType("numeric(10, 0)");

                entity.Property(e => e.LeadEmail)
                    .IsRequired()
                    .HasColumnName("leadEmail")
                    .IsUnicode(false);

                entity.Property(e => e.LeadName)
                    .IsRequired()
                    .HasColumnName("leadName")
                    .IsUnicode(false);

                entity.Property(e => e.LeadQualification)
                    .HasColumnName("leadQualification")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LeadStatus)
                    .IsRequired()
                    .HasColumnName("leadStatus")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PageVisit>(entity =>
            {
                entity.HasKey(e => e.PageId)
                    .HasName("PK__pageVisi__54B1FF7406C22B92");

                entity.ToTable("pageVisit");

                entity.Property(e => e.PageId).HasColumnName("pageId");

                entity.Property(e => e.PageCount)
                    .HasColumnName("pageCount")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.PageName)
                    .HasColumnName("pageName")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Resource>(entity =>
            {
                entity.ToTable("resource");

                entity.HasIndex(e => e.ResourceName)
                    .HasName("UQ__resource__47AE2F63A891EA65")
                    .IsUnique();

                entity.Property(e => e.ResourceId).HasColumnName("resourceId");

                entity.Property(e => e.IsAvailable).HasColumnName("isAvailable");

                entity.Property(e => e.IsPublic).HasColumnName("isPublic");

                entity.Property(e => e.ResourceCost)
                    .HasColumnName("resourceCost")
                    .HasColumnType("money");

                entity.Property(e => e.ResourceDescription)
                    .HasColumnName("resourceDescription")
                    .IsUnicode(false);

                entity.Property(e => e.ResourceName)
                    .HasColumnName("resourceName")
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ResourceEnquiry>(entity =>
            {
                entity.ToTable("resourceEnquiry");

                entity.Property(e => e.ResourceEnquiryId).HasColumnName("resourceEnquiryId");

                entity.Property(e => e.EnquiryDate)
                    .HasColumnName("enquiryDate")
                    .HasColumnType("date");

                entity.Property(e => e.LeadId).HasColumnName("leadId");

                entity.Property(e => e.Query)
                    .HasColumnName("query")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ResourceId).HasColumnName("resourceId");

                entity.HasOne(d => d.Lead)
                    .WithMany(p => p.ResourceEnquiry)
                    .HasForeignKey(d => d.LeadId)
                    .HasConstraintName("FK__resourceE__leadI__440B1D61");

                entity.HasOne(d => d.Resource)
                    .WithMany(p => p.ResourceEnquiry)
                    .HasForeignKey(d => d.ResourceId)
                    .HasConstraintName("FK__resourceE__resou__4316F928");
            });

            modelBuilder.Entity<ResourcePurchase>(entity =>
            {
                entity.HasKey(e => e.PurchaseId)
                    .HasName("PK__resource__0261226C501A03DC");

                entity.ToTable("resourcePurchase");

                entity.Property(e => e.PurchaseId).HasColumnName("purchaseId");

                entity.Property(e => e.LeadId).HasColumnName("leadId");

                entity.Property(e => e.PeriodOfPurchase).HasColumnName("periodOfPurchase");

                entity.Property(e => e.PurchaseDate)
                    .HasColumnName("purchaseDate")
                    .HasColumnType("date");

                entity.Property(e => e.ResourceId).HasColumnName("resourceId");

                entity.HasOne(d => d.Lead)
                    .WithMany(p => p.ResourcePurchase)
                    .HasForeignKey(d => d.LeadId)
                    .HasConstraintName("FK__resourceP__leadI__403A8C7D");

                entity.HasOne(d => d.Resource)
                    .WithMany(p => p.ResourcePurchase)
                    .HasForeignKey(d => d.ResourceId)
                    .HasConstraintName("FK__resourceP__resou__3F466844");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("role");

                entity.HasIndex(e => e.Role1)
                    .HasName("UQ__role__863D214879356BE3")
                    .IsUnique();

                entity.Property(e => e.RoleId).HasColumnName("roleId");

                entity.Property(e => e.Role1)
                    .HasColumnName("role")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Trainee>(entity =>
            {
                entity.ToTable("trainee");

                entity.Property(e => e.TraineeId).HasColumnName("traineeId");

                entity.Property(e => e.BatchId).HasColumnName("batchId");

                entity.Property(e => e.TraineeContact)
                    .HasColumnName("traineeContact")
                    .HasColumnType("numeric(10, 0)");

                entity.Property(e => e.TraineeEmail)
                    .IsRequired()
                    .HasColumnName("traineeEmail")
                    .IsUnicode(false);

                entity.Property(e => e.TraineeName)
                    .IsRequired()
                    .HasColumnName("traineeName")
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.HasOne(d => d.Batch)
                    .WithMany(p => p.Trainee)
                    .HasForeignKey(d => d.BatchId)
                    .HasConstraintName("FK__trainee__batchId__34C8D9D1");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Trainee)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__trainee__userId__35BCFE0A");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__users__CB9A1CFF5681C183");

                entity.ToTable("users");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.RoleId).HasColumnName("roleId");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasColumnName("userName")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.RoleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__users__roleId__276EDEB3");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
