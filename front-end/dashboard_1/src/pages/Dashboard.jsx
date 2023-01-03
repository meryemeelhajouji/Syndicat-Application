
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Content from "..//components/Content";

function Dashboard() {
  return (
   <div>
 <div className="App h-screen overflow-y-scroll scrollbar-hide overflow-x-hidden px-6">
      <Header />
      <div className="flex items-start space-x-2 justify-start w-full ">
        <Navbar />
        <Content />
      </div>
    </div>
   </div>
  );
}

export default Dashboard;
