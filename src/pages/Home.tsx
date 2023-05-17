import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-20 text-slate-800">Choose</h1>
      <div className="justify-center gap-4 p-4 rounded w-[350px] flex flex-col">
        <button
          onClick={() => navigate("/employee")}
          className="bg-slate-200 text-black text-2xl font-bold py-2 px-8 rounded transition-all hover:bg-slate-300"
        >
          Employee
        </button>
        <button
          onClick={() => navigate("/office")}
          className="bg-slate-200 text-black text-2xl font-bold py-2 px-8 rounded transition-all hover:bg-slate-300"
        >
          Office
        </button>
        <button
          onClick={() => navigate("/product")}
          className="bg-slate-200 text-black text-2xl font-bold py-2 px-8 rounded transition-all hover:bg-slate-300"
        >
          Product
        </button>
      </div>
    </div>
  );
};

export default Home;
