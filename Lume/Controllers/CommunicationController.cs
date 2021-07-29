using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lume.Models;
using Lume.Repositories;
//using Lume.Models;

namespace Lume.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommunicationController : ControllerBase
    {
        private readonly ICommunicationRepository _communicationRepository;

        public CommunicationController(ICommunicationRepository communicationRepository)
        {
            _communicationRepository = communicationRepository;
        }

        // GET: api/<CommunicationController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_communicationRepository.GetAllCommunication());
        }

        //// GET api/<CommunicationController>/5
        //[HttpGet("{id}")]
        //public IActionResult Get(int id)
        //{
        //    var communication = _communicationRepository.GetById(id);
        //    if (communication == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(communication);
        //}

        //// POST api/<CommunicationController>
        //[HttpPost]
        //public IActionResult Post(CommunicationRepository communication)
        //{
        //    _communicationRepository.Add(communication);
        //    return CreatedAtAction("Get", new { id = communication.Id }, communication);
        //}

        //[HttpPut("{id}")]
        //public IActionResult Put(int id, CommunicationRepository communication)
        //{
        //    if (id != communication.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _communicationRepository.Update(communication);
        //    return NoContent();
        //}


        //// DELETE api/<CommunicationController>/5
        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _communicationRepository.Delete(id);
        //    return NoContent();
        //}
    }
}