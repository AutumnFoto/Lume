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
    public class SignLangController : ControllerBase
    {
        private readonly ISignLangRepository _signLangRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public SignLangController(ISignLangRepository _signLangRepository, IUserProfileRepository userProfileRepository)
        {
            _signLangRepository = _signLangRepository;
            _userProfileRepository = userProfileRepository;
        }
        // GET: api/<CommunicationController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_signLangRepository.GetAllSigns());
        }
        [HttpGet("{id}")]
        public IActionResult GetById(int id)

        {
            //var user = GetCurrentUser();
            return Ok(_signLangRepository.GetSignByID(id));
        }
        [HttpGet("ByCurrentUser")]
        public IActionResult GetByUserProfileId()

        {
            var user = GetCurrentUser();
            return Ok(_signLangRepository.GetSignByUserId(user.Id));
        }
        // POST api/<CommunicationController>
        [HttpPost]
        public IActionResult Post(SignLang sign)
        {
            var currentUserProfile = GetCurrentUser();
            sign.UserProfileId = currentUserProfile.Id;

            _signLangRepository.Add(sign);
            return CreatedAtAction(nameof(Get), new { id = sign.Id }, sign);
        }
        [HttpPut]
        public IActionResult Put(SignLang sign)
        {
            var currentUserProfile = GetCurrentUser();
            sign.UserProfileId = currentUserProfile.Id;

            _signLangRepository.UpdateSign(sign);
            return CreatedAtAction(nameof(Get), new { id = sign.Id }, sign);
        }
        // DELETE api/<CommunicationController>/5
        [HttpDelete("{id}")]
        public IActionResult DeleteById(int id)
        {
            _signLangRepository.DeleteSign(id);
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
