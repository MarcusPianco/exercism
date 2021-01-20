using System;

public static class Gigasecond
{
    public static DateTime Add(DateTime moment)
    {
        var gigaSecond =  moment.AddSeconds(Math.Pow(10,9));
        return gigaSecond;
    }
}