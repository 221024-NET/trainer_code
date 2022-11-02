using System;

namespace CollectionsExamples.App
{
    public class Program
    {
        public static void Main()
        {
            Console.WriteLine("Collection Example Starting!"); 
            Timer myTimer = new Timer();

            TimeSpan runTime = myTimer.Run();
            Console.WriteLine("Total elapsed time is: {0} ms", runTime.TotalMilliseconds);
            TimeSpan runTimeS = myTimer.RunStack();
            Console.WriteLine("Total elapsed time for Stack implementation is: {0} ms", runTimeS.TotalMilliseconds);
            TimeSpan runTimeQ = myTimer.RunQueue();
            Console.WriteLine("Total elapsed time for Queue implementation is: {0} ms", runTimeQ.TotalMilliseconds);
        }
    }
}