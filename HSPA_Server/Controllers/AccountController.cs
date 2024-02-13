﻿using HSPA_Server.Interfaces;
using HSPA_Server.Dtos;
using HSPA_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authorization;

namespace HSPA_Server.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IConfiguration configuration;

        public AccountController(IUnitOfWork uow, IConfiguration configuration)
        {
            this.uow = uow;
            this.configuration = configuration;
        }
        
        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginReqDto loginReq)
        {
            var user = await uow.UserRepository.Authenticate(loginReq.UserName, loginReq.Password);
            if (user == null)
            {
                return Unauthorized("Invalid user Id or password");

            }
            var loginRes = new LoginResDto();
            loginRes.UserName = user.Username;
            loginRes.Token = CreatJWT(user);

            return Ok(loginRes);
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register(LoginReqDto loginReq)
        {
            if(await uow.UserRepository.UserAlreadyExists(loginReq.UserName))
            {
                return BadRequest("User already exists");
            }

            uow.UserRepository.Register(loginReq.UserName, loginReq.Password); 
            await uow.SaveAsync();
            return StatusCode(201);
        }

        private string CreatJWT(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration.GetSection("AppSettings:Key").Value));

            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            var signingCredentials = new SigningCredentials(
                key, SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = signingCredentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);

        }

    }
}
