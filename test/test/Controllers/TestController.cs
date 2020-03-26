using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using test.Models;

namespace test.Controllers
{
    public class TestController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        public List<TestUser> Get(int id)
        {
            var db = new testEntities1();
            var x = db.TestUsers.ToList();
            return x;
        }


        [HttpPost]
        public void AddUsers([FromBody]TestUser value)
        {
            var db = new testEntities1();
            db.TestUsers.Add(value);
            db.SaveChanges();
        }

        [HttpPost]
        public void UpdateUser(int id, [FromBody]TestUser value)
        {
            var db = new testEntities1();
            var x = db.TestUsers.ToList();
            TestUser currUser = x.Where(s => s.Id.Equals(id)).FirstOrDefault();
            if (currUser != null)
            {
                currUser.FirstName = value.FirstName;
                currUser.LastName = value.LastName;
                currUser.StreetNumber = value.StreetNumber;
                currUser.StreetName = value.StreetName;
                currUser.Email = value.Email;
                currUser.State = value.State;
                currUser.CitySuburb = value.CitySuburb;
                currUser.Postcode = value.Postcode;
            }
            db.SaveChanges();
        }

        [HttpDelete]
        public object Delete(int id)
        {
            var db = new testEntities1();
            var x = db.TestUsers.ToList();
            TestUser currUser = x.Where(s => s.Id.Equals(id)).FirstOrDefault();
            if(currUser != null)
                db.TestUsers.Remove(currUser);

            db.SaveChanges();

            return new { error = "no error" };
        }
    }
}
