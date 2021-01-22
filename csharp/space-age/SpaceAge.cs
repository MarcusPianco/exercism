using System;

public class SpaceAge
{
    public int seconds;
    public SpaceAge(int seconds)
    {
        this.seconds = seconds;

    }

    public double OnEarth()
    {
        return Math.Round((this.seconds / 31557600.0), 2);
    }

    public double OnMercury()
    {
        return Math.Round((this.OnEarth() / 0.2408467), 2);
    }

    public double OnVenus()
    {
        return Math.Round((this.OnEarth() / 0.61519726), 2);
    }

    public double OnMars()
    {
        return Math.Round((this.OnEarth() / 1.8808158), 2);
    }

    public double OnJupiter()
    {
        return Math.Round((this.OnEarth() / 11.862615), 2);
    }

    public double OnSaturn()
    {
        return Math.Round((this.OnEarth() / 29.447498), 2);
    }

    public double OnUranus()
    {
        return Math.Round((this.OnEarth() / 84.016846), 2);
    }

    public double OnNeptune()
    {
        return Math.Round((this.OnEarth() / 164.79132), 2);
    }
}