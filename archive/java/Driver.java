package archive.java;

import java.text.DecimalFormat;

public class Driver {
    public static void main(String[] args) {
        DecimalFormat df = new DecimalFormat("00000");
        String formatted = df.format(12);
        System.out.println(formatted);
        System.out.println(Integer.parseInt(formatted));
    }
}
