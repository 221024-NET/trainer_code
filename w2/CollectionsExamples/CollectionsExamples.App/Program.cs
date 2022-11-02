﻿using System;

namespace CollectionsExamples.App
{
    public class Program
    {
        public static void Main()
        {
            Console.WriteLine("Collection Example Starting!"); 
            Timer myTimer = new Timer();

            TimeSpan runTime = myTimer.RunDictionary();
            Console.WriteLine("Total elapsed time is: {0} ms", runTime.TotalMilliseconds);
            Console.WriteLine();
            runTime = myTimer.RunArray();
            Console.WriteLine("Total elapsed time is: {0} ms", runTime.TotalMilliseconds);
        }
    }
}