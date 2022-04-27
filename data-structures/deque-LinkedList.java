import java.util.*;

class Main {
  public static void main(String[] args) {
    Deque<String> q = new LinkedList<String>();
    q.addFirst("a");
    q.addLast("b");
    q.addLast("c");
    q.addLast("d");
    
    q.removeFirst();
    q.removeLast();
    System.out.println(q);
  }
}