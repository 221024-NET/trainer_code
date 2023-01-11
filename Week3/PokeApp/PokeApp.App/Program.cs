﻿using PokeApp.Data;
using PokeApp.Logic;
using System;
using System.Data.SqlClient;

namespace PokeApp.App
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            string ConnectionString = File.ReadAllText(@"/Revature/221024-NET/ConnectionStrings/PokeAppConnectionString.txt");

            IRepository repo = new SqlRepository(ConnectionString);

            Game newGame = new Game(repo);

            //Pokemon myPokemon = new Pokemon("Jimmy", 1, 0, 10, 4, 00, 153);

            //Console.WriteLine(myPokemon.Speak());

            List<Pokemon> Pokemons = repo.GetAllPokemon();

            foreach (Pokemon poke in Pokemons)
            {
                Console.WriteLine(poke.Speak());
                newGame.UpdatePokemonName(poke);
                Console.WriteLine(poke.Speak());
            }
        }
    }
}