using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LevelUpAssessmentBackend2.LevelUpAssessmentBackend;
using LevelUpAssessmentBackend2.Models;

namespace LevelUpAssessmentBackend2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GraduatesController : ControllerBase
    {
        private readonly DbGradContext _context;

        public GraduatesController(DbGradContext context)
        {
            _context = context;
        }

        // GET: api/Graduates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Graduate>>> GetGraduates()
        {
            return await _context.Graduates
                .Where(grad => (grad.IsDeleted == false)) 
                .ToListAsync();
        }

        // GET: api/Graduates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Graduate>> GetGraduate(string id)
        {
            var graduate = await _context.Graduates.FindAsync(id);

            if (graduate == null)
            {
                return NotFound();
            }

            else if (graduate.IsDeleted == false)
            {
                return graduate;
            }
            else
            {
                return NotFound();
            }
        }

        // PUT: api/Graduates/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGraduate(string id, Graduate graduate)
        {
            if (id != graduate.GraduateId)
            {
                return BadRequest();
            }

            graduate.DateEdited = DateTime.Now.ToString("dd/MM/yyyy");

            _context.Entry(graduate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GraduateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Graduates
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Graduate>> PostGraduate(Graduate graduate)
        {
            _context.Graduates.Add(graduate);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GraduateExists(graduate.GraduateId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetGraduate", new { id = graduate.GraduateId }, graduate);
        }

        // DELETE: api/Graduates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGraduate(string id, Graduate graduate)
        {
            if (id != graduate.GraduateId)
            {
                return BadRequest();
            }

            graduate.IsDeleted = true;

            _context.Entry(graduate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GraduateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool GraduateExists(string id)
        {
            return _context.Graduates.Any(e => e.GraduateId == id);
        }
    }
}
