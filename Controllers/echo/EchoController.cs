using Microsoft.AspNetCore.SignalR;

namespace SignalRR.Controllers.Echo
{
    public class EchoController : Hub
    {

        public void Echo(string poruka)
        {
            Clients.All.SendAsync("Send", poruka);
        }

    }
}