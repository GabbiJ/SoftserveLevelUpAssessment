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
        public string DateEdited { get; set; }
        public bool IsDeleted { get; set; }

        public Graduate(string firstName, string lastName, string emailAddress, string dateOfBirth, int age, string dateCreated, string dateEdited, bool isDeleted)
        {
            Guid graduateIdGuid = Guid.NewGuid();
            GraduateId = graduateIdGuid.ToString();
            FirstName = firstName;
            LastName = lastName;
            //TO DO Validate email
            EmailAddress = emailAddress;
            DateOfBirth = dateOfBirth;
            //TO DO: calculating date of birth
            //TO DO: validate date of birth
            Age = age;
            DateCreated = dateCreated;
            DateEdited = dateEdited;
            IsDeleted = isDeleted;
        }

        public Graduate()
        {
            Guid graduateIdGuid = Guid.NewGuid();
            GraduateId = graduateIdGuid.ToString();
        }

    }
}
