using System.Text.Json;
using FluentValidation;
using FluentValidation.AspNetCore;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Videoteka.API.Data;
using Videoteka.API.Data.Request;
using Videoteka.API.Middleware;
using Videoteka.API.Middleware.Logger;
using Videoteka.API.Middleware.Videoteka.API.Middleware;
using Videoteka.API.Repository;
using Videoteka.API.Repository.Contracts;
using Videoteka.API.Service;
using Videoteka.API.Service.Contracts;
using Videoteka.API.Service.Validator;

namespace Videoteka.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        
        private const string CorsNameAll = "All";
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddControllers()
                .AddFluentValidation()
                .AddJsonOptions(options =>
                    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase);
            services.AddLogging(logging =>
            {
                logging.AddConsole();
                logging.AddDebug();
            });
            // Db
            services.AddDbContext<VideotekaDbContext>(options => 
                options.UseSqlServer(Configuration.GetConnectionString("VideotekaDbConnection")));
            // Libraries
            services.AddMediatR(typeof(Startup));
            // Services
            services.AddUserRequestExceptionLogger(Configuration);
            services.AddScoped<IVideoRepository, VideoRepository>();
            services.AddScoped<IFileService, FileService>();
            services.AddTransient<IValidator<UploadVideoRequest>, UploadVideoValidator>();
            services.AddTransient<IValidator<PlayerRequest>, PlayerValidator>();
            services.AddTransient<IValidator<GetUserVideosRequest>, GetUserVideosRequestValidator>();
            services.AddCors(options =>
            {
                options.AddPolicy(CorsNameAll, builder => builder
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod());
            });
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo {Title = "Videoteka.API", Version = "v1"});
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Videoteka.API v1"));
            }
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors(CorsNameAll);
            app.UseAuthorization();
            app.UseMiddleware<GlobalExceptionHandlerMiddleware>();
            app.UseMiddleware<ConcurrecnyExceptionMiddleware>();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}
