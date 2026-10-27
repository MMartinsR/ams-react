import { Outlet, useNavigate } from "react-router";

export function Frame() {
  const navigate = useNavigate();

  const navigateToComponent = () => {
    navigate("/component");
  };

  const navigateToOther = () => {
    navigate("/other");
  };

  return (
    <div>
      <button onClick={navigateToComponent}>Component</button>
      <button onClick={navigateToOther}>Other</button>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
