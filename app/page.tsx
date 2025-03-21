import Categories from "./components/Categories";
import PropertyList from "./components/Properties/PropertyList";


export default function Home() {
  return (
      <main className="max-[1500px] mx-auto px-6">
        <Categories/>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <PropertyList/> 
      </div>
       
      </main>
      
    
  );
}
