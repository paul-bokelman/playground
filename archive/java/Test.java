package archive.java;

public class Test {

    public static int len(Object v) {
        if (v instanceof Pair) {
            Pair p = (Pair) v;
            return 1 + len(p.cdr());
        } else {
            return 0;
        }
    }

    public static void main(String[] args) {
        Object v = Pair.cons("a", Pair.cons("b", Pair.cons("c", null)));
        System.out.println(len(v));
    }
}