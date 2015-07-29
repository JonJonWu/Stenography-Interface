import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;

public class parseMain {

	public static void main(String[] args) throws IOException {
		File file = new File(
				"/Users/Quiksilvr/Documents/workspace/ParseMongo/Nancy.json");
		FileReader filein = new FileReader(file);
		FileWriter fileOut = new FileWriter("output.json");

		InputStream fis = new FileInputStream(file);
		InputStreamReader isr = new InputStreamReader(fis,
				Charset.forName("UTF-8"));
		BufferedReader br = new BufferedReader(isr);

		int count = 0;
		String words = "";
		int charIn = 0;

		while (br.read() != -1) {
			words = br.readLine();
			int colon = words.indexOf(':');
			String firstHalf = words.substring(0, colon);
			String secondHalf = words.substring(colon, words.length());
			words = "{ steno:" + firstHalf + ",qwerty" + secondHalf + "\n";
			System.out.print(words);
			fileOut.write(words);
			fileOut.flush();
			words = "";
		}
	}
}
