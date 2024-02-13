using HSPA_Server.Data;
using Microsoft.AspNetCore.Mvc;
using HSPA_Server.Models;
using HSPA_Server.Interfaces;
using HSPA_Server.Data.Repo;
using HSPA_Server.Dtos;
using AutoMapper;
using HSPA_Server.Migrations;
using Microsoft.AspNetCore.Authorization;


namespace HSPA_Server.Controllers
{
    [Authorize]
    public class CityController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public CityController( IUnitOfWork uow, IMapper mapper)
        {
           
            
            this.uow = uow;
            this.mapper = mapper;
        }
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetCity()
        {
            
            var cities = await uow.CityRepository.GetCitiesAsync();

            var citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);
            return Ok(citiesDto);
        }

       // [HttpPost("add/{cityName}")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> AddCity(CityDto cityDto)
        {
            
            var city = mapper.Map<City>(cityDto);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;

            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }

        

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {

            uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }
    }
}
