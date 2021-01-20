using System;
using System.Collections;

public static class ResistorColor
{
    public static int ColorCode(string color)
    {
        var colorArray = Colors();
        return Array.IndexOf(colorArray, color);
    }

    public static string[] Colors()
    {
        String[] colorsArray = {
            "black",
            "brown",
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "violet",
            "grey",
            "white"

        };
        return colorsArray;


    }
}