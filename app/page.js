import Image from "next/image";
import SlideBar from "./components/slideBar";
export default function Home() {
  return (
    <div>
      <header className="grid grid-cols-1 p-7 justify-center lg:grid-cols-2">
        <div className="flex justify-center">
          <SlideBar />
        </div>
        <div>
          <div className="text-2xl p-7  max-w-lg mx-auto">
            <h1 className="text-4xl font-extrabold text-amber-900 drop-shadow-lg my-5">
              BURGERZILLA: WHERE BURGERS RULE 👑🍔🔥
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed ">
              At Burgerzilla, we serve giant, flavor-packed burgers. Come hungry, leave happy—because size matters, and taste is king! 👑🍔🔥
            </p>
            <div className="flex justify-between">
              <button className="text-xl text-[#c46f01]">
                Join the Community
              </button>
              <button className="text-white bg-[#ffa125] p-2 rounded-2xl my-5">
                Explor meals
              </button>
            </div>
          </div>



        </div>
      </header>

      <main className="py-16 bg-gray-100">
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900">How Burgerzilla Works 🍔🔥</h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            At Burgerzilla, we craft legendary, oversized burgers with the freshest ingredients and bold flavors. Every bite is a feast, made to satisfy the biggest appetites!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Order online, visit our store, or challenge yourself to our monstrous burgers—because at Burgerzilla, size matters! 👑🍔
          </p>
        </section>

        <section className="max-w-4xl mx-auto text-center mt-12">
          <h2 className="text-3xl font-bold text-amber-900">Why Choose Burgerzilla? 👑</h2>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            🔥 Gigantic, juicy burgers packed with flavor
            🍔 Fresh, high-quality ingredients in every bite
            🏆 A burger experience like no other—big, bold, and unforgettable!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join the Burgerzilla family and taste the legend. Come hungry, leave happy! 🚀🍟
          </p>
        </section>
      </main>



    </div>
  );
}
