package archive.java;

import java.util.Scanner;
import java.util.ArrayList;

public class MathHelper {
    private static void calculateGCD(Scanner scanner) {
        System.out.println("Please Enter an Integer ");
        int firstInteger = scanner.nextInt();
        System.out.println("Please Enter a Second Integer:");
        int secondInteger = scanner.nextInt();
        while (secondInteger != 0) {
            int sub = secondInteger;
            secondInteger = firstInteger % secondInteger;
            firstInteger = sub;
        }
        System.out.println("The Greatest Common Denominator is " + firstInteger);
    }

    private static void primeFactorization(Scanner scanner) {
        System.out.println("Please Enter an Integer: ");
        int inputInteger = scanner.nextInt();
        ArrayList<Integer> primeFactors = new ArrayList<Integer>();
        if (inputInteger < 2) {
            System.out.println("Invalid Input - Returning to Main Menu");
            return;
        }
        System.out.print("The Prime Factorization of " + inputInteger + " is: ");
        for (int currentFactor = 2; currentFactor <= inputInteger; currentFactor++) {
            while (inputInteger % currentFactor == 0) {
                primeFactors.add(currentFactor);
                inputInteger = inputInteger / currentFactor;
            }
        }
        for (int currentIndex = 0; currentIndex < primeFactors.size(); currentIndex++) {
            System.out.print(primeFactors.get(currentIndex));
            if (currentIndex != primeFactors.size() - 1) {
                System.out.print(" x ");
            }
        }
        System.out.println();
    }

    public static void main(String[] args) {
        boolean running = true;
        boolean displayMenu = true;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to My Math Helper!");
        while (running) {

            if (displayMenu) {
                System.out.println("Please Select an Operation");
                System.out.println("1 - Calculate Greatest Common Denominator");
                System.out.println("2 - Perform Prime Factorization");
                System.out.println("3 - Exit");
            } else {
                displayMenu = true;
            }

            if (!scanner.hasNextLine()) {
                scanner.close();
                return;
            }

            String input = scanner.nextLine();

            if (input.equals("")) {
                displayMenu = false;
                continue;
            }

            if (!input.equals("1") && !input.equals("2") && !input.equals("3")) {
                System.out.println("Invalid selection!");
                continue;
            }

            switch (Integer.parseInt(input)) {
                case 1:
                    System.out.println("Ready to Calculate Greatest Common Denominator");
                    calculateGCD(scanner);
                    break;
                case 2:
                    System.out.println("Ready to Perform Prime Factorization");
                    primeFactorization(scanner);
                    break;
                case 3:
                    System.out.println("Thank you for using My Math Helper!");
                    running = false;
                    break;
                default:
                    break;
            }
        }

        scanner.close();

    }
}