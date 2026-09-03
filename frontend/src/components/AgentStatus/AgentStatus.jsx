import "./AgentStatus.css";

function AgentStatus() {

  const agents = [

    {
      name: "Safety Agent",
      status: "Running",
      color: "#22C55E"
    },

    {
      name: "Weather Agent",
      status: "Running",
      color: "#22C55E"
    },

    {
      name: "Schedule Agent",
      status: "Processing",
      color: "#F59E0B"
    },

    {
      name: "Cost Agent",
      status: "Running",
      color: "#22C55E"
    },

    {
      name: "Resource Agent",
      status: "Warning",
      color: "#EF4444"
    },

    {
      name: "Quality Agent",
      status: "Running",
      color: "#22C55E"
    }

  ];

  return (

    <div className="agent-card">

      <h2>🤖 AI Agent Status</h2>

      {

        agents.map((agent,index)=>(

          <div className="agent-row" key={index}>

            <div>

              <strong>{agent.name}</strong>

            </div>

            <span
              className="status"
              style={{background:agent.color}}
            >

              {agent.status}

            </span>

          </div>

        ))

      }

    </div>

  );

}

export default AgentStatus;