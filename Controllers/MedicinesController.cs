using MedicineAppAssignment.Models;
using Microsoft.AspNetCore.Mvc;
using MedicineAppAssignment.Services;

namespace MedicineAppAssignment.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicinesController : ControllerBase
    {
        private readonly MedicineService _service = new MedicineService();

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_service.GetAll());
        }

        [HttpPost]
        public IActionResult Add([FromBody] Medicine medicine)
        {
            _service.Add(medicine);
            return Ok(medicine);
        }

        [HttpGet("search")]
        public IActionResult Search(string name)
        {
            var medicines = _service.GetAll();
            var result = medicines.Where(m => m.FullName.Contains(name, StringComparison.OrdinalIgnoreCase));
            return Ok(result);
        }
    }
}
