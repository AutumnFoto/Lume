using Microsoft.AspNetCore.Mvc;
using System;
using Lume.Models;
using Lume.Repositories;
using Microsoft.AspNet.SignalR;
using System.Security.Claims;

namespace Lume.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }
        [HttpGet]
        public IActionResult GetByFirebaseUserId()
        {
            var userProfile = GetCurrentUser();
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }
        //[HttpGet("{firebaseUserId}")]
        //public IActionResult GetByFirebaseUserId(string firebaseUserId)
        //{
        //    var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        //    if (userProfile == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(userProfile);
        //}

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpPost]
        public IActionResult Post(userProfile userProfile)
        {
            
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                nameof(GetByFirebaseUserId),
                new { firebaseUserId = userProfile.FireBaseUserId },
                userProfile);
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