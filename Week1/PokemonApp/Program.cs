﻿using System;
using PokemonApp;

namespace Program{

    class Program{

        static void Main(string[] args)
        {
            //Initializing an object
            //We call the constructor, and pass it the desired values for this object
            Pokemon pikachu = new Pokemon("Pikachu", 25, "Electric", 12, "Static");

            Pokemon pikachu2 = new Pokemon("Pikachu", 25, "Electric", 12);
<<<<<<< HEAD
            Pokemon charizard = new Pokemon("Charizard");
            


=======

            Pokemon charizard = new Pokemon("Charizard", "green", "ocean");

            // Animal newAnimal = new Animal("red", "Jungle", 5, 5, "feline");
            // Animal secondAnimal = new Animal();
            
            // Console.WriteLine("SecondAnimal: ");
            // secondAnimal.Introduce();

            // newAnimal.Introduce();

            Console.WriteLine("Charizard info: ");
            charizard.Introduce();
            charizard.PrintName();
            Console.WriteLine(charizard.CountLegs());
            Console.WriteLine(charizard.FindColor());


            Console.WriteLine("Pupper info: ");
            IAnimal pupper = new Dog(60, "woof");
            Console.WriteLine(pupper.CountLegs());
            Console.WriteLine(pupper.FindColor());
            pupper.Speak();

/*
>>>>>>> main
            //Calling an Instance method - belongs to the object itself.
            //Called by using object.method() 
            pikachu.PrintName();
            pikachu2.PrintName();
            charizard.PrintName();

            //Calling a Static method - belongs to the class.
            //Called by using Class.method()
            Pokemon.PrintMessage();

            //Accessing a Static field - belongs to the class.
            //Called by referencing the class itself.
            Console.WriteLine(Pokemon.isPokemon);


            Console.WriteLine(pikachu.ToString());

<<<<<<< HEAD
            Console.WriteLine(pikachu.DexNumber);

=======
            Console.WriteLine(pikachu.name);
*/
>>>>>>> main
        }
        

    }

}