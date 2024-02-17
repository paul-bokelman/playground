package archive.java;

import java.util.Scanner;

public class CreateNewUser {
        public static void main(String[] args) {
                Scanner scan = new Scanner(System.in);

                String formattedString = "";

                System.out.print("Enter Customer First Name: ");
                String firstName = scan.nextLine();
                formattedString = firstName.substring(0, 1).toLowerCase()
                                + firstName.substring(firstName.length() - 1, firstName.length()).toLowerCase();

                System.out.print("Enter Customer Last Name: ");
                String lastName = scan.nextLine();

                formattedString = lastName.substring(0, 2).toUpperCase() + formattedString;

                System.out.print("Enter Customer Age: ");
                String age = scan.nextLine();
                formattedString = age.substring(0, 1) + formattedString
                                + String.format("%4s", Integer.toBinaryString(Integer.parseInt(age.substring(1, 2))))
                                                .replace(" ", "0");

                System.out.print("Enter Customer Street Address: ");
                String address = scan.nextLine();
                formattedString = formattedString + address.replace(" ", "").toUpperCase();
                System.out.print("Enter Customer City: ");
                String city = (scan.nextLine()).toUpperCase();
                formattedString = formattedString + " " + city.substring(0, 2);
                System.out.print("Enter Customer State: ");
                String state = (scan.nextLine()).toUpperCase();
                formattedString = formattedString + ((int) state.charAt(0) + (int) state.charAt(1));

                System.out.print("Enter Customer Zip Code: ");
                String zip = scan.nextLine();

                formattedString = formattedString
                                + (Integer.parseInt(zip.substring(0, 1)) + Integer.parseInt(zip.substring(2, 3)));

                System.out.print("Enter Customer Phone Number: ");
                String phone = scan.nextLine();

                formattedString = formattedString + phone.substring(6, 10);
                formattedString = (firstName.length() + lastName.length() + age.length() + address.length()
                                + city.length()
                                + state.length() + zip.length() + phone.length()) + formattedString;
                formattedString = formattedString.replace("O", "").replace("I", "");

                System.out.println("The Assigned User String is " + formattedString);

                scan.close();
        }
}