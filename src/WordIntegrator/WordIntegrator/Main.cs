using System.Threading.Tasks;

namespace WordIntegrator
{
    public class Main
    {
        public Task<object> GetHelloWorld(object obj)
        {
            return Task.FromResult<object>("Hello World!");
        }
    }
}
