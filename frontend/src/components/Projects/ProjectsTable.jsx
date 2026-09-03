import "./ProjectsTable.css";

function ProjectsTable() {

  const projects = [
    {
      id: "P001",
      name: "Metro Rail Extension",
      progress: "82%",
      risk: "Low",
      budget: "₹18 Cr",
      status: "On Track",
    },
    {
      id: "P002",
      name: "Smart City Phase II",
      progress: "61%",
      risk: "Medium",
      budget: "₹25 Cr",
      status: "Delayed",
    },
    {
      id: "P003",
      name: "Highway Bridge",
      progress: "45%",
      risk: "High",
      budget: "₹42 Cr",
      status: "Critical",
    },
    {
      id: "P004",
      name: "Commercial Tower",
      progress: "73%",
      risk: "Low",
      budget: "₹31 Cr",
      status: "Running",
    }
  ];

  return (
    <div className="projects-table">

      <h2>📋 Recent Projects</h2>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Project</th>
            <th>Progress</th>
            <th>Risk</th>
            <th>Budget</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (

            <tr key={project.id}>

              <td>{project.id}</td>

              <td>{project.name}</td>

              <td>{project.progress}</td>

              <td>{project.risk}</td>

              <td>{project.budget}</td>

              <td>{project.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProjectsTable;