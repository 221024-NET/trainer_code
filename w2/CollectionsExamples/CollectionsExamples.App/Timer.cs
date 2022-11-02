namespace CollectionsExamples.App
{
    public class Timer
    {
        // Fields

        // Constructors
        public Timer(){}

        // Methods
        public TimeSpan Run()
        {

            // start a timer
            DateTime start = DateTime.Now;

            // some time intensive action
            Demo tmp = new Demo();
            tmp.getDifferences();

            // stop the timer
            DateTime stop = DateTime.Now;

            TimeSpan ts = stop - start;

            // return the value of the timer
            return ts;
        }

        public TimeSpan RunStack()
        {
            DateTime start = DateTime.Now;

            StackQueue temp = new StackQueue(0);
            temp.clearStack();

            DateTime stop = DateTime.Now;

            TimeSpan ts = stop - start;
            return ts;
        }

        public TimeSpan RunQueue()
        {
            DateTime start = DateTime.Now;

            StackQueue temp = new StackQueue(1);
            temp.clearQueue();

            DateTime stop = DateTime.Now;

            TimeSpan ts = stop - start;
            return ts;
        }
    }
}