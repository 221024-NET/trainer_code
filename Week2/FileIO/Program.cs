﻿using System.IO;
using System;

namespace FileIO
{
    public class Program
    {
        public static void Main()
        {
            Console.WriteLine("Hello, World!");

            string path = "./testFile.txt";

            string[] text = {"hi", "Hello" , "There", "Hows", "It", "Going?"};

            // File.WriteAllLines(path, text);

            // File.AppendAllLines(path, text);

            string[] content = File.ReadAllLines(path);

            foreach (string s in content)
                Console.WriteLine(s);
        }
    }
}