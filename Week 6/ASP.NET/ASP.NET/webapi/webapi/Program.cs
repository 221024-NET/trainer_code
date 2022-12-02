using Microsoft.EntityFrameworkCore;
using webapi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// DB Context.
//builder.Services.AddDbContext<EmpDbContext>(opt =>
//    opt.UseInMemoryDatabase("EmpDb"));
var connValue = builder.Configuration.GetValue<string>("ConnectionString:EmployeeDB");
builder.Services.AddDbContext<EmpDbContext>(opts =>
    opts.UseSqlServer(connValue)
);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
