using System;

public class Program
{
	// Fields
	public int test = 0;
	
	
	// Constructor
	// Methods
	//[access modifier] [modifier] [return type] [method name] ([parameters])
	public static void Main()
	{
		CoinFlipRepeat();
	}

	static void CoinFlipRepeat() {
		bool loop = true;

		while (loop == true) {
		CoinFlipper();
		Console.WriteLine("Would you like to flip the coin again?");
		Console.WriteLine("y-yes or Y-yes other keys will exit");
		string input = Console.ReadLine();

	if (input.Equals("y") || (input.Equals("Y"))) {
		CoinFlipper();
		loop = true;
	} 
	else {
		loop = false;
	}

		}
	}





	public static void CoinFlipper() {
		Console.WriteLine("Starting Coin Flipper:");
		
		Console.WriteLine("Enter the number of coins to flip: ");
		
		string UserNumber = Console.ReadLine();
		int Num = 0;
		
		try
		{
			Num = Int32.Parse(UserNumber);
			if ( Num <= 0 )
			{
				throw new Exception("Argument may not be negative");
			}
		}
		catch( InvalidOperationException e )
		{
			Console.WriteLine("A less specific catch: " + e.Message);
		}
		catch( ArgumentException e)
		{
			Console.WriteLine(e.Message);
		}
		catch( Exception e )
		{
			Console.WriteLine("The least specific catch: " + e.Message);
		}
		
		Flip(Num);
	}
	
	//[access modifier] [modifier] [return type] [method name] ([parameters])
	public static void Flip(int Num)
	{
		var rand = new Random();
		
		for (int i = 0; i < Num; i++)
		{
			int coin = rand.Next(2);
			HoT(coin);
		}
	}

	
	public static void HoT(int coin)
	{
		if (coin == 0)
		{
			Console.WriteLine("Heads");	
		}
		else
		{
			Console.WriteLine("Tails");
		}
		
	}
}