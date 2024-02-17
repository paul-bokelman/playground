package archive.java;

public class ParseElo {
    public static void main(String[] args) {
        String input = "1350-L1500-W1200-L1480-W1415-L1520";
        int numberOfHyphens = 0;
        for (int i = 0; i < input.length(); i++) {
            if (input.charAt(i) == '-') {
                numberOfHyphens++;
            }
        }

        String[] players = new String[numberOfHyphens + 1];
        int currentPlayerIndex = 0;
        boolean reinitialize = true;
        for (char c : input.toCharArray()) {
            if (reinitialize) {
                players[currentPlayerIndex] = "";
                reinitialize = false;
            }
            if (c == '-') {
                currentPlayerIndex++;
                reinitialize = true;
                continue;
            } else {
                players[currentPlayerIndex] += c;
            }
        }

        int[] elos = new int[numberOfHyphens + 1];

        // iterate over players
        for (int playerIndex = 1; playerIndex < players.length; playerIndex++) {
            Double primaryPlayerElo = elos[0] == 0 ? Double.parseDouble(players[0]) : elos[0];
            Double indexedPlayerElo = Double.parseDouble(players[playerIndex].substring(1)); // n player elo
            boolean indexedPlayerIsWinner = players[playerIndex].charAt(0) == 'W'; // player1 loses if true
            double r1 = Math.pow(10, ((double) primaryPlayerElo / 400));
            double r2 = Math.pow(10, ((double) indexedPlayerElo / 400));
            double e1 = (r1 / (r1 + r2));
            double e2 = (r2 / (r2 + r1));

            double primaryPlayerScalar = (indexedPlayerIsWinner ? (1 - e1) : (0 - e1));
            double indexedPlayerScalar = (indexedPlayerIsWinner ? (0 - e2) : (1 - e2));

            elos[0] = (int) (primaryPlayerElo + 25 * primaryPlayerScalar); // primary player loses
            elos[playerIndex] = (int) (indexedPlayerElo + 25 * indexedPlayerScalar);
        }

        for (int eloIndex = 0; eloIndex < elos.length; eloIndex++) {
            System.out.print(elos[eloIndex] + (eloIndex + 1 != elos.length ? "-" : ""));
        }
    }
}
