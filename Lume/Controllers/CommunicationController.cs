using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Lume.Models;
using Lume.Repositories;
using System.Security.Claims;

namespace Lume.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CommunicationController : ControllerBase
    {
        private readonly ICommunicationRepository _communicationRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public CommunicationController(ICommunicationRepository communicationRepository, IUserProfileRepository userProfileRepository)
        {
            _communicationRepository = communicationRepository;
            _userProfileRepository = userProfileRepository;
        }

        // GET: api/<CommunicationController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_communicationRepository.GetAllCommunication());
        }


        [HttpGet("user")]

        public IActionResult getByUser(int id)

        {
            var user = GetCurrentUser();
            return Ok(_communicationRepository.GetByUserId(user.Id));
        }


        private userProfile GetCurrentUser()
        //private methods are used as helpers
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            if (firebaseUserId != null)
            {
                return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            }
            else
            {
                return null;
            }
        }




        // POST api/<CommunicationController>
        [HttpPost]
        public IActionResult Add(Communication communication)
        {

            _communicationRepository.Add(communication);
            return CreatedAtAction(nameof(getByUser), new { id = communication.Id }, communication);
        }


        //[HttpPut("{id}")]
        //public IActionResult Put(int id, Communication communication)
        //{
        //    if (id != communication.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _communicationRepository.UpdateCommunication(communication);
        //    return NoContent();
        //}


        // DELETE api/<CommunicationController>/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCom(int id)
        {
            _communicationRepository.DeleteCom(id);
            return NoContent();
        }


    }
}

