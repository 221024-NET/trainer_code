namespace CollectionsExamples.App
{
    public class Timer
    {
        // Fields

        // Constructors
        public Timer(){}

        public TimeSpan Run()
        {

            // start a timer
            DateTime start = DateTime.Now;

            // some time intensive action
            DictionaryTests tmp = new DictionaryTests();
            //tmp.printSomething();

            // stop the timer
            DateTime stop = DateTime.Now;

            TimeSpan ts = stop - start;

            // return the value of the timer
            return ts;
        }

        // Methods
        public TimeSpan RunDictionary()
        {

            // start a timer
            DateTime start = DateTime.Now;

            // some time intensive action
            DictionaryTests tmp = new DictionaryTests();
            //tmp.printSomething();

            // stop the timer
            DateTime stop = DateTime.Now;

            TimeSpan ts = stop - start;

            // return the value of the timer
            return ts;
        }

        public TimeSpan RunArray()
        {

            // start a timer
            DateTime start = DateTime.Now;

            // some time intensive action
            string [,] arr = new string [3,2];
            arr[0,0] = "animal";
            arr[0,1] = "dog";
            arr[1,0] = "canine";
            arr[1,1] = "cat";
            arr[2,0] = "herbivore";
            arr[2,1] = "hamster";
            Console.WriteLine("------Initializing Array------");
            for (int i = 0; i < 3; i++) {
                Console.WriteLine("Key: {0}, Value: {1}",arr[i,0], arr[i,1]);
            }
            Console.WriteLine("-----------------------------------");

            arr[1,1] = "dog";

            Console.WriteLine("-------Modifying: Cat to Dog--------");
            for (int i = 0; i < 3; i++) {
                Console.WriteLine("Key: {0}, Value: {1}",arr[i,0], arr[i,1]);
            }
            Console.WriteLine("------------------------------------");

            string [,] newArr = new string [2,2];

            for (int i = 0; i < 2; i++) {
                newArr[i, 0] = arr[i+1, 0];
                newArr[i, 1] = arr[i+1, 1];
            }

            Console.WriteLine("------Removing: Animal--------------");
            for (int i = 0; i < 2; i++) {
                Console.WriteLine("Key: {0}, Value: {1}",newArr[i,0], newArr[i,1]);
            }
            Console.WriteLine("------------------------------------");
            

            

            // stop the timer
            DateTime stop = DateTime.Now;

            TimeSpan ts = stop - start;

            // return the value of the timer
            return ts;
        }

    }
}