package archive.java;

public class Pair {
    private Object car, cdr;

    private Pair(Object car, Object cdr) {
        this.car = car;
        this.cdr = cdr;
    }

    public static Pair cons(Object car, Object cdr) {
        return new Pair(car, cdr);
    }

    public Object car() {
        return car;
    }

    public Object cdr() {
        return cdr;
    }
}