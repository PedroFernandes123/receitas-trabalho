"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { recipes } from "@/lib/data";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <main className="flex-grow">

      {/* seção Hero */}
      <section className="bg-orange-50 py-12">
        <div className="flex flex-col gap-6 items-center container mx-auto px-4 sm:px-0 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold">Receitas deliciosas</h1>
          <p className="text-base sm:text-xl sm:p-2">Descubra receitas simples e saborosas para todas as ocasiões</p>

          <Link className="bg-orange-500 hover:bg-orange-700 transition-colors text-white font-bold rounded-lg px-3 py-2 w-full max-w-xs sm:w-auto text-center" href="/receitas">
            Ver todas as receitas
          </Link>
        </div>
      </section>

      {/* seção receitas em destaque */}
      <section className="py-12">
        <div className="flex flex-col items-center container mx-auto gap-8">
          <h2 className="text-lg font-bold">Receitas em destaque</h2>
            <div className="flex w-full gap-8 flex-col sm:flex-row">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe}/>
            ))}
          </div>

          <Link className="flex text-orange-400 hover:text-orange-700 transition-colors" href="/receitas">
            Ver todas as receitas
            <ChevronRight />
          </Link>
        </div>
      </section>
    </main>
  );
}