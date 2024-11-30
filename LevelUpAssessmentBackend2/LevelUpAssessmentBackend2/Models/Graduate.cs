using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using System.Globalization;
using System.Text.RegularExpressions;

namespace LevelUpAssessmentBackend2.Models
{
    public class Graduate
    {
        public string GraduateId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string DateOfBirth { get; set; }
        public int Age { get; set; }
        public string DateCreated { get; set; }
        public string? DateEdited { get; set; }
        public bool IsDeleted { get; set; }

        public Graduate(string firstName, string lastName, string emailAddress, string dateOfBirth)
        {
            Guid graduateIdGuid = Guid.NewGuid();
            GraduateId = graduateIdGuid.ToString();
            FirstName = firstName;
            LastName = lastName;

            if (isValidEmail(emailAddress))
            {
                EmailAddress = emailAddress;
            }
            else
            {
                throw new Exception("Email invalid");
            }

            if (isValidDOB(dateOfBirth))
            {
                DateOfBirth = dateOfBirth;
            }
            else
            {
                throw new Exception("Date of birth invalid");
            }

            Age = (DateTime.Today.Year - DateTime.ParseExact(dateOfBirth, "dd/MM/yyyy", CultureInfo.InvariantCulture).Year);
            
            DateCreated = DateTime.Now.ToString("dd/MM/yyyy");
            IsDeleted = false;
        }

      

        //uses regex to validate email
        private bool isValidEmail(string emailAddress)
        {
            if (string.IsNullOrWhiteSpace(emailAddress))
            {
                return false;
            }

            try
            {
                emailAddress = Regex.Replace(emailAddress, @"(@)(.+)$", DomainMapper,
                                      RegexOptions.None, TimeSpan.FromMilliseconds(200));

                string DomainMapper(Match match)
                {
                    var idn = new IdnMapping();

                    string domainName = idn.GetAscii(match.Groups[2].Value);

                    return match.Groups[1].Value + domainName;
                }
            }
            catch (RegexMatchTimeoutException e)
            {
                return false;
            }
            catch (ArgumentException e)
            {
                return false;
            }

            try
            {
                return Regex.IsMatch(emailAddress,
                    @"^[^@\s]+@[^@\s]+\.[^@\s]+$",
                    RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(250));
            }
            catch (RegexMatchTimeoutException)
            {
                return false;
            }
        }

        private bool isValidDOB(string dateOfBirth)
        {
            DateTime currentDate = DateTime.Now;
            DateTime dateOfBirthDate = DateTime.ParseExact(dateOfBirth, "dd/MM/yyyy", CultureInfo.InvariantCulture); ;

            if (dateOfBirthDate < currentDate) 
            {
                return true;
            }
            else
            {
                return false;
            }
        }




    }
}
