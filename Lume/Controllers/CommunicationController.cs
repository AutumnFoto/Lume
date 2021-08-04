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
        [HttpGet("{id}")]
        public IActionResult GetById(int id)

        {
            //var user = GetCurrentUser();
            return Ok(_communicationRepository.GetCommunicationByID(id));
        }
        [HttpGet("ByCurrentUser")]
        public IActionResult GetByUserProfileId()

        {
            var user = GetCurrentUser();
            return Ok(_communicationRepository.GetCommunicationByUserId(user.Id));
        }
        // POST api/<CommunicationController>
        [HttpPost]
        public IActionResult Post(Communication communication)
        {
            var currentUserProfile = GetCurrentUser();
            communication.UserProfileId = currentUserProfile.Id;

            _communicationRepository.Add(communication);
            return CreatedAtAction(nameof(Get), new { id = communication.Id }, communication);
        }
        [HttpPut]
        public IActionResult Put(Communication communication)
        {
            var currentUserProfile = GetCurrentUser();
            communication.UserProfileId = currentUserProfile.Id;

            _communicationRepository.UpdateCommunication(communication);
            return CreatedAtAction(nameof(Get), new { id = communication.Id }, communication);
        }
        // DELETE api/<CommunicationController>/5
        [HttpDelete("{id}")]
        public IActionResult DeleteById(int id)
        {
            _communicationRepository.DeleteCom(id);
            return NoContent();
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
    }
}

