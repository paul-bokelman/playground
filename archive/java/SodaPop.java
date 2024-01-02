package archive.java;

public class SodaPop {

    public static void main(String[] args) {
        for (int i = 5; i < 50; i++) {
            if (i % 3 == 0 && i % 4 == 0) {
                System.out.print("Lemon ");
            } else if (i % 3 == 0) {
                System.out.print("Soda ");
            } else if (i % 4 == 0) {
                System.out.print("Pop ");
            } else {
                System.out.print(i + " ");
            }
        }
    }
}
